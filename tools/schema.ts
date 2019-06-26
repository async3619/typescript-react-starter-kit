import "reflect-metadata";
import path from "path";

import buildSchema from "../src/data/graphql";

export default async function schema() {
    buildSchema({
        emitSchemaFile: path.resolve(__dirname, "..", "schema.graphql"),
    });
}
