import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  realm: { type: String, trim: true },
  main: { type: String, trim: true },
  alt: { type: String, trim: true },
  role: { type: String, trim: false },
  experience: { type: String, trim: true, maxlength: 150 },
  availability: { type: String, trim: true, maxlength: 50 },
  reasons: { type: String, trim: true, maxlength: 150 },
  contact: { type: String, trim: true, maxlength: 50 },
});

export const Application = mongoose.model("Application", applicationSchema)
