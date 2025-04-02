import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAllAssignments() {
  return Database.assignments;
}

export function findAssignmentsForCourse(courseId) {
  console.log("Finding assignments for course:", courseId);
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function createAssignment(assignment) {
  const newassignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newassignment];
  console.log("created assignment:", newassignment);
  return newassignment;
}

export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter(
    (assignment) => assignment._id !== assignmentId
  );
  console.log("Deleted assignment:", assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  Object.assign(assignment, assignmentUpdates);
  console.log("Updated assignment:", assignment);
  return assignment;
}
