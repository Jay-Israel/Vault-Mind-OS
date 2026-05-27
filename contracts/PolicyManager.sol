// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IVaultMindTreasury {
    function execute(address target, uint256 value, bytes calldata data) external returns (bytes memory);
}

contract PolicyManager is AccessControl, Pausable {
    bytes32 public constant EXECUTOR_ROLE = keccak256("EXECUTOR_ROLE");
    bytes32 public constant POLICY_ADMIN_ROLE = keccak256("POLICY_ADMIN_ROLE");

    struct Policy {
        address target;
        bool enabled;
        string description;
    }

    mapping(bytes32 => Policy) public policies;
    address public treasury;

    event PolicyRegistered(bytes32 indexed policyId, address indexed target, string description);
    event PolicyEnabled(bytes32 indexed policyId, bool enabled);
    event PolicyExecuted(bytes32 indexed policyId, address indexed executor, uint256 value, bytes data);
    event TreasuryUpdated(address indexed treasury);

    constructor(address initialTreasury) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(POLICY_ADMIN_ROLE, msg.sender);
        _grantRole(EXECUTOR_ROLE, msg.sender);
        treasury = initialTreasury;
    }

    function registerPolicy(bytes32 policyId, address target, string calldata description) external onlyRole(POLICY_ADMIN_ROLE) {
        require(target != address(0), "PolicyManager: invalid target");
        policies[policyId] = Policy({target: target, enabled: true, description: description});
        emit PolicyRegistered(policyId, target, description);
    }

    function setPolicyEnabled(bytes32 policyId, bool enabled) external onlyRole(POLICY_ADMIN_ROLE) {
        policies[policyId].enabled = enabled;
        emit PolicyEnabled(policyId, enabled);
    }

    function executePolicy(bytes32 policyId, uint256 value, bytes calldata data) external onlyRole(EXECUTOR_ROLE) whenNotPaused returns (bytes memory) {
        Policy memory policy = policies[policyId];
        require(policy.enabled, "PolicyManager: policy disabled");
        require(policy.target != address(0), "PolicyManager: unknown policy");

        bytes memory result = IVaultMindTreasury(treasury).execute(policy.target, value, data);
        emit PolicyExecuted(policyId, msg.sender, value, data);
        return result;
    }

    function updateTreasury(address newTreasury) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(newTreasury != address(0), "PolicyManager: invalid treasury");
        treasury = newTreasury;
        emit TreasuryUpdated(newTreasury);
    }

    function pause() external onlyRole(POLICY_ADMIN_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(POLICY_ADMIN_ROLE) {
        _unpause();
    }
}
