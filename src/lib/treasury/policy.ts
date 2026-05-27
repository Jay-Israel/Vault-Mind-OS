import { ethers } from "ethers";

export function buildPolicyId(name: string): string {
  return ethers.utils.id(name);
}

export function encodeEmergencyWithdrawal(recipient: string, amount: string): string {
  return ethers.utils.defaultAbiCoder.encode(["address", "uint256"], [recipient, amount]);
}
