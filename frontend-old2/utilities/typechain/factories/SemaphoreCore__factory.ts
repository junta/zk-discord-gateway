/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SemaphoreCore, SemaphoreCoreInterface } from "../SemaphoreCore";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
    ],
    name: "NullifierHashAdded",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220b97bb30bbbcb876e7c4da28628e0e3113961f50062c7ad53981a6cc4038455aa64736f6c63430008090033";

export class SemaphoreCore__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SemaphoreCore> {
    return super.deploy(overrides || {}) as Promise<SemaphoreCore>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SemaphoreCore {
    return super.attach(address) as SemaphoreCore;
  }
  connect(signer: Signer): SemaphoreCore__factory {
    return super.connect(signer) as SemaphoreCore__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SemaphoreCoreInterface {
    return new utils.Interface(_abi) as SemaphoreCoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SemaphoreCore {
    return new Contract(address, _abi, signerOrProvider) as SemaphoreCore;
  }
}