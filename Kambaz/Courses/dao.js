import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAllCourses() {
  return Database.courses;
}

export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === userId && enrollment.course === course._id
    )
  );
  console.log("Enrolled courses for user:", userId, enrolledCourses.length);
  return enrolledCourses;
}

export function createCourse(course) {
  const newCourse = { ...course, _id: uuidv4(), img: "/images/reactjs.jpg" };
  Database.courses = [...Database.courses, newCourse];
  console.log("Created course:", newCourse);
  return newCourse;
}

export function deleteCourse(courseId) {
  const { courses, enrollments } = Database;
  Database.courses = courses.filter((course) => course._id !== courseId);
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId
  );
  console.log("Deleted course:", courseId);
}

export function updateCourse(courseId, courseUpdates) {
  const { courses } = Database;
  const course = courses.find((course) => course._id === courseId);
  Object.assign(course, courseUpdates);
  console.log("Updated course:", course);
  return course;
}
