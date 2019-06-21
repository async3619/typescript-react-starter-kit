import DataType, { Model } from "sequelize";
import sequelize from "../sequelize";

class UserLogin extends Model {
    public name!: string;

    public key!: string;
}

UserLogin.init(
    {
        name: {
            type: DataType.STRING(50),
            primaryKey: true,
        },

        key: {
            type: DataType.STRING(100),
            primaryKey: true,
        },
    },
    { sequelize },
);

export default UserLogin;
