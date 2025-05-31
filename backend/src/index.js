import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import chatRoutes from "./routes/chat.routes.js"
import { connectDb } from './lib/db.js';
import cookiePareser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "http://localhost:5173/",
    credentials: true // allow frontend to send cookies
}))
app.use(express.json());
app.use(cookiePareser());


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
    connectDb();
})