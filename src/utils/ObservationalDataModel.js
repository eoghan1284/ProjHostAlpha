import mongoose from 'mongoose';


const dataSchema = mongoose.Schema({
    gender: {
        type: String, 
        required: [true, "enter gender"]
    },
    age: {
        type: Number, 
        required: [true, "enter age"]
    },
    survey1Answers: {
        type: [Number], 
        required: [true, "enter survey 1 answers"]
    },
    survey2Answers: {
        type: [Number], 
        required: [true, "enter survey 2 answers"]
    },
    survey3Answers: {
        type: [Number], 
        required: [true, "enter survey 3 answers"]
    },
    survey1Total: {
        type: Number, 
        required: [true, "enter survey 1 total"]
    },
    survey2Total: {
        type: Number, 
        required: [true, "enter survey 2 total"]
    },
    survey3Total: {
        type: Number, 
        required: [true, "enter survey 3 total"]
    },
    probabilities: {
        type: [Number], // an array of 3 numbers eg 0.3, 0.5, 0.2
        required: [true, "enter probabilities"]
    },
    choices: {
        type: [Number], // stores caveNums
        required: [true, "enter choices"]
    },
    results: {
        type: [Number], // -1 denotes a loss, 1 denotes a win
        required: [true, "enter results"]
    },
    finalGold: {
        type: Number, //playerGold at end
        required: [true, "enter finalGold"]
    }
},
{
    timestamps: false,
    collection: 'Observations2'
});

const Observation = mongoose.model('Observation', dataSchema);

export default Observation;
