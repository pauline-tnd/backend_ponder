import { db } from "ponder:api";
import schema from "ponder:schema";
import {example} from "ponder:schema";
import { Hono } from "hono"; // framework backend (seperti express.js)
import { client, graphql } from "ponder"; // client: API untuk akses HTTP -> SQL -> Database
                                          // graphql: API untuk akses database pake GraphQL

const app = new Hono(); // server

// app.use("/sql/*", client({ db, schema }));

// app.use("/", graphql({ db, schema }));
// app.use("/graphql", graphql({ db, schema }));

app.get("/", (c) => c.text("Ponder API running"));

app.get("/test", async (c) => {
  const rows = await db.select().from(example);
  return c.json(rows);
});
export default app;
