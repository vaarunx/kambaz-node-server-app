import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    description: String,
    course: { type: String, ref: "CourseModel" },
    lesson: Array,
  },
  { collection: "modules" }
);
export default schema;