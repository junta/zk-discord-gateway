//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@semaphore-protocol/contracts/interfaces/IVerifier.sol";
import "@semaphore-protocol/contracts/base/SemaphoreCore.sol";
import "@semaphore-protocol/contracts/base/SemaphoreGroups.sol";

contract ZkGateway is SemaphoreCore, SemaphoreGroups {
    event Verified(uint256 indexed groupId, bytes32 signal);
    event GatewayCreated(uint256 indexed groupId, bytes32 indexed name, address indexed contractAddress,
        address adminAddress);

    uint8 public treeDepth;
    IVerifier public verifier;

    struct Gateway {
        uint256 groupId;
        uint256 roleId;
        address adminAddress;
        address contractAddress;
        uint256 createdAt;
    }

    mapping(uint256 => Gateway) public gateways;

    constructor(uint8 _treeDepth, IVerifier _verifier) {
        treeDepth = _treeDepth;
        verifier = _verifier;
    }

    function createGateway(bytes32 name, address contractAddress, uint256 guildId, uint256 roleId) public returns (uint256) {
        uint256 groupId = hashGatewayName(name);

        _createGroup(groupId, treeDepth, 0);

        gateways[guildId] = Gateway({
            groupId: groupId,
            roleId: roleId,
            adminAddress: msg.sender,
            contractAddress: contractAddress,
            createdAt: block.timestamp
        });

        emit GatewayCreated(groupId, name, contractAddress, msg.sender);

        return groupId;
    }

    function addMember(uint256 groupId, uint256 identityCommitment) public {
        _addMember(groupId, identityCommitment);
    }

    function verifyMembership(
        bytes32 signal,
        uint256 nullifierHash,
        uint256 groupId,
        uint256[8] calldata proof
    ) public {
        uint256 root = getRoot(groupId);

        _verifyProof(signal, root, nullifierHash, groupId, proof, verifier);

        _saveNullifierHash(nullifierHash);

        emit Verified(groupId, signal);
    }

    function hashGatewayName(bytes32 eventId) private pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(eventId))) >> 8;
    }
}
