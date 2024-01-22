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
    avatarUrl: {
        type: String,
        default: 'https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png'
    },
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