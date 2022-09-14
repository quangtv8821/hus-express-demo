import express from 'express'
import { create, findAll } from '../controllers/teacher.controller.js'

const teacherRoute = express.Router()

teacherRoute.get('/', findAll)

teacherRoute.post('/', create)

export default teacherRoute