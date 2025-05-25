import jwt from "jsonwebtoken";
import User from "../model/User.model.js";


export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log("MIDDLEWARE - token ",token);
        if(!token){
            return res.status(401).json({ message: "Unathorized - no token provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log("Decoded token: ", decoded);
        if(!decoded){
            return res.status(401).json({ message: "Unathorized - invalid token"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        console.log("User found: ", user);
        if(!user){
            return res.status(401).json({ message: "Unathorized - user not found"});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protect route middleware", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}