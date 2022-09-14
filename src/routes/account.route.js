import express from 'express'
import { createTeacherAccount, createStudentAccount, findAll, login } from '../controllers/account.controller.js'

const accountRoute = express.Router()

accountRoute.get('/', findAll)

accountRoute.post('/student', createStudentAccount)

accountRoute.post('/teacher', createTeacherAccount)

accountRoute.post('/login', login)

export default accountRoute