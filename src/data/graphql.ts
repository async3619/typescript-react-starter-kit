import { buildSchemaSync } from "type-graphql";

import LoremResolver from "./lorem/lorem.resolver";
import GuestsResolver from "./guests/guests.resolver";

export default function buildSchema() {
    return buildSchemaSync({
        resolvers: [LoremResolver, GuestsResolver],
        dateScalarMode: "timestamp",
    });
}
