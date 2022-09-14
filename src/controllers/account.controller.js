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
async function createStudentAccount(req, res) {
    try {
        const student_id = req.body.student_id
        const username = req.body.username
        let password = req.body.password

        if(!student_id) return res.status(CODE.UNPROCESSABLE_ENTITY_ERROR).json({message: 'Missing student id'})
        if(!username) return res.status(CODE.UNPROCESSABLE_ENTITY_ERROR).json({message: 'Missing username'})

        if(!password || password.trim() === '') {
            password = DEFAULT_PASSWORD
        }

        const isExist = await Account.findOne({
            where: {
                 username: username
            }
         })
         if(isExist) return res.json({message: 'Account already exists'})

        const account = await Account.create({
            student_id: student_id,
            username: username,
            password: password
        })

        return res.status(CODE.SUCCESS).json(account)
    } catch (error) {
        console.log(error)
        return res.status(CODE.INTERNAL_SERVER_ERROR).json(error)
    }
}

/**
 * ! Only admin can create account for teacher
*/
async function createTeacherAccount(req, res) {
    try {
        const teacher_id = req.body.teacher_id
        const username = req.body.username
        let password = req.body.password

        if(!teacher_id) return res.status(CODE.UNPROCESSABLE_ENTITY_ERROR).json({message: 'Missing teacher id'})
        if(!username) return res.status(CODE.UNPROCESSABLE_ENTITY_ERROR).json({message: 'Missing username'})

        if(!password || password.trim() === '') {
            password = DEFAULT_PASSWORD
        }

        const isExist = await Account.findOne({
           where: {
                username: username
           }
        })
        if(isExist) return res.json({message: 'Account already exists'})

        const account = await Account.create({
            teacher_id: teacher_id,
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
    const username = req.body.username
    const password = req.body.password

    if(!username) return res.status(CODE.UNPROCESSABLE_ENTITY_ERROR).json({message: 'Missing username'})
    if(!password) return res.status(CODE.UNPROCESSABLE_ENTITY_ERROR).json({message: 'Missing password'})

    const account = await Account.findOne({
        where: {
            username: username,
            is_deleted: false,
        }
    })

    if(!account) {
        return res.status(CODE.NOT_FOUND).json({message: 'Account not found'})
    }

    const isMatch = await bcrypt.compare(password, account.password)

    if(!isMatch) {
        return res.status(CODE.NOT_FOUND).json({message: 'Password does not match'})
    }

    return res.status(CODE.SUCCESS).json(account)
}

export {
    findAll,
    createStudentAccount,
    createTeacherAccount,
    login
}