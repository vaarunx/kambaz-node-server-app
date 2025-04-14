import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    questionId: String,
    title: String,
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    qtype: String,
    question: String,
    points: Number,
    answer: [{ answer: String, isAnswer: Boolean }],
  },
  { collection: "questions" }
);
export default schema;
