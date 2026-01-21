import { createConfig } from "ponder";

import { ExampleContractAbi } from "./abis/ExampleContractAbi";

export default createConfig({
  database: { 
    kind: "postgres", 
    connectionString: "postgresql://user:password@localhost:5432/postgres", 
  }, 
  chains: {
    mainnet: {
      id: 1,
      rpc: process.env.PONDER_RPC_URL_1!,
    },
  },
  contracts: {
    ExampleContract: {
      chain: "mainnet",
      abi: ExampleContractAbi,
      address: "0x0000000000000000000000000000000000000000",
      startBlock: 1234567,
    },
  },
});
