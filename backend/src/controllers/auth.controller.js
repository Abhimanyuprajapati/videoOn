import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
  // res.send("Signup Route");
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All Fields are required" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already exits, Please try different email" });
    }

    const idx = Math.floor(Math.random() * 100) + 1; // generate 1 to 100 random number
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

    const newUser = await User.create({
      fullName,
      email,
      password,
      profilePic: randomAvatar,
    });

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15d",
      }
    );

    // create the user in the stream


    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      sameSite: "Strict", // Helps prevent CSRF attacks
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    });

    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function login(req, res) {
 try{
    const {email, password}= req.body;
    // check if email and password are provided
    if(!email || !password){
        return res.status(400).json({ message: "All Fields are required"});
    }
    // check if user not found
    const user = await User.findOne({email});
    if(!user){
        return res.status(401).json({ message: "Invalid email or password"});
    }

    


 }catch (error){
    console.log(error);
    res.status(500).json({ message: "Internal server error"});
 }
}

export function logout(req, res) {
  res.send("logout Route");
}
