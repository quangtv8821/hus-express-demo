import express from 'express'
import { create, find } from '../controllers/student.controller.js'

const studentRoute = express.Router()

studentRoute.get('/', find)

studentRoute.post('/', create)

export default studentRoute