import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { getDataBase } from "./models/applications";
import { validateCharacter } from "./services/raiderIOService";
import { sendWebhook } from "./services/discordWebhookService";
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.ATLAS_URI!)
  .then(() => console.log(" ✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err))

const db = getDataBase();

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on ${PORT}`);
});

app.post("/apply", async (req, res) => {

  try {

    const data = req.body;

    const apply = new db(data)
    await apply.save()

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(200).json({ ok: false })
  }
})

app.get("/", (req, res) => {
  res.send("server is running /")
})

app.get("/about", (req, res) => {
  res.send("server is running /about")
})

app.get("/roster", (req, res) => {
  res.send("server is running /roster")
})