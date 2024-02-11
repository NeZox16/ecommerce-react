import { body } from "express-validator";

export const loginValidator = [
    body("email", "Bad mail format").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
        min: 5,
    }),
];

export const registerValidator = [
    body("email", "Bad mail format").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
        min: 8,
    }),
    body("fullName", "Enter your name").isLength({ min: 3 }).isString(),
    body("avatarUrl", "Incorrect avatar reference").optional().isURL(),
];
