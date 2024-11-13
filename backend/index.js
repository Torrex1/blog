import express from "express";
import mongoose from "mongoose";
import User from "./NewUser.js";
import cors from "cors";

const app = express();
const port = 3000;
const DB_URL = "mongodb+srv://admin:wwwwww@cluster0.ur2f9.mongodb.net/";

app.use(cors());
app.use(express.json());

app.get('/', cors(), (req, res) => {
    res.send('Hello World!')
});

app.post('/register', async (req, res) => {
    const {username, password, email} = req.body;
    const user = new User({username, password, email});

    await user.save();

    res.json(user);
})

async function start() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch (e) {
        console.log(e)
    }
}

start();

