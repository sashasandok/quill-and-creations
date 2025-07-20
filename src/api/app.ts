import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import swaggerUi from 'swagger-ui-express'
import { routes } from './routes'
import { swaggerSpec } from './swagger'

const app = express()

app.use(logger(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const router = express.Router()
routes(app, router)

app.use('/', express.static(path.join(__dirname, '..', './client')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
})

export default app
