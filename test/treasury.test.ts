import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("VaultMind treasury ecosystem", function () {
  let token: Contract;
  let treasury: Contract;
  let policyManager: Contract;
  let deployer: any;
  let strategist: any;
  let executor: any;

  beforeEach(async () => {
    [deployer, strategist, executor] = await ethers.getSigners();

    const tokenFactory = await ethers.getContractFactory("VaultMindToken");
    token = (await tokenFactory.deploy(deployer.address, "VaultMind Token", "VMT")) as VaultMindToken;
    await token.deployed();

    const treasuryFactory = await ethers.getContractFactory("VaultMindTreasury");
    treasury = (await treasuryFactory.deploy(deployer.address, ethers.constants.AddressZero)) as VaultMindTreasury;
    await treasury.deployed();

    const policyFactory = await ethers.getContractFactory("PolicyManager");
    policyManager = (await policyFactory.deploy(treasury.address)) as PolicyManager;
    await policyManager.deployed();

    await treasury.updatePolicyManager(policyManager.address);
    await treasury.grantRole(ethers.utils.keccak256(ethers.utils.toUtf8Bytes("STRATEGIST_ROLE")), strategist.address);
    await policyManager.grantRole(ethers.utils.keccak256(ethers.utils.toUtf8Bytes("EXECUTOR_ROLE")), executor.address);
  });

  it("should deposit ERC20 into treasury", async function () {
    const amount = ethers.utils.parseEther("100");
    await token.transfer(strategist.address, amount);
    await token.connect(strategist).approve(treasury.address, amount);

    await expect(treasury.connect(strategist).depositERC20(token.address, amount))
      .to.emit(treasury, "ERC20Deposit")
      .withArgs(strategist.address, token.address, amount);
  });

  it("should allow strategist to withdraw ETH and ERC20 after deposit", async function () {
    const deposit = ethers.utils.parseEther("1");
    await deployer.sendTransaction({ to: treasury.address, value: deposit });

    await expect(treasury.connect(strategist).withdrawETH(strategist.address, deposit))
      .to.emit(treasury, "Withdrawal")
      .withArgs(strategist.address, deposit);

    const amount = ethers.utils.parseEther("50");
    await token.transfer(treasury.address, amount);
    await expect(treasury.connect(strategist).withdrawERC20(token.address, strategist.address, amount))
      .to.emit(treasury, "ERC20Withdrawal")
      .withArgs(strategist.address, token.address, amount);
  });

  it("should register and execute a policy via PolicyManager", async function () {
    const target = treasury.address;
    const policyId = ethers.utils.id("withdraw-eth-policy");

    await policyManager.registerPolicy(policyId, target, "Withdraw ETH from treasury");

    const data = treasury.interface.encodeFunctionData("withdrawETH", [strategist.address, ethers.utils.parseEther("0")]);
    await expect(policyManager.connect(executor).executePolicy(policyId, 0, data))
      .to.emit(policyManager, "PolicyExecuted")
      .withArgs(policyId, executor.address, 0, data);
  });

  it("should pause and unpause treasury correctly", async function () {
    await treasury.pause();
    await expect(treasury.connect(strategist).withdrawETH(strategist.address, 0)).to.be.reverted;
    await treasury.unpause();
  });
});
