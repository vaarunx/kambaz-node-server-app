import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createAssignment(assignment) {
  delete assignment._id;
  const assignments = { ...assignment, _id: uuidv4() };
  model.create(assignments);
  return assignments;
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}

export async function updateAssignment(assignmentId, assignmentUpdates) {
  delete assignmentUpdates._id;
  await model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
  return model.findById(assignmentId);
}
