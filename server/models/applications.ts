import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  realm: { type: String, required: true, trim: true },
  main: { type: String, required: true, trim: true },
  alt: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: false },
  experience: { type: String, required: true, trim: true, maxlength: 150 },
  availability: { type: String, required: true, trim: true, maxlength: 50 },
  reasons: { type: String, required: true, trim: true, maxlength: 150 },
  contact: { type: String, required: true, trim: true, maxlength: 50 },
});

export const Application = mongoose.model("Application", applicationSchema)
