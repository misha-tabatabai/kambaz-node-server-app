import model from "./model.js";
import { v4 as uuidv4 } from 'uuid';

export const createStudentQuiz = async (studentQuiz) => {
    const newStudentQuiz = { 
        ...studentQuiz, 
        _id: uuidv4(),
        startedAt: new Date(),
        completed: false
    };
    return model.create(newStudentQuiz);
};

export const findStudentQuizzesByStudent = async (studentId) => {
    return model.find({ studentId });
};

export const findStudentQuizzesByQuiz = async (quizId) => {
    return model.find({ quizId });
};

export const findStudentQuizById = async (id) => {
    return model.findById(id);
};

export const findStudentQuizzesByStudentAndQuiz = async (studentId, quizId) => {
    return model.find({ studentId, quizId });
};

export const updateStudentQuiz = async (id, updates) => {
    return model.updateOne(
        { _id: id },
        { $set: updates }
    );
};

export const deleteStudentQuiz = async (id) => {
    return model.deleteOne({ _id: id });
};

export const submitQuiz = async (id, answers, score, totalPoints) => {
    return model.updateOne(
        { _id: id },
        { 
            $set: { 
                answers,
                score,
                totalPoints,
                completed: true,
                completedAt: new Date()
            }
        }
    );
}; 