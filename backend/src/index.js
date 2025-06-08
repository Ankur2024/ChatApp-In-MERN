import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import chatRoutes from "./routes/chat.routes.js"
import { connectDb } from './lib/db.js';
import cookiePareser from "cookie-parser";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true // allow frontend to send cookies
}))
app.use(express.json());
app.use(cookiePareser());


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  })
}

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  connectDb();
})