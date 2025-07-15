import { AddressInfo } from "net"
import app from "../app"
const debug = require("debug")("quill-and-creations:server")
import http from "http"

const port = normalizePort(process.env.PORT || "3000")
app.set("port", port)

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
server.on("error", onError)
server.on("listening", onListening)

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

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges")
      process.exit(1)
      break
    case "EADDRINUSE":
      console.error(bind + " is already in use")
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening() {
  const addr: AddressInfo | string | null = server.address()
  const bind =
    typeof addr === "string"
      ? "pipe " + addr
      : "port " + (addr as AddressInfo).port
  debug("Listening on " + bind)
}
