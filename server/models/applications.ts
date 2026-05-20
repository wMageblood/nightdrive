import mongoose from "mongoose";

export interface applyProps {
  name: string
  realm: string
  main: string
  alt: string
  role: string
  experience: string
  availability: string
  reasons: string
  contact: string
}

export function getDataBase() {

  const applicationSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    realm: { type: String, trim: true, required: true },
    main: { type: String, trim: true, required: true },
    alt: { type: String, trim: true, required: true },
    role: { type: String, trim: false, required: true },
    experience: { type: String, trim: true, maxlength: 150, required: true },
    availability: { type: String, trim: true, maxlength: 50, required: true },
    reasons: { type: String, trim: true, maxlength: 150, required: true },
    contact: { type: String, trim: true, maxlength: 50, required: true },
  });

  return mongoose.model("Application", applicationSchema)

}