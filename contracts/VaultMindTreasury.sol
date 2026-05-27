// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract VaultMindTreasury is AccessControl, Pausable, ReentrancyGuard {
    bytes32 public constant POLICY_ROLE = keccak256("POLICY_ROLE");
    bytes32 public constant STRATEGIST_ROLE = keccak256("STRATEGIST_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    event Deposit(address indexed sender, uint256 amount);
    event ERC20Deposit(address indexed sender, address indexed token, uint256 amount);
    event Withdrawal(address indexed receiver, uint256 amount);
    event ERC20Withdrawal(address indexed receiver, address indexed token, uint256 amount);
    event Execution(address indexed target, uint256 value, bytes data);
    event PolicyManagerUpdated(address indexed policyManager);

    address public policyManager;

    constructor(address admin, address initialPolicyManager) {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(PAUSER_ROLE, admin);
        _grantRole(STRATEGIST_ROLE, admin);
        _grantRole(POLICY_ROLE, admin);
        policyManager = initialPolicyManager;
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    function depositERC20(IERC20 token, uint256 amount) external nonReentrant whenNotPaused {
        require(amount > 0, "VaultMindTreasury: zero amount");
        token.transferFrom(msg.sender, address(this), amount);
        emit ERC20Deposit(msg.sender, address(token), amount);
    }

    function withdrawETH(address payable receiver, uint256 amount) external onlyRole(STRATEGIST_ROLE) nonReentrant whenNotPaused {
        require(amount > 0, "VaultMindTreasury: zero amount");
        require(address(this).balance >= amount, "VaultMindTreasury: insufficient ETH");
        receiver.transfer(amount);
        emit Withdrawal(receiver, amount);
    }

    function withdrawERC20(IERC20 token, address receiver, uint256 amount) external onlyRole(STRATEGIST_ROLE) nonReentrant whenNotPaused {
        require(amount > 0, "VaultMindTreasury: zero amount");
        token.transfer(receiver, amount);
        emit ERC20Withdrawal(receiver, address(token), amount);
    }

    function execute(address target, uint256 value, bytes calldata data) external onlyRole(POLICY_ROLE) whenNotPaused nonReentrant returns (bytes memory) {
        require(target != address(0), "VaultMindTreasury: invalid target");
        (bool success, bytes memory result) = target.call{value: value}(data);
        require(success, "VaultMindTreasury: execution failed");
        emit Execution(target, value, data);
        return result;
    }

    function pause() external onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function updatePolicyManager(address newPolicyManager) external onlyRole(DEFAULT_ADMIN_ROLE) {
        policyManager = newPolicyManager;
        emit PolicyManagerUpdated(newPolicyManager);
    }

    function recoverERC20(IERC20 token, address receiver, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        token.transfer(receiver, amount);
    }

    function treasuryBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
