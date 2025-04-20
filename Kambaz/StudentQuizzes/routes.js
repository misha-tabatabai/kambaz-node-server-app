import * as studentQuizzesDao from "./dao.js";

export default function StudentQuizRoutes(app) {
    // Create a new student quiz attempt
    app.post("/api/studentQuizzes", async (req, res) => {
        const studentQuiz = await studentQuizzesDao.createStudentQuiz(req.body);
        res.json(studentQuiz);
    });

    // Get all quiz attempts for a student
    app.get("/api/students/:studentId/quizzes", async (req, res) => {
        const { studentId } = req.params;
        const studentQuizzes = await studentQuizzesDao.findStudentQuizzesByStudent(studentId);
        res.json(studentQuizzes);
    });

    // Get all attempts for a specific quiz
    app.get("/api/quizzes/:quizId/attempts", async (req, res) => {
        const { quizId } = req.params;
        const quizAttempts = await studentQuizzesDao.findStudentQuizzesByQuiz(quizId);
        res.json(quizAttempts);
    });

    // Get all attempts for a specific student and quiz
    app.get("/api/studentQuizzes/:studentId/:quizId", async (req, res) => {
        const { studentId, quizId } = req.params;
        const studentQuizzes = await studentQuizzesDao.findStudentQuizzesByStudentAndQuiz(studentId, quizId);
        res.json(studentQuizzes);
    });

    // Get a specific quiz attempt
    app.get("/api/studentQuizzes/:id", async (req, res) => {
        const { id } = req.params;
        const studentQuiz = await studentQuizzesDao.findStudentQuizById(id);
        res.json(studentQuiz);
    });

    // Update a quiz attempt
    app.put("/api/studentQuizzes/:id", async (req, res) => {
        const { id } = req.params;
        const status = await studentQuizzesDao.updateStudentQuiz(id, req.body);
        res.json(status);
    });

    // Submit a completed quiz
    app.post("/api/studentQuizzes/:id/submit", async (req, res) => {
        const { id } = req.params;
        const { answers, score, totalPoints } = req.body;
        const status = await studentQuizzesDao.submitQuiz(id, answers, score, totalPoints);
        res.json(status);
    });

    // Delete a quiz attempt
    app.delete("/api/studentQuizzes/:id", async (req, res) => {
        const { id } = req.params;
        const status = await studentQuizzesDao.deleteStudentQuiz(id);
        res.json(status);
    });
} 