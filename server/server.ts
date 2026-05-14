import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Application } from "./models/applications"
import { validateCharacter } from "./services/raiderIOService";
import { sendWebhook } from "./services/discordWebhookService";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors())
app.use(express.json())

dotenv.config({ path: "./config.env" });


mongoose.connect(process.env.ATLAS_URI!)
  .then(() => console.log(" ✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo error:", err))


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on ${PORT}`);
});

app.post("/apply", async (req, res) => {


  try {

    const data = req.body;

    await validateCharacter({ name: data.name, realm: data.realm })

    const saved = await Application.create(data);

    await sendWebhook(data)

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

// app.get("/", async (req, res) => {
//   res.send("server is running /roster")
// });


// app.get("/roster", (req, res) => {
//   res.send("server is running /roster")
// })