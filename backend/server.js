import express from 'express';
import multer from 'multer';
import cors from 'cors'
import { registerValidator, loginValidator, carValidator } from './validations.js';
import { CarController, UserController } from './controllers/index.js'
import { checkAuth, validationErrors } from './utils/index.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

const app = express();
dotenv.config()

const storage = multer.diskStorage({
    destination: (_, __, cd) => {
        cd(null, 'uploads');
    },
    filename: (_, file, cd) => {
        cd(null, file.originalname);
    },
})

const upload = multer({ storage })

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB connect'))
    .catch((err) => console.log(err))

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

app.post('/auth/login', loginValidator, validationErrors, UserController.login)
app.post('/auth/register', registerValidator, validationErrors, UserController.register)
app.get('/auth/me', checkAuth, UserController.getMe)

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

app.get('/cars', CarController.getAll)
app.get('/cars/:id', CarController.getOne)
app.post('/cars', checkAuth, carValidator, CarController.create)
app.delete('/cars/:id', checkAuth ,CarController.remove)
app.patch('/cars/:id', checkAuth, carValidator ,CarController.update)


app.listen(5000, () => {
    console.log('Backend is running');
})