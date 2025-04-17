// import * as enrollmentsDao from "./dao.js";
// export default function EnrollmentsRoutes(app) {
//   app.get("/api/enroll", async (req, res) => {
//     const enrollments = await enrollmentsDao.GetAllEnrollments();
//     res.send(enrollments);
//   });

//   app.post("/api/enroll/:userId/courses/:courseId", async (req, res) => {
//     let { uid, cid } = req.params;
//    if (uid === "current") {
//      const currentUser = req.session["currentUser"];
//      uid = currentUser._id;
//    }
//    const status = await enrollmentsDao.enrollUserInCourse(uid, cid);
//    res.send(status);

//   });

//   app.delete("/api/enroll/:userId/courses/:courseId", async (req, res) => {
//     let { uid, cid } = req.params;
//    if (uid === "current") {
//      const currentUser = req.session["currentUser"];
//      uid = currentUser._id;
//    }
//    const status = await enrollmentsDao.unenrollUserFromCourse(uid, cid);
//    res.send(status);

//     res.send(status);
//   });
// }
