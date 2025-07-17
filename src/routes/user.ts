import { IRouter } from 'express'
import { getUsersList } from '../controllers'

export const userRouter = (router: IRouter) => {
  router.get('/users', getUsersList)
}
