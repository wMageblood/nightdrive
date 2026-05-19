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

function getDataBase() {

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



  return mongoose.model("Application", applicationSchema)

}

export async function saveData(data: applyProps) {
  const db = getDataBase();
  const apply = new db(data)
  await apply.save()
}