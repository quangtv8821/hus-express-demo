import { DataTypes, Model } from "sequelize"
import bcrypt from 'bcrypt'

class Account extends Model {}

const saltRounds = parseInt(process.env.SALT_ROUNDS) || 8

export default function (sequelize) {
    Account.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {        
        sequelize,
        modelName: 'account'
    })

    Account.addHook('beforeCreate', async (account, options) => {
        const hashedPassword = await bcrypt.hash(account.password, saltRounds)
        account.password = hashedPassword
    })

    return Account
}