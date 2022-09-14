import express from 'express'
import { createTeacherAccount, createStudentAccount, findAll, login, softDelete } from '../controllers/account.controller.js'

const accountRoute = express.Router()

accountRoute.get('/', findAll)

accountRoute.post('/student', createStudentAccount)

accountRoute.post('/teacher', createTeacherAccount)

accountRoute.post('/login', login)

accountRoute.put('/:id', softDelete)

export default accountRoute