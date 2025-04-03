import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        dao.enrollUserInCourse(userId, courseId);
        res.sendStatus(200);
    });

    app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        dao.unenrollUserInCourse(userId, courseId);
        res.sendStatus(200);
    });
}
