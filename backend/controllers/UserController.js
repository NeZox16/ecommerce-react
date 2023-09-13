import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import User from '../models/User.js';
dotenv.config()
export const register = async  (req, res) => {
    try {
        const pass = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(pass, salt);

        const doc = new User({
            email: req.body.email,
            fullName: req.body.fullName,
            password: hash,
            avatarUrl: req.body.avatarUrl,
            role: req.body.role
        })

        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        }, process.env.JWT_SEC, {expiresIn: '30d'})

        const { password, ...userData} = user._doc;

        res.json({
            ...userData,
            token,
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: `Failed to register `
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})

        if(!user) {
            return res.status(404).json({
                message: "Invalid login or password"
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.password)

        if(!isValidPass) {
            return res.status(404).json({
                message: "Invalid login or password"
            })
        }

        const token = jwt.sign({
            _id: user._id,
        }, process.env.JWT_SEC, {expiresIn: '30d'})

        const { password, ...userData} = user._doc;

        res.json({
            ...userData,
            token,
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: `Failed to login`
        })
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) {
            res.status(404).json({
                message: "User is not found"
            })
        }

        const { password, ...userData} = user._doc;

        res.json({userData})
    } catch(err) {
        res.status(500).json({
            message: "No access"
        })
    }
}