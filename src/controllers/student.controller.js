// import sequelize from "../models/index.js"

// const Student = sequelize.model('student')
import { Student } from '../models/index.js'

async function find(req, res) {
    const student = await Student.create({
        name: req.body.name,
        birthDay: req.body.birth_day
    })
    res.json(student)
}

function create(req, res) {
    res.json({ok: 'create'})
}

export {
    find,
    create
}