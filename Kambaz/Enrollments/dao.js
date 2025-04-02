import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const enrollment = { _id: uuidv4(), user: userId, course: courseId };
  enrollments.push(enrollment);
  console.log("Enrolled user:", userId, "in course:", courseId);
  return enrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
  console.log("Unenrolled user:", userId, "from course:", courseId);
}

export function GetAllEnrollments() {
  const { enrollments } = Database;
  console.log("Fetcehd all enrollments");
  return enrollments;
}
