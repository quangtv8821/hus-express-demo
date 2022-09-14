import express from 'express'
import { create, findAll, findById } from '../controllers/student.controller.js'

const studentRoute = express.Router()

studentRoute.get('/:id', findById)

studentRoute.get('/', findAll)

studentRoute.post('/', create)

export default studentRoute