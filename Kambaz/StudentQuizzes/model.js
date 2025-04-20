import mongoose from "mongoose";
import studentQuizSchema from "./schema.js";

const studentQuizModel = mongoose.model("StudentQuiz", studentQuizSchema);

export default studentQuizModel; 