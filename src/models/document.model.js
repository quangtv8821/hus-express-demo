import { DataTypes, Model } from "sequelize"

class Document extends Model {}


export default function (sequelize) {
    Document.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
        },
        size: {
            type: DataTypes.FLOAT
        },
        url: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        modelName: 'document'
    })

    return Document
}