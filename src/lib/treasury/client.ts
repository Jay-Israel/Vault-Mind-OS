import { ethers } from "ethers";
import { VaultMindAddresses, VaultMindContracts } from "./types";
import VaultMindTokenAbi from "../../../../artifacts/contracts/VaultMindToken.sol/VaultMindToken.json";
import VaultMindTreasuryAbi from "../../../../artifacts/contracts/VaultMindTreasury.sol/VaultMindTreasury.json";
import PolicyManagerAbi from "../../../../artifacts/contracts/PolicyManager.sol/PolicyManager.json";

export function createProvider(rpcUrl?: string): ethers.providers.Provider {
  if (typeof window !== "undefined" && (window as any).ethereum) {
    return new ethers.providers.Web3Provider((window as any).ethereum);
  }

  return new ethers.providers.JsonRpcProvider(rpcUrl ?? "http://127.0.0.1:8545");
}

export function createWallet(provider: ethers.providers.Provider, privateKey: string): ethers.Wallet {
  return new ethers.Wallet(privateKey, provider);
}

export function createVaultMindContracts(addresses: VaultMindAddresses, signerOrProvider: ethers.Signer | ethers.providers.Provider): VaultMindContracts {
  return {
    token: new ethers.Contract(addresses.token, VaultMindTokenAbi.abi, signerOrProvider),
    treasury: new ethers.Contract(addresses.treasury, VaultMindTreasuryAbi.abi, signerOrProvider),
    policyManager: new ethers.Contract(addresses.policyManager, PolicyManagerAbi.abi, signerOrProvider)
  };
}
