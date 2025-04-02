import * as enrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app) {
  app.get("/api/enroll", async (req, res) => {
    const enrollments = await enrollmentsDao.GetAllEnrollments();
    res.send(enrollments);
  });

  app.put("/api/enroll/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.send(status);
  });

  app.delete("/api/enroll/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await enrollmentsDao.unenrollUserFromCourse(
      userId,
      courseId
    );
    res.send(status);
  });
}
