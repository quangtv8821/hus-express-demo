import express from 'express'
import { bulkCreate } from '../controllers/document.controller.js'

const documnetRoute = express.Router()

// documnetRoute.get('/', findAll)

documnetRoute.post('/:id', bulkCreate)

export default documnetRoute