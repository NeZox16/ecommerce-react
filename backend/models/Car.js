import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    rating: { type: Number, required: true },
    comment: { type: String },
});

const Car = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        liked: { type: Boolean, default: false, required: true },
        reviewer: {
            rating: {
                required: true,
                type: Number,
                default: 0,
            },
            numReviews: {
                required: true,
                type: Number,
                default: 0,
            },
        },
        desc: {
            type: String,
            required: true,
        },
        properties: {
            type_car: String,
            capacity: String,
            steering: String,
            gasoline: Number,
        },
        price: {
            type: Number,
            default: 70,
        },
        sale: {
            type: Number,
        },
        reviews: [reviewSchema],
    },
    { timestamps: true }
);

export default mongoose.model("Car", Car);
