import app from './app.js'
import { PORT } from './config/env.js'
import { connectDb } from './db/connect.js'
import { seedUsers } from './models/user.model.js'

await connectDb()
await seedUsers()

app.listen(PORT, () => {
  console.log(`PayVang auth API running at http://localhost:${PORT}`)
  console.log('MongoDB database: PVSiteLoginDB')
})
