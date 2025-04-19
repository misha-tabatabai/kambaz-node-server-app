import * as quizzesDao from "./dao.js";
import * as quizQuestionsDao from "../QuizQuestions/dao.js";
export default function QuizRoutes(app) {

    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.json(status);
    });

    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.json(status);
    });

    app.get("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quiz = await quizzesDao.findQuizById(quizId);
        res.json(quiz);
    });

    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const questions = await quizQuestionsDao.findQuestionsForQuiz(quizId);
        res.json(questions);
    });

    app.post("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const question = { ...req.body, quiz: quizId };
        const newQuestion = await quizQuestionsDao.createQuizQuestion(question);
        res.json(newQuestion);
    });
} 