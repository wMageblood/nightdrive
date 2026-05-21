interface characterProps {
  name: string,
  realm: string,
  ilvl?: number,
}

export const validateCharacter = async ({ name, realm }: characterProps) => {

  const response = await fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=${realm}&name=${name}&fields=gear%2Cmythic_plus_scores_by_season%3Acurrent`)

  try {

    if (!response.ok) {
      throw new Error(`You character wasnt found, response number #${response.status}`)
    }

    const data = await response.json()

    if (data.gear?.item_level_equipped <= 279) {
      throw new Error('bro, validation error.')
    }

    if (data.mythic_plus_scores_by_season?.[0]?.scores?.all <= 2700) {
      throw new Error(':) can you guess why it failed?')
    }

  } catch (err) {
    throw new Error('Character wasnt valid.')
  }
};