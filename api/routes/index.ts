import cors from 'cors'
import helmet from 'helmet'
import { Application, IRouter } from 'express'
import { userRouter } from './user'

export const routes = (app: Application, router: IRouter) => {
  userRouter(router)

  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
  app.use(cors(corsOptions))

  app.use(helmet())

  app.use('/api', router)
}
