import jwt from 'jsonwebtoken'
import CODE from '../constants/status.js'
import { Account } from '../models/index.js'

const jwtSecret = process.env.JWT_SECRET

async function authJwt(req, res, next) {
    if(!req.headers || !req.headers.authorization) {
        return res.status(CODE.UNAUTHORIZED).json({message: 'Invalid token'})
    }

    const token = req.headers.authorization.split(' ')[1]
    if (!token) return res.status(CODE.UNAUTHORIZED).json({message: 'Invalid token'})
    await jwt.verify(token, jwtSecret, async (error, verify) => {
      if (!verify || error) return res.status(CODE.UNAUTHORIZED).json({message: 'Unauthorized'})

      const account = await Account.findOne({
        where: { id: verify.id },
        attributes: {
          exclude: ['password'],
        },
      })

      if (!account) return res.status(CODE.UNAUTHORIZED).json({message: 'Unauthorized'})

      req.account = account
      next()
    })
}

export {
    authJwt
}