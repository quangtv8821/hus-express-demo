import { DataTypes, Model } from "sequelize"

class Lesson extends Model {}


export default function (sequelize) {
    Lesson.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'lesson'
    })

    return Lesson
}