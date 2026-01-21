import { index, onchainTable, primaryKey, relations } from "ponder";

export const example = onchainTable("example", (t) => ({
  id: t.text().primaryKey(),
  name: t.text(),
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
//   // Membuat tabel bernama "Pixel"
//   Pixel: p.createTable({
//     id: p.string(),          // ID unik (misal koordinat "10-25")
//     color: p.string(),       // Warna pixel
//     author: p.hex().references(() => Player.id),
//     // Membuat relasi Foreign Key,         // Alamat wallet (0x...)
//     updatedAt: p.bigint(),   // Timestamp blok terakhir
//   }),

//   // Membuat tabel untuk statistik player
//   Player: p.createTable({
//     id: p.hex(),             // ID adalah alamat wallet
//     pixelsPainted: p.int(),  // Jumlah pixel yang sudah digambar
//     lastActive: p.bigint(),
//   }),
// }));
 