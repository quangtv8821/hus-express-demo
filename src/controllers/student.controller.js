import { Student } from '../models/index.js'
import CODE from '../constants/status.js'

async function create(req, res) {
    const student = await Student.create({
        name: req.body.name,
        birthDay: req.body.birth_day
    })
    return res.status(CODE.SUCCESS).json(student)
}

function find(req, res) {
    res.json({ok: 'find'})
}

export {
    find,
    create
}