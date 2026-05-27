export interface VaultMindAddresses {
  token: string;
  treasury: string;
  policyManager: string;
}

export interface VaultMindContracts {
  token: unknown;
  treasury: unknown;
  policyManager: unknown;
}

export interface PolicyPayload {
  policyId: string;
  value?: string;
  data: string;
}
