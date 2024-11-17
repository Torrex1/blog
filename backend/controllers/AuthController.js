import jwt from "jsonwebtoken";

import User from "../models/NewUser.js";

export const login = async (req, res) => {
    try {
        const {username, password, email} = req.body;
        const user = await User.findOne({ username, password });
    
        if (!user) {
            return res.status(404).json({message: "incorrect username or password"});
        } 
    
        const token = jwt.sign(
            { _id: user._id }, 'secret123', { expiresIn: '7d' }
        )

        return res.json({
            token
        })
    } 
    catch (e) {
        console.log(e);
        return res.status(404).json({message: "incorrect username or password"});
    }
}

export const register = async (req, res) => {
    const {username, password, email} = req.body;

    try {
        const user = new User({username, password, email});
        await user.save();

        const token = jwt.sign(
            { _id: user._id }, 'secret123', { expiresIn: '7d' }
        )

        return res.json({
            token,
            user
        })
    }
    catch (e) {
        return res.status(500).json({error: e.message});
    }
}

export const protectedFetch = async (req, res) => {
    const user = await User.findById(req.user._id);

    if (!user) {
        return res.status(404).json({message: "user not found"});
    }
    
    return res.json(user);
}