import { DataTypes, Model } from "sequelize"

class Account extends Model {}


export default function (sequelize) {
    Account.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'account'
    })
}