console.log("SERVER FILE STARTED");
console.log("PORT:", process.env.PORT);
console.log("ATLAS_URI EXISTS:", !!process.env.ATLAS_URI);
console.log("WEBHOOK EXISTS:", !!process.env.DISCORD_ASCENDED_WEBHOOK_URL);

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Application } from "./models/applications"
import { validateCharacter } from "./services/raiderIOService";
import { sendWebhook } from "./services/discordWebhookService";
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors())
app.use(express.json())

console.log("ATLAS_URI:", process.env.ATLAS_URI);

mongoose.connect(process.env.ATLAS_URI!)
  .then(() => console.log(" ✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo error:", err))


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on ${PORT}`);
});

app.post("/apply", async (req, res) => {


  console.log("HIT /apply");
  console.log(req.body);

  return res.json({ ok: true });

  // try {

  //   console.log("route entered");

  //   const data = req.body;

  //   console.log("body assigned");

  //   await validateCharacter({ name: data.name, realm: data.realm })
  //   console.log("validated character")
  //   console.log("before db");

  //   const saved = await Application.create(data);

  //   console.log(JSON.stringify(data))

  //   console.log("after db stringify");

  //   await sendWebhook(data)

  //   res.json({
  //     success: true,
  //     data: saved,
  //   });
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({
  //     success: false,
  //     message: "failed to save application"
  //   });
  // }
})

app.get("/", async (req, res) => {
  res.send("server is alive")
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
})

// app.get("/roster", (req, res) => {
//   res.send("server is running /roster")
// })