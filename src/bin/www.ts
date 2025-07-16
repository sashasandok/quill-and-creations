import { AddressInfo } from 'net'
import app from '../app'
import createDebug from 'debug'
const debug = createDebug('quill-and-creations:server')
import http from 'http'
import dotenv from 'dotenv'

dotenv.config()

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`)
  console.log('Basic Auth credentials:')
  console.log('  Username: admin, Password: password123')
  console.log('  Username: user, Password: mypassword')
})
server.on('error', onError)
server.on('listening', onListening)

function normalizePort(val: string): number | string | false {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }

  if (port >= 0) {
    return port
  }

  return false
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening() {
  const addr: AddressInfo | string | null = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + (addr as AddressInfo).port
  debug('Listening on ' + bind)
}
