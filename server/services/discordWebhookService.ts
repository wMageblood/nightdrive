import { CLASS_EMOJIS, CLASS_COLORS, ROLE_EMOJIS, APPLY_PHRASES } from "../constants/embededMessageProperties"
import normalizeString from "../utils/normalizeString"

interface discordProps {
  experience: string,
  availability: string,
  reasons: string,
  contact: string,
  realm: string,
  name: string,
  main: string,
  personal: string,
  role: string,

}

export const sendWebhook = async ({ experience, availability, reasons, contact, realm, name, main, role, personal }: discordProps) => {

  const mainIcon = CLASS_EMOJIS[main] || "mainIcon not found";
  const roleIcon = ROLE_EMOJIS[role] || "roleIcon not found";
  const classColors = CLASS_COLORS[main] || 0xffffff;

  await fetch(process.env.DISCORD_ASCENDED_WEBHOOK_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds: [
        {
          title: `${name} - ${realm}`,
          description: [
            `<:raiderioicon:1500995575867248680> [RaiderIO](https://www.raider.io/characters/us/${normalizeString(realm)}/${normalizeString(name)})`,
            `<:wlogsicon:1500994865356476577> [Logs](https://www.warcraftlogs.com/character/us/${normalizeString(realm)}/${normalizeString(name)})`,
            `<:wowicon:1501033954080194660> [Armory](https://worldofwarcraft.com/en-us/character/us/${normalizeString(realm)}/${normalizeString(name)})`,
          ].join("\n"),
          color: classColors,
          fields: [
            { name: "Main", value: `${mainIcon} ${main}`, inline: true },
            { name: "Role", value: `${roleIcon} ${role}`, inline: true },
            { name: "__Información Personal__", value: `${personal}`, inline: true },
            { name: "__Experiencia__:", value: experience },
            { name: "__Disponibilidad horaria__:", value: availability },
            { name: "__Razones para aplicar__:", value: reasons },
            { name: "__Información de contacto__:", value: contact },
          ],
          footer: {
            text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          },
        },
      ],
    }),
  });
};