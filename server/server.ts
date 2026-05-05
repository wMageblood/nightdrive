import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Application } from "./models/applications"
import { CLASS_EMOJIS } from "./constants/classEmojis";
import { CLASS_COLORS } from "./constants/classColors";
import { APPLY_PHRASES } from "./constants/applyPhrases";
import { ROLE_EMOJIS } from "./constants/roleEmojis";


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

    const mainIcon = CLASS_EMOJIS[data.main] || "mainIcon not found";
    const altIcon = CLASS_EMOJIS[data.alt] || "altIcon not found";
    const roleIcon = ROLE_EMOJIS[data.role] || "roleIcon not found";
    const classColors = CLASS_COLORS[data.main] || "classColor not found";
    const randomPhrase = APPLY_PHRASES[Math.floor(Math.random() * APPLY_PHRASES.length)]

    await fetch(process.env.DISCORD_ASCENDED_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `# ${randomPhrase}`,
        embeds: [
          {
            title: `${data.name} - ${data.realm}`,
            description: `<:raiderioicon:1500995575867248680>  [RaiderIO](https://www.raider.io/characters/us/${data.realm}/${data.name}) \n <:wlogsicon:1500994865356476577>  [Logs](https://www.warcraftlogs.com/character/us/${data.realm}/${data.name}) \n <:wowicon:1501033954080194660> [Armory](https://worldofwarcraft.com/en-us/character/us/${data.realm}/${data.name})`,
            color: classColors,
            fields: [
              { name: "Main", value: `${mainIcon} ${data.main}`, inline: true },
              { name: "Alt", value: `${altIcon} ${data.alt}`, inline: true },
              { name: "Role", value: `${roleIcon} ${data.role}`, inline: true },
              { name: "__Experiencia__:", value: data.experience },
              { name: "__Disponibilidad horaria__:", value: data.availability },
              { name: "__Razones para aplicar__:", value: data.reasons },
              { name: "__Información de contacto__:", value: data.contact },
            ],
            footer: {
              text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            },
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