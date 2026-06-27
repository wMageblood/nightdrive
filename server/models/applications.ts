import mongoose from "mongoose";

export interface applyProps {
  name: string
  realm: string
  main: string
  role: string
  availability: string
  contact: string
  experience: string
  reasons: string
  personal: string
}

export function getDataBase() {

  const applicationSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true, maxlength: 50 },
    realm: { type: String, trim: true, required: true },
    main: { type: String, trim: true, required: true },
    role: { type: String, trim: false, required: true },
    availability: { type: String, trim: true, maxlength: 150, required: true },
    contact: { type: String, trim: true, maxlength: 100, required: true },
    experience: { type: String, trim: true, maxlength: 5000, required: true },
    reasons: { type: String, trim: true, maxlength: 1000, required: true },
    personal: { type: String, trim: true, maxlength: 1000, required: true },
  });

  return mongoose.model("Application", applicationSchema)

}