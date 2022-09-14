import { Teacher } from "../models/index.js"
import CODE from "../constants/status.js"

function findAll(req, res) {
    res.json({ok: 'ok123'})
}

async function create(req, res) {
    const teacher = await Teacher.create({
        name: req.body.name,
        birthDay: req.body.birth_day
    })
    
    return res.status(CODE.SUCCESS).json(teacher)
}

export {
    findAll,
    create
}