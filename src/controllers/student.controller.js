import { Student } from '../models/index.js'
import CODE from '../constants/status.js'

async function create(req, res) {
    const student = await Student.create({
        name: req.body.name,
        birthDay: req.body.birth_day
    })
    return res.status(CODE.SUCCESS).json(student)
}

async function findAll(req, res) {
    const student = await Student.findAll({
        where: { is_deleted: false },
    })

    if(!student || student.length === 0) {
        return res.status(CODE.NOT_FOUND).json({message: 'No student found'})
    }

    return res.status(CODE.SUCCESS).json(student)
}

async function findById(req, res) {
    const id = req.params.id
    const student = await Student.findOne({
        where: {id: id, is_deleted: false },
    })

    if(!student) {
        return res.status(CODE.NOT_FOUND).json({message: 'No student found'})
    }

    return res.status(CODE.SUCCESS).json(student)
}

async function softDelete(req, res) {
    const id = req.params.id

    await Student.update({
        is_deleted: true,
    }, {
        where: {id: id}
    })
    return res.status(CODE.SUCCESS).json({message: 'success'})
}


export {
    create,
    findAll,
    findById,
    softDelete
}