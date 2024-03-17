import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Observation from './src/utils/ObservationalDataModel.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://eoghan1284:Complexity7132K14@cluster0.738tjud.mongodb.net/CapstoneDB?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log("App is running on port 5000")
    });
}).catch(error => {
    console.log(error);
});

app.post('/observation',async(req,res) => {
    try {
        const observation = await Observation.create(req.body)
        res.status(200).json(observation)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
