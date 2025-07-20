import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import { connectDB } from './lib/db.js'
import cookieParser from 'cookie-parser'


const app = express()
const PORT = process.env.PORT || 1111;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World! from backend')
})

// auth routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
  connectDB();
})
