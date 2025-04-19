import mongoose from "mongoose";

const quizQuestionSchema = new mongoose.Schema({
    _id: String,
    quizId: String,
    title: String,
    type: {
        type: String,
        enum: ["multiple-choice", "true-false", "fill-blank"]
    },
    points: Number,
    choices: [String],
    correctAnswer: String,
    possibleAnswers: [String]
}, { collection: "quizQuestions" });

export default quizQuestionSchema; 