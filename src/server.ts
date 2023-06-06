import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { logger, erroLogger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  erroLogger.error(error)
  process.exit(1)
})

let server: Server
async function bootstrap() {
  try {
    // console.log(config.database_url)
    await mongoose.connect(config.database_url as string)

    logger.info('database is connect successfully')

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    erroLogger.error('fail to connect databser', err)
  }

  process.on('unhandleRejection', error => {
    if (server) {
      server.close(() => {
        erroLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
