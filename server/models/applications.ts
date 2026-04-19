import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  main: { type: String, required: true, trim: true },
  alt: { type: String, required: true, trim: true },
  experience: { type: String, required: true, trim: true, maxlength: 150 },
  availability: { type: String, required: true, trim: true, maxlength: 50 },
  reasons: { type: String, required: true, trim: true, maxlength: 150 },
  contact: { type: String, required: true, trim: true, maxlength: 50 },
});

export const Application = mongoose.model("Application", applicationSchema)
