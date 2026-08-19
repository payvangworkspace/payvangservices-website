import cors from 'cors'
import express from 'express'
import { CORS_ORIGINS } from './config/env.js'
import { errorHandler, notFound } from './middleware/error.middleware.js'
import apiRoutes from './routes/index.js'

const app = express()

app.use(cors({ origin: CORS_ORIGINS }))
app.use(express.json())
app.use('/api', apiRoutes)
app.use(notFound)
app.use(errorHandler)

export default app
