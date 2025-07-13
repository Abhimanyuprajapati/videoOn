import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import authRoutes from './routes/auth.route.js'
import { connectDB } from './lib/db.js'


const app = express()
const PORT = process.env.PORT || 1111;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! from backend')
})

// auth routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
  connectDB();
})
