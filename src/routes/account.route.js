import express from 'express'
import { create, find } from '../controllers/account.controller.js'

const accountRoute = express.Router()

accountRoute.get('/', find)

accountRoute.post('/', create)

export default accountRoute