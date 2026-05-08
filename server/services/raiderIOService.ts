interface characterProps {
  name: string,
  realm: string,
  ilvl?: number,
}

export const validateCharacter = async ({ name, realm }: characterProps) => {

  const response = await fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=${realm}&name=${name}&fields=gear`)

  try {
    if (!response.ok) {
      console.log('there was an error fetching your character')
    }

    const data = await response.json()

    console.log(data.gear?.item_level_equipped)

    if (data.gear?.item_level_equipped <= 279) {
      throw new Error('ilvl aint enough bitch')
    }

    return data.gear?.item_level_equipped
  } catch (err) {
    console.error(err)
  }
};