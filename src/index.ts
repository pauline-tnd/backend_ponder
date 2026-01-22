import { ponder } from "ponder:registry";


// "ContractName:EventName"

// event:
// event.args
// event.block.number
// event.transaction.hash

// context.db

ponder.on("ExampleContract:Transfer", ({ event, context }) => {
    if (process.env.NODE_ENV === "development") {
        console.log(event);
    }
});