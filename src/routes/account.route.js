import express from 'express'
import { create, findAll, login } from '../controllers/account.controller.js'

const accountRoute = express.Router()

accountRoute.get('/', findAll)

accountRoute.post('/', create)

accountRoute.post('/login', login)

export default accountRoute