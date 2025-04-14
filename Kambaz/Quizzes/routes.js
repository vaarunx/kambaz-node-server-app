import * as quizzesDao from "./dao.js";

export default function QuizRoutes(app) {
  // Modifying the quiz
  app.put("/api/Quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    // console.log("reached", assignmentId);
    // console.log("reached", assignmentUpdates);

    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });

  // Deleting
  app.delete("/api/Quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });

  // Get quiz by id
  app.get("/api/Quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quiz = await quizzesDao.findQuizById(quizId);
    res.json(quiz);
  });

  app.get("/api/courses/:courseId/Quizzes", async (req, res) => {
    console.log("Inside server");
    const { courseId } = req.params;
    const quizzes = await quizDao.findQuizzes(courseId);
    res.json(quizzes);
  });

  app.get("/api/Quizzes/id", (req, res) => {
    console.log("Iniside quiz id creation ");
    const { _id } = quizDao.getId();
    res.json({ id });
  });
}
