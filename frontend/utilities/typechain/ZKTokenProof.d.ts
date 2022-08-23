/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ZKTokenProofInterface extends ethers.utils.Interface {
  functions: {
    "addMember(uint256,uint256)": FunctionFragment;
    "addRelayer(address)": FunctionFragment;
    "addVerifier((address,uint8))": FunctionFragment;
    "createEvent(uint256,uint8,uint256,address,string,uint256)": FunctionFragment;
    "events(uint256)": FunctionFragment;
    "fee()": FunctionFragment;
    "getDepth(uint256)": FunctionFragment;
    "getNumberOfLeaves(uint256)": FunctionFragment;
    "getRoot(uint256)": FunctionFragment;
    "isEligible(uint256,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "relayers(address)": FunctionFragment;
    "removeMember(uint256,uint256,uint256[],uint8[])": FunctionFragment;
    "removeRelayer(address)": FunctionFragment;
    "removeVerifier((address,uint8))": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verifiers(uint8)": FunctionFragment;
    "verifyMembership(uint256,bytes32,uint256,uint256,uint256[8])": FunctionFragment;
    "verifyMembershipWithFee(uint256,bytes32,uint256,uint256,uint256[8])": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addMember",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "addRelayer", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addVerifier",
    values: [{ contractAddress: string; merkleTreeDepth: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "createEvent",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "events",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDepth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfLeaves",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isEligible",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "relayers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeMember",
    values: [BigNumberish, BigNumberish, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRelayer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeVerifier",
    values: [{ contractAddress: string; merkleTreeDepth: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifiers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyMembership",
    values: [
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyMembershipWithFee",
    values: [
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]
    ]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addRelayer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "events", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDepth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfLeaves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isEligible", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "relayers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifiers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyMembership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyMembershipWithFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "EventCreated(uint256,uint8,uint256,address,address,string,uint256)": EventFragment;
    "GroupCreated(uint256,uint8,uint256)": EventFragment;
    "MemberAdded(uint256,uint256,uint256)": EventFragment;
    "MemberRemoved(uint256,uint256,uint256)": EventFragment;
    "NullifierHashAdded(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RelayerAdded(address)": EventFragment;
    "RelayerRemoved(address)": EventFragment;
    "VerifierAdded(tuple)": EventFragment;
    "VerifierRemoved(tuple)": EventFragment;
    "Withdraw(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EventCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GroupCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NullifierHashAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VerifierAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VerifierRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type EventCreatedEvent = TypedEvent<
  [BigNumber, number, BigNumber, string, string, string, BigNumber] & {
    eventId: BigNumber;
    depth: number;
    zeroValue: BigNumber;
    contractAddress: string;
    adminAddress: string;
    title: string;
    fee: BigNumber;
  }
>;

export type GroupCreatedEvent = TypedEvent<
  [BigNumber, number, BigNumber] & {
    groupId: BigNumber;
    depth: number;
    zeroValue: BigNumber;
  }
>;

export type MemberAddedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    groupId: BigNumber;
    identityCommitment: BigNumber;
    root: BigNumber;
  }
>;

export type MemberRemovedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    groupId: BigNumber;
    identityCommitment: BigNumber;
    root: BigNumber;
  }
>;

export type NullifierHashAddedEvent = TypedEvent<
  [BigNumber] & { nullifierHash: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RelayerAddedEvent = TypedEvent<
  [string] & { relayerAddress: string }
>;

export type RelayerRemovedEvent = TypedEvent<
  [string] & { relayerAddress: string }
>;

export type VerifierAddedEvent = TypedEvent<
  [[string, number] & { contractAddress: string; merkleTreeDepth: number }] & {
    verifier: [string, number] & {
      contractAddress: string;
      merkleTreeDepth: number;
    };
  }
>;

export type VerifierRemovedEvent = TypedEvent<
  [[string, number] & { contractAddress: string; merkleTreeDepth: number }] & {
    verifier: [string, number] & {
      contractAddress: string;
      merkleTreeDepth: number;
    };
  }
>;

export type WithdrawEvent = TypedEvent<[string] & { operator: string }>;

export class ZKTokenProof extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ZKTokenProofInterface;

  functions: {
    addMember(
      _eventId: BigNumberish,
      _identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addRelayer(
      _relayer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addVerifier(
      _verifier: { contractAddress: string; merkleTreeDepth: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createEvent(
      _eventId: BigNumberish,
      _depth: BigNumberish,
      _zeroValue: BigNumberish,
      _contractAddress: string,
      _title: string,
      _fee: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    events(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        adminAddress: string;
        contractAddress: string;
        title: string;
        fee: BigNumber;
        createdAt: BigNumber;
      }
    >;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isEligible(
      _eventId: BigNumberish,
      _target: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    relayers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    removeMember(
      _eventId: BigNumberish,
      _identityCommitment: BigNumberish,
      _proofSiblings: BigNumberish[],
      _proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeRelayer(
      _relayer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeVerifier(
      _verifier: { contractAddress: string; merkleTreeDepth: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifiers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    verifyMembership(
      _eventId: BigNumberish,
      _signal: BytesLike,
      _nullifierHash: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyMembershipWithFee(
      _eventId: BigNumberish,
      _signal: BytesLike,
      _nullifierHash: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addMember(
    _eventId: BigNumberish,
    _identityCommitment: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addRelayer(
    _relayer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addVerifier(
    _verifier: { contractAddress: string; merkleTreeDepth: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createEvent(
    _eventId: BigNumberish,
    _depth: BigNumberish,
    _zeroValue: BigNumberish,
    _contractAddress: string,
    _title: string,
    _fee: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  events(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber] & {
      adminAddress: string;
      contractAddress: string;
      title: string;
      fee: BigNumber;
      createdAt: BigNumber;
    }
  >;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  getDepth(groupId: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getNumberOfLeaves(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoot(groupId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  isEligible(
    _eventId: BigNumberish,
    _target: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  relayers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  removeMember(
    _eventId: BigNumberish,
    _identityCommitment: BigNumberish,
    _proofSiblings: BigNumberish[],
    _proofPathIndices: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeRelayer(
    _relayer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeVerifier(
    _verifier: { contractAddress: string; merkleTreeDepth: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifiers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  verifyMembership(
    _eventId: BigNumberish,
    _signal: BytesLike,
    _nullifierHash: BigNumberish,
    _externalNullifier: BigNumberish,
    _proof: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyMembershipWithFee(
    _eventId: BigNumberish,
    _signal: BytesLike,
    _nullifierHash: BigNumberish,
    _externalNullifier: BigNumberish,
    _proof: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMember(
      _eventId: BigNumberish,
      _identityCommitment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addRelayer(_relayer: string, overrides?: CallOverrides): Promise<void>;

    addVerifier(
      _verifier: { contractAddress: string; merkleTreeDepth: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    createEvent(
      _eventId: BigNumberish,
      _depth: BigNumberish,
      _zeroValue: BigNumberish,
      _contractAddress: string,
      _title: string,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    events(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        adminAddress: string;
        contractAddress: string;
        title: string;
        fee: BigNumber;
        createdAt: BigNumber;
      }
    >;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    getDepth(groupId: BigNumberish, overrides?: CallOverrides): Promise<number>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isEligible(
      _eventId: BigNumberish,
      _target: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    relayers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    removeMember(
      _eventId: BigNumberish,
      _identityCommitment: BigNumberish,
      _proofSiblings: BigNumberish[],
      _proofPathIndices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    removeRelayer(_relayer: string, overrides?: CallOverrides): Promise<void>;

    removeVerifier(
      _verifier: { contractAddress: string; merkleTreeDepth: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    verifiers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    verifyMembership(
      _eventId: BigNumberish,
      _signal: BytesLike,
      _nullifierHash: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyMembershipWithFee(
      _eventId: BigNumberish,
      _signal: BytesLike,
      _nullifierHash: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "EventCreated(uint256,uint8,uint256,address,address,string,uint256)"(
      eventId?: BigNumberish | null,
      depth?: null,
      zeroValue?: null,
      contractAddress?: string | null,
      adminAddress?: string | null,
      title?: null,
      fee?: null
    ): TypedEventFilter<
      [BigNumber, number, BigNumber, string, string, string, BigNumber],
      {
        eventId: BigNumber;
        depth: number;
        zeroValue: BigNumber;
        contractAddress: string;
        adminAddress: string;
        title: string;
        fee: BigNumber;
      }
    >;

    EventCreated(
      eventId?: BigNumberish | null,
      depth?: null,
      zeroValue?: null,
      contractAddress?: string | null,
      adminAddress?: string | null,
      title?: null,
      fee?: null
    ): TypedEventFilter<
      [BigNumber, number, BigNumber, string, string, string, BigNumber],
      {
        eventId: BigNumber;
        depth: number;
        zeroValue: BigNumber;
        contractAddress: string;
        adminAddress: string;
        title: string;
        fee: BigNumber;
      }
    >;

    "GroupCreated(uint256,uint8,uint256)"(
      groupId?: BigNumberish | null,
      depth?: null,
      zeroValue?: null
    ): TypedEventFilter<
      [BigNumber, number, BigNumber],
      { groupId: BigNumber; depth: number; zeroValue: BigNumber }
    >;

    GroupCreated(
      groupId?: BigNumberish | null,
      depth?: null,
      zeroValue?: null
    ): TypedEventFilter<
      [BigNumber, number, BigNumber],
      { groupId: BigNumber; depth: number; zeroValue: BigNumber }
    >;

    "MemberAdded(uint256,uint256,uint256)"(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { groupId: BigNumber; identityCommitment: BigNumber; root: BigNumber }
    >;

    MemberAdded(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { groupId: BigNumber; identityCommitment: BigNumber; root: BigNumber }
    >;

    "MemberRemoved(uint256,uint256,uint256)"(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { groupId: BigNumber; identityCommitment: BigNumber; root: BigNumber }
    >;

    MemberRemoved(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { groupId: BigNumber; identityCommitment: BigNumber; root: BigNumber }
    >;

    "NullifierHashAdded(uint256)"(
      nullifierHash?: null
    ): TypedEventFilter<[BigNumber], { nullifierHash: BigNumber }>;

    NullifierHashAdded(
      nullifierHash?: null
    ): TypedEventFilter<[BigNumber], { nullifierHash: BigNumber }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "RelayerAdded(address)"(
      relayerAddress?: string | null
    ): TypedEventFilter<[string], { relayerAddress: string }>;

    RelayerAdded(
      relayerAddress?: string | null
    ): TypedEventFilter<[string], { relayerAddress: string }>;

    "RelayerRemoved(address)"(
      relayerAddress?: string | null
    ): TypedEventFilter<[string], { relayerAddress: string }>;

    RelayerRemoved(
      relayerAddress?: string | null
    ): TypedEventFilter<[string], { relayerAddress: string }>;

    "VerifierAdded(tuple)"(
      verifier?: null
    ): TypedEventFilter<
      [[string, number] & { contractAddress: string; merkleTreeDepth: number }],
      {
        verifier: [string, number] & {
          contractAddress: string;
          merkleTreeDepth: number;
        };
      }
    >;

    VerifierAdded(
      verifier?: null
    ): TypedEventFilter<
      [[string, number] & { contractAddress: string; merkleTreeDepth: number }],
      {
        verifier: [string, number] & {
          contractAddress: string;
          merkleTreeDepth: number;
        };
      }
    >;

    "VerifierRemoved(tuple)"(
      verifier?: null
    ): TypedEventFilter<
      [[string, number] & { contractAddress: string; merkleTreeDepth: number }],
      {
        verifier: [string, number] & {
          contractAddress: string;
          merkleTreeDepth: number;
        };
      }
    >;

    VerifierRemoved(
      verifier?: null
    ): TypedEventFilter<
      [[string, number] & { contractAddress: string; merkleTreeDepth: number }],
      {
        verifier: [string, number] & {
          contractAddress: string;
          merkleTreeDepth: number;
        };
      }
    >;

    "Withdraw(address)"(
      operator?: string | null
    ): TypedEventFilter<[string], { operator: string }>;

    Withdraw(
      operator?: string | null
    ): TypedEventFilter<[string], { operator: string }>;
  };

  estimateGas: {
    addMember(
      _eventId: BigNumberish,
      _identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addRelayer(
      _relayer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addVerifier(
      _verifier: { contractAddress: string; merkleTreeDepth: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createEvent(
      _eventId: BigNumberish,
      _depth: BigNumberish,
      _zeroValue: BigNumberish,
      _contractAddress: string,
      _title: string,
      _fee: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    events(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isEligible(
      _eventId: BigNumberish,
      _target: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    relayers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeMember(
      _eventId: BigNumberish,
      _identityCommitment: BigNumberish,
      _proofSiblings: BigNumberish[],
      _proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeRelayer(
      _relayer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeVerifier(
      _verifier: { contractAddress: string; merkleTreeDepth: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifiers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyMembership(
      _eventId: BigNumberish,
      _signal: BytesLike,
      _nullifierHash: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyMembershipWithFee(
      _eventId: BigNumberish,
      _signal: BytesLike,
      _nullifierHash: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMember(
      _eventId: BigNumberish,
      _identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addRelayer(
      _relayer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addVerifier(
      _verifier: { contractAddress: string; merkleTreeDepth: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createEvent(
      _eventId: BigNumberish,
      _depth: BigNumberish,
      _zeroValue: BigNumberish,
      _contractAddress: string,
      _title: string,
      _fee: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    events(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isEligible(
      _eventId: BigNumberish,
      _target: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    relayers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeMember(
      _eventId: BigNumberish,
      _identityCommitment: BigNumberish,
      _proofSiblings: BigNumberish[],
      _proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeRelayer(
      _relayer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeVerifier(
      _verifier: { contractAddress: string; merkleTreeDepth: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifiers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyMembership(
      _eventId: BigNumberish,
      _signal: BytesLike,
      _nullifierHash: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyMembershipWithFee(
      _eventId: BigNumberish,
      _signal: BytesLike,
      _nullifierHash: BigNumberish,
      _externalNullifier: BigNumberish,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
