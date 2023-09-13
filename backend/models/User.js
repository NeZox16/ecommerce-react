import mongoose from "mongoose";

const User = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatarUrl: String,
    role: {
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isSeller: {
            type: Boolean,
            default: false,
        },
        isUser: {
            type: Boolean,
            default: true,
        }
    }

}, {timestamps: true,})

export default mongoose.model("User", User);