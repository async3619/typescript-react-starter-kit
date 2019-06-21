import DataType, { Model } from "sequelize";
import sequelize from "../sequelize";

class User extends Model {
    public id!: string;

    public email!: string;

    public emailConfirmed!: boolean;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV1,
            primaryKey: true,
        },

        email: {
            type: DataType.STRING(255),
            validate: { isEmail: true },
        },

        emailConfirmed: {
            type: DataType.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        indexes: [{ fields: ["email"] }],
    },
);

export default User;
