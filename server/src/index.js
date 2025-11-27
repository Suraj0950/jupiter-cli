import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
 
const app = express();
let port = process.env.PORT;

app.get("/", (req,res) => {
    res.send("OK")
});

app.listen(process.env.PORT,() => {
    console.log(`App is running on port ${port} `)
})
