import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const db = mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    console.log('Connected to database')
  })
  .catch((error: unknown) => {
    console.log(`Failed db connection: ${(error as Error).message}`)
  })

export { db }
