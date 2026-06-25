import { ethers } from "hardhat";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with", deployer.address);

  const tokenFactory = await ethers.getContractFactory("VaultMindToken");
  const treasuryFactory = await ethers.getContractFactory("VaultMindTreasury");
  const policyFactory = await ethers.getContractFactory("PolicyManager");

  const token = await tokenFactory.deploy(deployer.address, "VaultMind Token", "VMT");
  await token.deployed();
  console.log("VaultMindToken deployed to", token.address);

  const treasury = await treasuryFactory.deploy(deployer.address, ZERO_ADDRESS);
  await treasury.deployed();
  console.log("VaultMindTreasury deployed to", treasury.address);

  const policyManager = await policyFactory.deploy(treasury.address);
  await policyManager.deployed();
  console.log("PolicyManager deployed to", policyManager.address);

  const tx = await treasury.updatePolicyManager(policyManager.address);
  await tx.wait();
  console.log("Policy manager linked to treasury");

  console.log("Deployment complete.");
  console.log(JSON.stringify({ token: token.address, treasury: treasury.address, policyManager: policyManager.address }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
