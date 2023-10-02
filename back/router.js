import express from 'express'
import test from './routes/TestRoutes.js'
import starter from './routes/StarterRoutes.js'
import account from './routes/AccountRoutes.js'
import restaurant from './routes/RestaurantRoutes.js'

const router = express.Router()

router.use('/', test)
router.use('/starter', starter)
router.use('/accounts', account)
router.use('/restaurants', restaurant)

export default router