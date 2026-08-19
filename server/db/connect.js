import mongoose from 'mongoose'
import { MONGODB_URI } from '../config/env.js'

export async function connectDb() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection
  }

  mongoose.set('strictQuery', true)

  try {
    await mongoose.connect(MONGODB_URI)
    console.log(`MongoDB connected: ${mongoose.connection.name}`)
    return mongoose.connection
  } catch (error) {
    console.error('MongoDB connection failed for PVSiteLoginDB.')
    throw error
  }
}
