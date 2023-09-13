import mongoose from "mongoose";

const Car = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type:  String,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    category: {
        type: Array,
        default: [],
    },
    availability: Boolean,
    viewsCount: {
        type: Number,
        default: 0,
    },
    status: {
        type: Boolean,
        default: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },

}, {timestamps: true,})

export default mongoose.model("Car", Car);