import { createConnection as createTypeORMConnection } from "typeorm";
import path from "path";

import Guest from "./guests/guest.entity";

export default async function createConnection() {
    if (global.connection) {
        await global.connection.close();
    }

    const connection = await createTypeORMConnection({
        type: "sqlite",
        database: path.resolve(process.cwd(), "database.sqlite"),
        entities: [Guest],
        synchronize: true,
        dropSchema: true,
        logging: true,
    });

    global.connection = connection;
    return connection;
}
