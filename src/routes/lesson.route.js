import express from 'express'
import { create, findAll } from '../controllers/lesson.controller.js'

const lessonRoute = express.Router()

lessonRoute.get('/', findAll)

lessonRoute.post('/', create)

export default lessonRoute