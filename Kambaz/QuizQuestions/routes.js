import * as quizQuestionsDao from "./dao.js";

export default function QuizQuestionRoutes(app) {

    app.delete("/api/quizQuestions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const status = await quizQuestionsDao.deleteQuizQuestion(questionId);
        res.json(status);
    });
    app.put("/api/quizQuestions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const questionUpdates = req.body;
        const status = await quizQuestionsDao.updateQuizQuestion(questionId, questionUpdates);
        res.json(status);
    });
} 