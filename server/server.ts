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

async function startServer() {
  try {
    mongoose.set("bufferCommands", false);
    await mongoose.connect(process.env.ATLAS_URI!);
    console.log("MONGO STATE:", mongoose.connection.readyState);
    console.log("✅ MongoDB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on ${PORT}`);
    });

  } catch (err) {
    console.error("❌ Mongo connection failed:", err);
  }
}

startServer();

app.post("/apply", async (req, res) => {


  try {
    console.log("HIT /apply");

    const safeData = {
      name: req.body.name,
      realm: req.body.realm,
    };

    console.log("SAFE DATA:", safeData);

    const doc = new Application(safeData);
    console.log("MODEL CREATED");
    const saved = await doc.save();
    console.log("SAVE COMPLETED");

    return res.json({
      success: true,
      data: "saved",
    });

  } catch (err) {
    console.error("MONGO ERROR:", err);
    return res.status(500).json({ ok: false });
  }

  // try {

  //   console.log("HIT /apply");

  //   const data = req.body;

  //   console.log("DATA TYPE:", typeof data);
  //   console.log("DATA KEYS:", Object.keys(data));
  //   console.log("RAW DATA:", data);
  //   await validateCharacter({ name: data.name, realm: data.realm })

  //   const saved = await Application.create(data);

  //   await sendWebhook(data)

  //   res.json({
  //     success: true,
  //     data: saved,
  //   });
  // } catch (err) {
  //   console.error(err);
  //   return res.status(500).json({ ok: false })
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