import { index, onchainTable, primaryKey, relations } from "ponder";

export const example = onchainTable("example", (t) => ({
  id: t.text().primaryKey(),
  name: t.text(),
}));

export const user = onchainTable("user", (u) => ({
  id: u.varchar().primaryKey(),             // wallet address
  username: u.varchar().notNull(),
  // bio: u.text(),
  profileImage: u.varchar(),
  totalRewards: u.bigint().default(0n),
  premiumUntil: u.bigint(),
  createdAt: u.bigint().notNull(),
  updatedAt: u.bigint().notNull(),
}));

export const content = onchainTable("content", (c) => ({
  id: c.varchar().primaryKey(),           // tokenId
  creatorId: c.varchar().notNull(),       // relasi ke user.id
  title: c.varchar(),
  body: c.text(),
  tags: c.json(),                         // array of string
  ipfsHash: c.varchar(),
  totalMints: c.integer().default(0),
  totalLikes: c.integer().default(0),
  totalShares: c.integer().default(0),
  isPremium: c.boolean().default(false),
  createdAt: c.bigint().notNull(),
  updatedAt: c.bigint().notNull(),
}));

export const engagement = onchainTable("engagement", (e) => ({
  id: e.varchar().primaryKey(),           // txHash-logIndex
  contentId: e.varchar().notNull(),       // relasi ke content.id
  userId: e.varchar().notNull(),          // relasi ke user.id
  type: e.varchar().notNull(),            // Mint / Like / Share
  rewardAmount: e.bigint(),
  txHash: e.varchar().notNull(),
  timestamp: e.bigint().notNull(),
}));

export const premiumPayment = onchainTable("premium_payment", (p) => ({
  id: p.varchar().primaryKey(),           // txHash
  userId: p.varchar().notNull(),          // relasi ke user.id
  amount: p.bigint().notNull(),
  currency: p.varchar().notNull(),        // ETH / USDC
  periodDays: p.integer(),
  txHash: p.varchar().notNull(),
  timestamp: p.bigint().notNull(),
}));

export const trendingTopic = onchainTable("trending_topic", (t) => ({
  id: t.varchar().primaryKey(),           // hash
  topic: t.varchar().notNull(),
  engagement: t.integer().notNull(),
  source: t.varchar().notNull(),          // Farcaster / X / Base
  network: t.varchar().notNull(),         // mainnet / sepolia / base
  lastUpdated: t.bigint().notNull(),
}));

// export const account = onchainTable("account", (t) => ({
//   address: t.hex().primaryKey(),
//   balance: t.bigint().notNull(),
//   isOwner: t.boolean().notNull(), 
// }));

// export const Transfer = table("transfer", {
//   id: primaryKey(),
//   from: string(),
//   to: string(),
//   value: bigint(),
//   blockNumber: int(),
// });

// export default onchainSchema((p) => ({
//   // Membuat tabel bernama "People"
//   People: p.createTable({
//     id: p.string(),          // ID unik
//     name: p.string(),       // Nama orang
//     author: p.hex().references(() => Wallet.id),
//     // Membuat relasi Foreign Key,         // Alamat wallet (0x...)
//     updatedAt: p.bigint(),   // Timestamp update terakhir
//   }),

//   // Membuat tabel untuk Wallet
//   Wallet: p.createTable({
//     id: p.hex(),             // ID adalah alamat wallet
//     reward: p.int(),  // Jumlah reward
//   }),
// }));
 