import { ethers } from "ethers";

export function buildPolicyId(name: string): string {
  return ethers.id(name);
}

export function encodeEmergencyWithdrawal(recipient: string, amount: string): string {
  return ethers.AbiCoder.defaultAbiCoder().encode(["address", "uint256"], [recipient, amount]);
}
