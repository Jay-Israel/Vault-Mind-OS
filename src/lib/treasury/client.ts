import { ethers, BrowserProvider, JsonRpcProvider, Signer, Contract, Provider } from "ethers";
import { VaultMindAddresses, VaultMindContracts } from "./types";
import VaultMindTokenAbi from "../../../artifacts/contracts/VaultMindToken.sol/VaultMindToken.json";
import VaultMindTreasuryAbi from "../../../artifacts/contracts/VaultMindTreasury.sol/VaultMindTreasury.json";
import PolicyManagerAbi from "../../../artifacts/contracts/PolicyManager.sol/PolicyManager.json";

export function createProvider(rpcUrl?: string): Provider {
  if (typeof window !== "undefined" && (window as any).ethereum) {
    return new BrowserProvider((window as any).ethereum);
  }

  return new JsonRpcProvider(rpcUrl ?? "http://127.0.0.1:8545");
}

export function createWallet(provider: Provider, privateKey: string): ethers.Wallet {
  return new ethers.Wallet(privateKey, provider);
}

export function createVaultMindContracts(addresses: VaultMindAddresses, signerOrProvider: Signer | Provider): VaultMindContracts {
  return {
    token: new Contract(addresses.token, VaultMindTokenAbi.abi, signerOrProvider),
    treasury: new Contract(addresses.treasury, VaultMindTreasuryAbi.abi, signerOrProvider),
    policyManager: new Contract(addresses.policyManager, PolicyManagerAbi.abi, signerOrProvider)
  };
}
