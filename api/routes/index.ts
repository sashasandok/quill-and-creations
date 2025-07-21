import cors from 'cors'
import { Application, IRouter /* NextFunction, Request, Response */ } from 'express'
import { userRouter } from './user'

export const routes = (app: Application, router: IRouter) => {
  userRouter(router)

  app.use(cors())
  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   res.header('Access-Control-Allow-Origin', '*')
  //   res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  //   )
  //   next()
  // })

  app.use('/api', router)
}
