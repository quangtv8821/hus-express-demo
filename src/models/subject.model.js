import { DataTypes, Model } from "sequelize"

class Subject extends Model {}


export default function (sequelize) {
    Subject.init({
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
        modelName: 'subject'
    })

    return Subject
}