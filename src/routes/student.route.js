import express from 'express'
import { create, findAll, findById, softDelete } from '../controllers/student.controller.js'

const studentRoute = express.Router()

studentRoute.get('/:id', findById)

studentRoute.get('/', findAll)

studentRoute.post('/', create)

studentRoute.put('/:id', softDelete)

export default studentRoute