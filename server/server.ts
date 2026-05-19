import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Application } from "./models/applications"
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors())
app.use(express.json())

console.log("ATLAS_URI:", process.env.ATLAS_URI);

mongoose.connect(process.env.ATLAS_URI!)
  .then(() => console.log(" ✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err))

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on ${PORT}`);
});

// app.post("/apply", async (req, res) => {


//   try {


//     const data = req.body;

//     const saved = await Application.create(data);

//     res.json({ success: true, data: saved, });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ ok: false })
//   }
// })

app.get("/", async (req, res) => {
  res.send("server is alive")
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
})

app.get("/roster", (req, res) => {
  res.send("server is running /roster")
})