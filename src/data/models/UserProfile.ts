import DataType, { Model } from "sequelize";
import sequelize from "../sequelize";

class UserProfile extends Model {
    public userId!: string;

    public displayName!: string;

    public picture!: string;

    public gender!: string;

    public location!: string;

    public website!: string;
}

UserProfile.init(
    {
        userId: {
            type: DataType.UUID,
            primaryKey: true,
        },

        displayName: {
            type: DataType.STRING(100),
        },

        picture: {
            type: DataType.STRING(255),
        },

        gender: {
            type: DataType.STRING(50),
        },

        location: {
            type: DataType.STRING(100),
        },

        website: {
            type: DataType.STRING(255),
        },
    },
    { sequelize },
);

export default UserProfile;
