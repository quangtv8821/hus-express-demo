import express from 'express'
import { create, findAll } from '../controllers/subject.controller.js'

const classRoute = express.Router()

classRoute.get('/', findAll)

classRoute.post('/', create)

export default classRoute