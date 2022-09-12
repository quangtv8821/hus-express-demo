import express from 'express'
import { create, find } from '../controllers/lesson.controller.js'

const lessonRoute = express.Router()

lessonRoute.get('/', find)

lessonRoute.post('/', create)

export default lessonRoute