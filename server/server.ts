import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Application } from "./models/applications"

const app = express();

app.use(cors())
app.use(express.json())

dotenv.config({ path: "./config.env" });


mongoose.connect(process.env.ATLAS_URI!)
  .then(() => console.log(" ✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo error:", err))


app.listen(3001, () => {
  console.log("server running on port 3001")
})

app.post("/apply", async (req, res) => {
  try {

    const data = req.body
    const saved = await Application.create(data);

    await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: "📩 New Application",
            color: 0xc174b6,
            fields: [
              { name: "Main", value: data.main, inline: true },
              { name: "Alt", value: data.alt, inline: true },
              { name: "Spec", value: data.mainClassOption, inline: true },
              { name: "Experience", value: data.experience },
              { name: "Availability", value: data.availability },
              { name: "Reasons", value: data.reasons },
              { name: "Contact", value: data.contact },
            ],
          },
        ],
      }),
    });

    res.json({
      success: true,
      data: saved,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "failed to save application"
    });
  }
})

app.get("/", (req, res) => {
  res.send("server is running")
});


app.get("/roster", (req, res) => {
  res.send("server is running /roster")
})