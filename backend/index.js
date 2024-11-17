import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import * as AuthController from "./controllers/AuthController.js";
import checkAuth from "./checkAuth.js";

const app = express();
const port = 3000;
const DB_URL = "mongodb+srv://admin:wwwwww@cluster0.ur2f9.mongodb.net/";

app.use(cors());
app.use(express.json());

app.post('/login', AuthController.login);
app.post('/register', AuthController.register);

app.get('/protected', checkAuth, AuthController.protectedFetch);

async function start() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(port, () => {
            console.log(`app listening on port ${port}`)
        })
    }
    catch (e) {
        console.log(e)
    }
}
start();

app.get('/', (req, res) => {
    res.send('Hello World!')
});