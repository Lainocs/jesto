import express from 'express'
import { sayHello } from '../controllers/TestController.js'

const router = express.Router()

router.get('/', sayHello)

export default router