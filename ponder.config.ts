// import "dotenv/config";

import { createConfig } from "ponder";

import {
  ExampleContractAbi,
  ViralContractAbi,
  RewardContractAbi
} from "./abis";

// import { counterABI } from "../abis/CounterAbi";
// import CounterDeploy from "../foundry/broadcast/Deploy.s.sol/31337/run-latest.json"; 

import { http, getAddress, hexToNumber } from "viem";
import { baseSepolia, sepolia } from "viem/chains";
 
// const address = getAddress(CounterDeploy.transactions[0]!.contractAddress); 
// const startBlock = hexToNumber(CounterDeploy.receipts[0]!.blockNumber); 

export default createConfig({
  database: { 
    kind: "postgres",
    connectionString:process.env.DATABASE_URL, 
  },
  chains: {
    baseSepolia: {
      id: 84532,
      rpc: process.env.PONDER_RPC_URL_84532!,
    },
  },
  contracts: {
    // BaseRegistrar: {
    //   abi: ExampleContractAbi,
    //   chain: "mainnet",
    //   address: "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85",
    //   startBlock: 9380410,
    // },
    ExampleContract: {
      chain: "baseSepolia",
      abi: ExampleContractAbi,
      address: "0x0000000000000000000000000000000000000000",
      startBlock: 1234567,
    },
    ViralContract: {
      chain: "baseSepolia",
      abi: ViralContractAbi,
      address: "0x0000000000000000000000000000000000000000",
      startBlock: 1,
    },
    RewardContract: {
      chain: "baseSepolia",
      abi: RewardContractAbi,
      address: "0x0000000000000000000000000000000000000000",
      startBlock: 1,
    },
  },
});
