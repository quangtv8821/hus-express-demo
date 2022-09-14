import DEFAULT_PASSWORD from "../constants/default_password.js"
import { Account } from "../models/index.js"
import CODE from '../constants/status.js'
import bcrypt from 'bcrypt'

function findAll(req, res) {
    res.json({ok: 'ok123'})
}

/**
 * ! Only admin can create account for student
*/
async function create(req, res) {
    try {
        const student_id = req.body.student_id
        const username = req.body.username
        let password = req.body.password

        if(!student_id) return res.status(CODE.UNPROCESSABLE_ENTITY_ERROR).json({message: 'Missing student id'})
        if(!username) return res.status(CODE.UNPROCESSABLE_ENTITY_ERROR).json({message: 'Missing username'})

        if(!password || password.trim() === '') {
            password = DEFAULT_PASSWORD
        }

        const account = await Account.create({
            id: student_id,
            username: username,
            password: password
        })

        return res.status(CODE.SUCCESS).json(account)
    } catch (error) {
        console.log(error)
        return res.status(CODE.INTERNAL_SERVER_ERROR).json(error)
    }
}

async function login(req, res) {
    return res.status(CODE.SUCCESS).json({message: 'success'})
}

export {
    findAll,
    create,
    login
}