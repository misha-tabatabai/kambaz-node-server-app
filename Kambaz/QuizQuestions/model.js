import mongoose from "mongoose";
import quizQuestionSchema from "./schema.js";

const quizQuestionModel = mongoose.model("QuizQuestion", quizQuestionSchema);

export default quizQuestionModel; 