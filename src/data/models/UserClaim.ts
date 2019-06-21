import DataType, { Model } from "sequelize";
import sequelize from "../sequelize";

class UserClaim extends Model {
    public type!: string;

    public value!: string;
}

UserClaim.init(
    {
        type: {
            type: DataType.STRING,
        },

        value: {
            type: DataType.STRING,
        },
    },
    {
        sequelize,
    },
);

export default UserClaim;
