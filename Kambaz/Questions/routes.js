import * as questionsDao from "./dao.js";

export default function QuestionRoutes(app) {
  // Modifying the quiz
  app.put("/api/Questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    // console.log("reached", assignmentId);
    // console.log("reached", assignmentUpdates);

    const status = await questionsDao.updateQuestion(
      questionId,
      questionUpdates
    );
    res.send(status);
  });

  // Deleting
  app.delete("/api/Questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const status = await questionsDao.deleteQuestion(questionId);
    res.send(status);
  });

  // Get quiz by id
  app.get("/api/Questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const question = await questionsDao.findQuestionById(questionId);
    res.json(question);
  });

  //   app.get("/api/courses/:courseId/Quizzes", (req, res) => {
  //     console.log("Inside server");
  //     const { courseId } = req.params;
  //     const quizzes = quizDao.findQuizzes(courseId);
  //     res.json(quizzes);
  //   });

  app.get("/api/Quizzes/:quizId/Questions", async (req, res) => {
    const { quizId } = req.params;
    console.log("Inside questions server", quizId);

    const questions = await questionsDao.findQuestions(quizId);
    console.log(questions);
    res.json(questions);
  });

  // Creating new Questions.
  app.post("/api/Quizzes/Questions", async (req, res) => {
    // const { quizId } = req.params;
    const question = {
      ...req.body,
    };
    const newQuestion = await questionsDao.createQuestion(question);
    res.send(newQuestion);
  });
}
