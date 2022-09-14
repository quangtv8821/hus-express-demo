import { Sequelize } from "sequelize"
import CONFIG from '../configs/mysql.config.js'
// import models
import accountModel from "./account.model.js"
import studentModel from "./student.model.js"
import subjectModel from "./subject.model.js"
import lessonModel from './lessons.model.js'
import teacherModel from "./teacher.model.js"
import documentModel from "./document.model.js"

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
const Subject = subjectModel(sequelize)
const Lesson = lessonModel(sequelize)
const Teacher = teacherModel(sequelize)
const Document = documentModel(sequelize)


/** Define Relation */

/* 1 student has 1 account */
Student.hasOne(Account)
Account.belongsTo(Student)

/* 1 teacher has 1 account */
Teacher.hasOne(Account)
Account.belongsTo(Teacher)

/* 1 Account has many document */
Account.hasMany(Document)
Document.belongsTo(Account)

/* Many Student has many subject */
Student.belongsToMany(Subject, { through: 'studentHasSubject' })
Subject.belongsToMany(Student, { through: 'studentHasSubject' })

/* 1 document has many lesson */
Lesson.hasMany(Document)
Document.belongsTo(Lesson)

/* 1 teacher has many Subject */
Teacher.hasMany(Subject)
Subject.belongsTo(Teacher)

/** Force update database */
// try {
//     sequelize.sync({force: false})
// } catch (error) {
//     console.log(error)
// }

export {
    sequelize,
    Account,
    Student,
    Subject,
    Lesson,
    Teacher,
    Document
}