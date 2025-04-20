import mongoose from "mongoose";

const studentQuizSchema = new mongoose.Schema({
    _id: String,
    studentId: String,
    quizId: String,
    answers: [{
        questionId: String,
        answer: String,
        isCorrect: Boolean
    }],
    score: Number,
    totalPoints: Number,
    completed: Boolean,
    startedAt: Date,
    completedAt: Date
}, { collection: "studentQuizzes" });

export default studentQuizSchema; 