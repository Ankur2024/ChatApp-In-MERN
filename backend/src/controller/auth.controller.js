import { upsertStreamUser } from "../lib/stream.js";
import User from "../model/User.model.js";
import jwt from "jsonwebtoken";

export const handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const isPasswordCorrect = await user.matchPassword(password);
        if(!isPasswordCorrect){
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY, {
            expiresIn: "7d"
        })

        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 1000,
            httpOnly: true, // prevent XSS attacks
            sameSite: "strict", // prevent CSRF attacks
            secure: process.env.NODE_ENV === 'production'
        })
        res.status(200).json({ success: true, user});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in login controller" });
    }
}


export const handleSignup = async (req, res) => {
    const { email, password, fullName } = req.body;
    try {
        if (!email || !password || !fullName) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password should be at least 6 characters" });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: "User already exists" });
        }

        const index  = Math.floor(Math.random() * 100) + 1;
        const randomAvatar = `https://avatar.iran.liara.run/public/${index}.png`;

        const newUser = await User.create({
            email,
            password,
            fullName,
            profilePicture:  randomAvatar,
        })

        try {
            await upsertStreamUser({
                id: newUser._id.toString(),
                name: newUser.fullName,
                image: newUser.profilePicture || ""
            })
            console.log("Stream User created for ", newUser.fullName);
        } catch (error) {
            console.log("Error in creating stream user", error);
        }

        const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET_KEY, {
            expiresIn: "7d"
        })

        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 1000,
            httpOnly: true, // prevent XSS attacks
            sameSite: "strict", // prevent CSRF attacks
            secure: process.env.NODE_ENV === 'production'
        })

        res.status(201).json({
            success: true, user: newUser
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in signup controller" });
    }
}


export const handleLogout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in logout controller" });
    }
}