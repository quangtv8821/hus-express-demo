import { DataTypes, Model } from "sequelize"

class Teacher extends Model {}


export default function (sequelize) {
    Teacher.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthDay: {
            type: DataTypes.DATE
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {
        sequelize,
        modelName: 'teacher'
    })

    return Teacher
}