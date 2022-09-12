import express from 'express'
import { create, find } from '../controllers/subject.controller.js'

const classRoute = express.Router()

classRoute.get('/', find)

classRoute.post('/', create)

export default classRoute