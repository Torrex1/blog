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
            { _id : user._id }, "secret123", { expiresIn: "7d" }
        )
    
        res.json({
            ...user._doc,
            token,
        });
    } 
    catch (e) {
        console.log(e);
        return res.status(500).json({message: "Server error"});
        
    }

}

export const register = async (req, res) => {
    const {username, password, email} = req.body;
    const user = new User({username, password, email});

    await user.save();

    const token = jwt.sign(
        { _id : user._id }, "secret123", { expiresIn: "7d" }
    )

    res.json({
        ...user._doc,
        token,
    });
}