import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { logger, erroLogger } from './shared/logger'

async function bootstrap() {
  try {
    // console.log(config.database_url)
    await mongoose.connect(config.database_url as string)

    logger.info('database is connect successfully')

    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    erroLogger.error('fail to connect databser', err)
  }
}

bootstrap()
