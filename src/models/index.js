import { Sequelize } from "sequelize"
import CONFIG from '../configs/mysql.config.js'
// import models
import accountModel from "./account.model.js"
import studentModel from "./student.model.js"
import classModel from "./subject.model.js"
import lessonModel from './lessons.model.js'

/** Create connection instance */
const sequelize = new Sequelize(CONFIG.DATABASE, CONFIG.USERNAME, CONFIG.PASSWORD, {
    dialect: CONFIG.DIALECT,
    logging: CONFIG.LOGGING
})

/** Checking connection */
async function checkConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

checkConnection()

/** Register models */
const Account = accountModel(sequelize)
const Student = studentModel(sequelize)
const Class = classModel(sequelize)
const Lesson = lessonModel(sequelize)

/** Force update database */
try {
    sequelize.sync({force: true})
} catch (error) {
    console.log(error)
}

export {
    sequelize,
    Account,
    Student,
    Class,
    Lesson,
}