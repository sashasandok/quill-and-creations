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

// Serve static client
const clientPath = path.join(__dirname, '..', 'client')
app.use(express.static(clientPath))

// Serve static admin
const adminPath = path.join(__dirname, '..', 'admin')
app.use('/admin', express.static(adminPath))

console.log('Serving client from:', clientPath)
console.log('Serving admin from:', adminPath)

// Admin fallback (for React Router inside /admin)
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(adminPath, 'index.html'))
})

// Client fallback (for React Router inside client)
app.get('*', (req, res) => {
  // Skip serving index.html for API or static file paths
  if (
    req.path.startsWith('/api') ||
    req.path.startsWith('/assets') ||
    req.path.startsWith('/admin')
  ) {
    return res.sendStatus(404)
  }
  res.sendFile(path.join(clientPath, 'index.html'))
})

export default app
