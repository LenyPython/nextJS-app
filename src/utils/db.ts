import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)
  if (isConnected) {
    console.log('Connection is active')
    return
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    isConnected = true
    console.log('Connected to the DB')
  } catch (e) {
    console.error('Error while making connection to DB: ', e)
  }
}
