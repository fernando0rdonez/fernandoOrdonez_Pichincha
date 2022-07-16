import dotenv from 'dotenv'
import { server } from './infrastructure/server'
import sync from './infrastructure/db/sync-db'
dotenv.config()

async function start () {
  await sync()
  server.listen(process.env.SERVER_PORT, () => {
    console.log(`listen in port ${process.env.SERVER_PORT}`)
  })
}

start()
