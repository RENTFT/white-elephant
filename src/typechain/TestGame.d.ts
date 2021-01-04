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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TestGameInterface extends ethers.utils.Interface {
  functions: {
    "addDepositors(address[])": FunctionFragment;
    "buyTicket()": FunctionFragment;
    "currPlayer()": FunctionFragment;
    "deposit(address[],uint256[])": FunctionFragment;
    "depositors(address)": FunctionFragment;
    "entropies(uint256)": FunctionFragment;
    "finito(uint8[256],uint8,uint8)": FunctionFragment;
    "lastAction()": FunctionFragment;
    "nfts(uint256)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "player(uint8)": FunctionFragment;
    "players()": FunctionFragment;
    "playersOrder(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setTicketPrice(uint256)": FunctionFragment;
    "spaws(uint8)": FunctionFragment;
    "steal(uint8,uint8,uint8)": FunctionFragment;
    "swaps(uint8)": FunctionFragment;
    "testSetLastAction(uint32)": FunctionFragment;
    "testSetPlayersOrder(uint8[255])": FunctionFragment;
    "testTest(address)": FunctionFragment;
    "thinkTime()": FunctionFragment;
    "ticketPrice()": FunctionFragment;
    "timeBeforeGameStart()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unwrap(uint8)": FunctionFragment;
    "withdrawERC20(address)": FunctionFragment;
    "withdrawERC721(address,uint256)": FunctionFragment;
    "withdrawEth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addDepositors",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "buyTicket", values?: void): string;
  encodeFunctionData(functionFragment: "currPlayer", values?: void): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "depositors", values: [string]): string;
  encodeFunctionData(
    functionFragment: "entropies",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finito",
    values: [BigNumberish[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lastAction", values?: void): string;
  encodeFunctionData(functionFragment: "nfts", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: void): string;
  encodeFunctionData(
    functionFragment: "player",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "players", values?: void): string;
  encodeFunctionData(
    functionFragment: "playersOrder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setTicketPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "spaws", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "steal",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "swaps", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "testSetLastAction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testSetPlayersOrder",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "testTest", values: [string]): string;
  encodeFunctionData(functionFragment: "thinkTime", values?: void): string;
  encodeFunctionData(functionFragment: "ticketPrice", values?: void): string;
  encodeFunctionData(
    functionFragment: "timeBeforeGameStart",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC721",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdrawEth", values?: void): string;

  decodeFunctionResult(
    functionFragment: "addDepositors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyTicket", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "currPlayer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entropies", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finito", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastAction", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nfts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "player", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "players", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "playersOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTicketPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "spaws", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "steal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swaps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testSetLastAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testSetPlayersOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "testTest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "thinkTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ticketPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeBeforeGameStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unwrap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEth",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PrizeTransfer(address,address,uint256,uint256)": EventFragment;
    "Received(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PrizeTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
}

export class TestGame extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestGameInterface;

  functions: {
    addDepositors(
      ds: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    buyTicket(overrides?: PayableOverrides): Promise<ContractTransaction>;

    currPlayer(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    deposit(
      _nfts: string[],
      tokenIds: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    depositors(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    entropies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    finito(
      op: BigNumberish[],
      startIx: BigNumberish,
      endIx: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lastAction(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    nfts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      adr: string;
      id: BigNumber;
      0: string;
      1: BigNumber;
    }>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    player(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: number;
    }>;

    players(
      overrides?: CallOverrides
    ): Promise<{
      numPlayers: number;
      0: number;
    }>;

    playersOrder(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    setTicketPrice(
      v: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    spaws(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    steal(
      _sender: BigNumberish,
      _from: BigNumberish,
      missed: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swaps(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    testSetLastAction(
      _lastAction: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    testSetPlayersOrder(
      _playersOrder: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    testTest(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    thinkTime(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    ticketPrice(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    timeBeforeGameStart(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unwrap(
      missed: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawERC20(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawERC721(
      nft: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawEth(overrides?: Overrides): Promise<ContractTransaction>;
  };

  addDepositors(
    ds: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  buyTicket(overrides?: PayableOverrides): Promise<ContractTransaction>;

  currPlayer(overrides?: CallOverrides): Promise<number>;

  deposit(
    _nfts: string[],
    tokenIds: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  depositors(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  entropies(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  finito(
    op: BigNumberish[],
    startIx: BigNumberish,
    endIx: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lastAction(overrides?: CallOverrides): Promise<number>;

  nfts(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    adr: string;
    id: BigNumber;
    0: string;
    1: BigNumber;
  }>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  player(
    i: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    0: string;
    1: number;
  }>;

  players(overrides?: CallOverrides): Promise<number>;

  playersOrder(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  setTicketPrice(
    v: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  spaws(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  steal(
    _sender: BigNumberish,
    _from: BigNumberish,
    missed: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swaps(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  testSetLastAction(
    _lastAction: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  testSetPlayersOrder(
    _playersOrder: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  testTest(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  thinkTime(overrides?: CallOverrides): Promise<number>;

  ticketPrice(overrides?: CallOverrides): Promise<BigNumber>;

  timeBeforeGameStart(overrides?: CallOverrides): Promise<number>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unwrap(
    missed: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawERC20(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawERC721(
    nft: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawEth(overrides?: Overrides): Promise<ContractTransaction>;

  staticCall: {
    addDepositors(ds: string[], overrides?: Overrides): Promise<void>;

    buyTicket(overrides?: PayableOverrides): Promise<void>;

    currPlayer(overrides?: CallOverrides): Promise<number>;

    deposit(
      _nfts: string[],
      tokenIds: BigNumberish[],
      overrides?: Overrides
    ): Promise<void>;

    depositors(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    entropies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    finito(
      op: BigNumberish[],
      startIx: BigNumberish,
      endIx: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    lastAction(overrides?: CallOverrides): Promise<number>;

    nfts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      adr: string;
      id: BigNumber;
      0: string;
      1: BigNumber;
    }>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    player(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: number;
    }>;

    players(overrides?: CallOverrides): Promise<number>;

    playersOrder(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    renounceOwnership(overrides?: Overrides): Promise<void>;

    setTicketPrice(v: BigNumberish, overrides?: Overrides): Promise<void>;

    spaws(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

    steal(
      _sender: BigNumberish,
      _from: BigNumberish,
      missed: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    swaps(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

    testSetLastAction(
      _lastAction: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    testSetPlayersOrder(
      _playersOrder: BigNumberish[],
      overrides?: Overrides
    ): Promise<void>;

    testTest(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    thinkTime(overrides?: CallOverrides): Promise<number>;

    ticketPrice(overrides?: CallOverrides): Promise<BigNumber>;

    timeBeforeGameStart(overrides?: CallOverrides): Promise<number>;

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<void>;

    unwrap(missed: BigNumberish, overrides?: Overrides): Promise<void>;

    withdrawERC20(token: string, overrides?: Overrides): Promise<void>;

    withdrawERC721(
      nft: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    withdrawEth(overrides?: Overrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    PrizeTransfer(
      to: null,
      nftishka: null,
      id: null,
      prizeIx: null
    ): EventFilter;

    Received(undefined: null, undefined: null): EventFilter;
  };

  estimateGas: {
    addDepositors(ds: string[]): Promise<BigNumber>;
    buyTicket(): Promise<BigNumber>;
    currPlayer(): Promise<BigNumber>;
    deposit(_nfts: string[], tokenIds: BigNumberish[]): Promise<BigNumber>;
    depositors(arg0: string): Promise<BigNumber>;
    entropies(arg0: BigNumberish): Promise<BigNumber>;
    finito(
      op: BigNumberish[],
      startIx: BigNumberish,
      endIx: BigNumberish
    ): Promise<BigNumber>;
    lastAction(): Promise<BigNumber>;
    nfts(arg0: BigNumberish): Promise<BigNumber>;
    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike
    ): Promise<BigNumber>;
    owner(): Promise<BigNumber>;
    player(i: BigNumberish): Promise<BigNumber>;
    players(): Promise<BigNumber>;
    playersOrder(arg0: BigNumberish): Promise<BigNumber>;
    renounceOwnership(): Promise<BigNumber>;
    setTicketPrice(v: BigNumberish): Promise<BigNumber>;
    spaws(arg0: BigNumberish): Promise<BigNumber>;
    steal(
      _sender: BigNumberish,
      _from: BigNumberish,
      missed: BigNumberish
    ): Promise<BigNumber>;
    swaps(arg0: BigNumberish): Promise<BigNumber>;
    testSetLastAction(_lastAction: BigNumberish): Promise<BigNumber>;
    testSetPlayersOrder(_playersOrder: BigNumberish[]): Promise<BigNumber>;
    testTest(arg0: string): Promise<BigNumber>;
    thinkTime(): Promise<BigNumber>;
    ticketPrice(): Promise<BigNumber>;
    timeBeforeGameStart(): Promise<BigNumber>;
    transferOwnership(newOwner: string): Promise<BigNumber>;
    unwrap(missed: BigNumberish): Promise<BigNumber>;
    withdrawERC20(token: string): Promise<BigNumber>;
    withdrawERC721(nft: string, tokenId: BigNumberish): Promise<BigNumber>;
    withdrawEth(): Promise<BigNumber>;
  };

  populateTransaction: {
    addDepositors(ds: string[]): Promise<PopulatedTransaction>;
    buyTicket(): Promise<PopulatedTransaction>;
    currPlayer(): Promise<PopulatedTransaction>;
    deposit(
      _nfts: string[],
      tokenIds: BigNumberish[]
    ): Promise<PopulatedTransaction>;
    depositors(arg0: string): Promise<PopulatedTransaction>;
    entropies(arg0: BigNumberish): Promise<PopulatedTransaction>;
    finito(
      op: BigNumberish[],
      startIx: BigNumberish,
      endIx: BigNumberish
    ): Promise<PopulatedTransaction>;
    lastAction(): Promise<PopulatedTransaction>;
    nfts(arg0: BigNumberish): Promise<PopulatedTransaction>;
    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike
    ): Promise<PopulatedTransaction>;
    owner(): Promise<PopulatedTransaction>;
    player(i: BigNumberish): Promise<PopulatedTransaction>;
    players(): Promise<PopulatedTransaction>;
    playersOrder(arg0: BigNumberish): Promise<PopulatedTransaction>;
    renounceOwnership(): Promise<PopulatedTransaction>;
    setTicketPrice(v: BigNumberish): Promise<PopulatedTransaction>;
    spaws(arg0: BigNumberish): Promise<PopulatedTransaction>;
    steal(
      _sender: BigNumberish,
      _from: BigNumberish,
      missed: BigNumberish
    ): Promise<PopulatedTransaction>;
    swaps(arg0: BigNumberish): Promise<PopulatedTransaction>;
    testSetLastAction(_lastAction: BigNumberish): Promise<PopulatedTransaction>;
    testSetPlayersOrder(
      _playersOrder: BigNumberish[]
    ): Promise<PopulatedTransaction>;
    testTest(arg0: string): Promise<PopulatedTransaction>;
    thinkTime(): Promise<PopulatedTransaction>;
    ticketPrice(): Promise<PopulatedTransaction>;
    timeBeforeGameStart(): Promise<PopulatedTransaction>;
    transferOwnership(newOwner: string): Promise<PopulatedTransaction>;
    unwrap(missed: BigNumberish): Promise<PopulatedTransaction>;
    withdrawERC20(token: string): Promise<PopulatedTransaction>;
    withdrawERC721(
      nft: string,
      tokenId: BigNumberish
    ): Promise<PopulatedTransaction>;
    withdrawEth(): Promise<PopulatedTransaction>;
  };
}