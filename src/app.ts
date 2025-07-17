import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import swaggerUi from 'swagger-ui-express'
import indexRouter from './routes/index'
import usersRouter from './routes/users'
import { swaggerSpec } from './lib'

const app = express()

app.use(logger(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', express.static(path.join(__dirname, './client')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'))
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api', indexRouter)
app.use('/api/users', usersRouter)

export default app
