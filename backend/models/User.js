import mongoose from "mongoose";

const User = new mongoose.Schema(
    {
        username: {
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
        avatar_url: {
            type: String,
            default:
                "https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png",
        },
        properties: {
            wallet: {
                available_money: Number,
                method_payment: {
                    cash: Boolean,
                    card_or_crypto_type: {
                        visa: {
                            number: {
                                type: Number,
                                unique: true,
                            },
                            holder: {
                                type: String,
                            },
                            expiration_date: {
                                type: Date,
                            },
                            CVC: {
                                type: Number,
                            },
                        },
                        paypal: {
                            card_type: String,
                            number: {
                                type: Number,
                                unique: true,
                            },
                            expiration_date: {
                                type: Date,
                            },
                            CVC: {
                                type: Number,
                            },
                            email: {
                                type: String,
                            },
                        },
                        crypto: {
                            current: String,
                            wallet_address: {
                                type: String,
                                unique: true,
                            },
                        },
                    },
                },
            },
        },
        liked: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "Car",
            },
        ],
        notification: {
            default: [""],
        },
        rules: {
            default: ["User"],
        },
    },
    { timestamps: true }
);

export default mongoose.model("User", User);
