import { DataTypes, Model } from "sequelize"

class Student extends Model {}


export default function (sequelize) {
    Student.init({
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
        modelName: 'student'
    })

    return Student
}