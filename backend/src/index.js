import express from 'express';
import dotenv from "dotenv";


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// app.use('/api/auth', auth);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})