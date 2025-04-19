import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    _id: String,
    course: String,
    title: String,
    description: String,
    points: Number,
    dueDate: Date,
    availableFrom: Date,
    availableUntil: Date,
    quizType: String,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
    published: Boolean,
    attempts: Number
},
    { collection: "quizzes" }
);
export default quizSchema; 