import jwt from "jsonwebtoken";

export default (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) 
        return res.status(403).json({message: "user not authorized"});

    try {
        const decoded = jwt.verify(token, 'secret123');
        req.user = decoded;
        next();

        return res.status(200);
    }
    catch (error) {
        return res.status(403).json({message: "user not authorized"});
    }
}