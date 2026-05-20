interface characterProps {
  name: string,
  realm: string,
  ilvl?: number,
}

export const validateCharacter = async ({ name, realm }: characterProps) => {

  const response = await fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=${realm}&name=${name}&fields=gear`)

  try {

    if (!response.ok) {
      throw new Error(`You character wasnt found, response number #${response.status}`)
    }

    const data = await response.json()

    if (data.gear?.item_level_equipped <= 279) {
      throw new Error('ilvl aint enough bitch')
    }

  } catch (err) {
    throw new Error('Character wasnt valid.')
  }
};