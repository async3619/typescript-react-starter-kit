import { buildSchemaSync } from "type-graphql";

import LoremResolver from "./lorem.resolver";

export default function buildSchema() {
    const schema = buildSchemaSync({
        resolvers: [LoremResolver],
    });

    return schema;
}
