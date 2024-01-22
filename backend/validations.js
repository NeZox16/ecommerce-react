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

export const carValidator = [
  body("name", "Enter vehicle name").isLength({ min: 3 }).isString(),
  body("desc", "Enter description car").isLength({ max: 125 }).isString(),
  body("price", "Enter vehicle price").isLength({ min: 3 }).isNumeric(),
  body("category", "Invalid category format").optional().isString(),
  body("availability", "Select machine availability").isBoolean(),
  body("status", "Invalid status format").optional().isString(),
  body("imageUrl", "Incorrect avatar reference").optional().isString(),
];
