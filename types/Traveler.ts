import { Equipped } from "./Equipped"

export interface Traveler {
  name: string
  slug: string
  full_image: string
  sprites: {
    Apothecary: string
    Cleric: string
    Dancer: string
    Hunter: string
    Merchant: string
    Scholar: string
    Thief: string
    Warrior: string
    Runelord: string
    Sorcerer: string
    Starseer: string
    Warmaster: string
    Armsmaster: string
    Arcanist: string
    Conjurer: string
    Inventor: string
    None: string
  },
  primary_job: string
  secondary_job: string
  active: string
  equipped: Equipped
}
