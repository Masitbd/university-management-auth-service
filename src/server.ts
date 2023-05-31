import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function bootstrap() {
  try {
    console.log(config.database_url)
    await mongoose.connect(config.database_url as string)

    console.log('database is connect successfully')

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('fail to connect databser', err)
  }
}

bootstrap()
