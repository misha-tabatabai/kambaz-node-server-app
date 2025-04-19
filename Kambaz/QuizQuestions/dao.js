import model from "./model.js";
import { v4 as uuidv4 } from 'uuid';

export const createQuizQuestion = async (quizQuestion) => {
    const newQuizQuestion = { ...quizQuestion, _id: uuidv4() };
    return model.create(newQuizQuestion);
};

export const findQuestionsForQuiz = async (quizId) => {
    return model.find({ quizId: quizId });
};

export const updateQuizQuestion = async (questionId, questionUpdates) => {
    return model.updateOne(
        { _id: questionId },
        { $set: questionUpdates }
    );
};

export const deleteQuizQuestion = async (questionId) => {
    return model.deleteOne({ _id: questionId });
};

