export const ViralContractAbi = [
    {
      "type": "event",
      "name": "ContentCreated",
      "inputs": [
        {"name": "contentId", "type": "uint256", "indexed": true},
        {"name": "creator", "type": "address", "indexed": true},
        {"name": "ipfsHash", "type": "string", "indexed": false},
        {"name": "isPremium", "type": "bool", "indexed": false}
      ]
    },
    {
      "type": "event",
      "name": "ContentMinted",
      "inputs": [
        {"name": "contentId", "type": "uint256", "indexed": true},
        {"name": "minter", "type": "address", "indexed": true},
        {"name": "creator", "type": "address", "indexed": true}
      ]
    },
    {
      "type": "event",
      "name": "PremiumPurchased",
      "inputs": [
        {"name": "user", "type": "address", "indexed": true},
        {"name": "amount", "type": "uint256", "indexed": false},
        {"name": "periodDays", "type": "uint256", "indexed": false}
      ]
    },
    {
      "type": "event",
      "name": "RewardDistributed",
      "inputs": [
        {"name": "user", "type": "address", "indexed": true},
        {"name": "amount", "type": "uint256", "indexed": false},
        {"name": "contentId", "type": "uint256", "indexed": true}
      ]
    }
] as const;