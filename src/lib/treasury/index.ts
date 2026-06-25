import { ethers, Contract, providers, Signer } from "ethers";
import VaultMindTokenAbi from "../../../artifacts/contracts/VaultMindToken.sol/VaultMindToken.json";
import VaultMindTreasuryAbi from "../../../artifacts/contracts/VaultMindTreasury.sol/VaultMindTreasury.json";
import PolicyManagerAbi from "../../../artifacts/contracts/PolicyManager.sol/PolicyManager.json";

export interface VaultMindAddresses {
  token: string;
  treasury: string;
  policyManager: string;
}

export interface VaultMindContracts {
  token: Contract;
  treasury: Contract;
  policyManager: Contract;
}

export function createVaultMindContracts(addresses: VaultMindAddresses, provider: providers.Provider | Signer): VaultMindContracts {
  const signerOrProvider = provider as Signer;
  return {
    token: new Contract(addresses.token, VaultMindTokenAbi.abi, signerOrProvider),
    treasury: new Contract(addresses.treasury, VaultMindTreasuryAbi.abi, signerOrProvider),
    policyManager: new Contract(addresses.policyManager, PolicyManagerAbi.abi, signerOrProvider)
  };
}

export async function getTreasuryBalance(treasury: Contract): Promise<string> {
  const balance = await treasury.treasuryBalance();
  return ethers.utils.formatEther(balance);
}
