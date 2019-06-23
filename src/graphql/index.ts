import { buildSchemaSync } from "type-graphql";

import LoremResolver from "./lorem.resolver";

export default function buildSchema() {
    return buildSchemaSync({
        resolvers: [LoremResolver],
    });
}
