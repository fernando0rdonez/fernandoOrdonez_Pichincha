import dotenv from 'dotenv'
import 'express-async-errors'
import { server } from './infrastructure/server'
import sync from './infrastructure/db/sync-db'
dotenv.config()

async function start () {
  await sync()
  server.listen(process.env.PORT, () => {
    console.log(`listen in port ${process.env.PORT}`)
  })
}

start()
