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
        }
    }, {
        sequelize,
        modelName: 'student'
    })

    return Student
}