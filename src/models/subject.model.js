import { DataTypes, Model } from "sequelize"

class Class extends Model {}


export default function (sequelize) {
    Class.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lessons: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        startAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'class'
    })
}