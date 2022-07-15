import dotenv from 'dotenv'
import { server } from './infrastructure/server'

dotenv.config()

async function start () {
  server.listen(process.env.SERVER_PORT || 3001, () => {
    console.log(`listen in port ${process.env.SERVER_PORT || 3001}`)
  })
}

start()
