import Car from "../models/Car.js";

export const getAll = async (req, res) => {
    try {
        const cars = await Car.find();

        res.json(cars);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: `Failed to get a post with a car`,
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const carId = req.params.id;

        const doc = await Car.findOneAndUpdate({
            _id: carId,
        });

        if (!doc) {
            return res.status(404).json({
                message: "A post with a car is not found",
            });
        }

        res.json(doc);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: `Failed to get a post with a car`,
        });
    }
};

export const create = async (req, res) => {
    try {
        const doc = new Car({
            title: req.body.title,
            liked: req.body.liked,
            reviewer: req.body.reviewer,
            desc: req.body.desc,
            properties: req.body.properties,
            price: req.body.price,
            sale: req.body.sale,
            reviews: req.body.reviews,
        });

        const car = await doc.save();
        console.log(doc);
        res.json(doc);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: `Failed to create a post with a car`,
        });
    }
};

export const remove = async (req, res) => {
    try {
        const carId = req.params.id;

        const doc = await Car.findOneAndDelete({ _id: carId });

        if (!doc) {
            return res.status(404).json({
                message: "A post with a car is not found",
            });
        }

        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: `No access`,
        });
    }
};

export const update = async (req, res) => {
    try {
        const carId = req.params.id;

        await Car.updateOne(
            {
                _id: carId,
            },
            {
                name: req.body.name,
                desc: req.body.desc,
                price: req.body.price,
                category: req.body.category,
                availability: req.body.availability,
                status: req.body.status,
                imageUrl: req.body.imageUrl,
                user: req.userId,
            }
        );

        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: `Failed to update a post with a car`,
        });
    }
};
