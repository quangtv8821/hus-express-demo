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
        }
    }, {        
        sequelize,
        modelName: 'account'
    })

    Account.addHook('beforeCreate', async (account, options) => {
        const hashedPassword = await bcrypt.hash(account.password, saltRounds)
        account.password = hashedPassword
    })

    Account.addHook('beforeFind', async (account, options) => {
        console.log('beforeFind', account)
    })

    return Account
}