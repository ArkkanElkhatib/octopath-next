import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Traveler } from "@/types/Traveler"
import { Equipped } from "@/types/Equipped"
import { Travelers as Ot1Travelers } from "../initialData/ot1Travelers"
import { Travelers as Ot2Travelers } from "../initialData/ot2Travelers"
import equipmentData from "../data/octopath_traveler_1/equipment.json"
import jobData from "../data/octopath_traveler_1/jobs.json"
import { Equipment } from "@/types/Equipped"

import {
  getTravelerByIndex,
  getTravelerIndexBySlug,
  getTravelerIndex,
  equipSword,
  equipPolearm,
  equipDagger,
  equipAxe,
  equipBow,
  equipStaff,
  equipShield,
  equipHeadgear,
  equipBodyArmor,
  equipAccessory1,
  equipAccessory2,
  equipSupportSkill
} from "./util"

export interface TravelersState {
  ot1Travelers: Traveler[],
  ot2Travelers: Traveler[]
}

const initialState: TravelersState = {
  ot1Travelers: Ot1Travelers,
  ot2Travelers: Ot2Travelers,
}

const defaultWeaponMap = {
  "sword": equipmentData.weapons.swords[0],
  "polearm": equipmentData.weapons.polearms[0],
  "dagger": equipmentData.weapons.daggers[0],
  "axe": equipmentData.weapons.axes[0],
  "bow": equipmentData.weapons.bows[0],
  "staff": equipmentData.weapons.staves[0],
}

const calculateWeapons = (primaryJob: string, secondaryJob: string, existingEquipment: Equipped): Equipped => {
  const primaryJobWeapons = jobData[primaryJob as keyof typeof jobData].weapons
  const secondaryJobWeapons = jobData[secondaryJob as keyof typeof jobData].weapons

  if (primaryJobWeapons && secondaryJobWeapons) {
    Object.keys(defaultWeaponMap).forEach((weaponType, _) => {
      const existingWeaponsKey = weaponType as keyof typeof existingEquipment.weapons
      if (primaryJobWeapons.findIndex((w) => w == weaponType) >= 0 || secondaryJobWeapons.findIndex((w) => w == weaponType) >= 0) {
        if (!existingEquipment.weapons[existingWeaponsKey]) {
          existingEquipment.weapons[existingWeaponsKey]
            = defaultWeaponMap[weaponType as keyof typeof defaultWeaponMap] as Equipment
        }
      } else {
        delete existingEquipment.weapons[existingWeaponsKey]
      }
    })
  }


  return existingEquipment
}

export const travelersSlice = createSlice({
  name: "travelers",
  initialState,
  reducers: {
    setSecondaryJob(
      state: TravelersState,
      action: PayloadAction<{ game: string, travelerName: string, job: string }>) {

      const { game, travelerName, job } = action.payload;

      const travelerIndex = getTravelerIndex(state, game, travelerName)

      let traveler: Traveler | null = null;
      if (travelerIndex >= 0) {
        traveler = getTravelerByIndex(state, game, travelerIndex)
      }

      if (traveler == null) {
        return
      }

      if (traveler.primary_job == job) {
        return
      }

      switch (game) {
        case "ot1":
          state.ot1Travelers[travelerIndex].secondary_job = job
          if (traveler.equipped) {
            state.ot1Travelers[travelerIndex].equipped
              = calculateWeapons(traveler.primary_job, job, traveler.equipped)

            if (!traveler.equipped
              .weapons[traveler.active as keyof typeof traveler.equipped.weapons]
            ) {
              traveler.active = Ot1Travelers
                .filter((traveler) => traveler.name == travelerName)[0].active
            }
          }
          break
        case "ot2":
          state.ot2Travelers[travelerIndex].secondary_job = job
          if (traveler.equipped) {
            state.ot2Travelers[travelerIndex].equipped
              = calculateWeapons(traveler.primary_job, job, traveler.equipped)

            if (!traveler.equipped
              .weapons[traveler.active as keyof typeof traveler.equipped.weapons]
            ) {
              traveler.active = Ot2Travelers
                .filter((traveler) => traveler.name == travelerName)[0].active
            }
          }
          break
      }
    },
    setActiveWeapon(
      state: TravelersState,
      action: PayloadAction<{ game: string, travelerName: string, weaponType: string }>) {

      const { game, travelerName, weaponType } = action.payload;

      const travelerIndex = getTravelerIndex(state, game, travelerName)

      let traveler: Traveler | null = null;
      if (travelerIndex >= 0) {
        traveler = getTravelerByIndex(state, game, travelerIndex)
      }


      if (traveler && traveler.equipped) {
        const travelerWeaponsKey = weaponType as keyof typeof traveler.equipped.weapons
        if (traveler.equipped.weapons[travelerWeaponsKey]) {
          switch (game) {
            case "ot1":
              state.ot1Travelers[travelerIndex].active = weaponType
              break
            case "ot2":
              state.ot2Travelers[travelerIndex].active = weaponType
              break
          }
        }
      }
    },
    setSword(
      state: TravelersState,
      action: PayloadAction<{ game: string, travelerName: string, weaponName: string }>) {
      const { game, travelerName, weaponName } = action.payload;

      const travelerIndex = getTravelerIndex(state, game, travelerName)

      let traveler: Traveler | null = null;
      if (travelerIndex >= 0) {
        traveler = getTravelerByIndex(state, game, travelerIndex)
      }

      const newWeapon = equipmentData.weapons.swords.filter((s) => s.name == weaponName)[0]

      if (!traveler) {
        return
      }

      if (traveler.equipped.weapons.sword) {
        switch (game) {
          case "ot1":
            state.ot1Travelers[travelerIndex].equipped.weapons.sword = newWeapon
            break
          case "ot2":
            state.ot2Travelers[travelerIndex].equipped.weapons.sword = newWeapon
            break
        }
      }
    },
    equipTraveler(
      state: TravelersState,
      action: PayloadAction<{ game: string, slug: string, equipType: string, equipName: string }>) {
      const { game, slug, equipType, equipName } = action.payload
      const travelerIndex = getTravelerIndexBySlug(state, game, slug)

      let traveler: Traveler | null = null;
      if (travelerIndex >= 0) {
        traveler = getTravelerByIndex(state, game, travelerIndex)
      }

      if (traveler) {
        switch (equipType) {
          case "sword":
            equipSword(state, game, travelerIndex, equipName)
            break
          case "polearm":
            equipPolearm(state, game, travelerIndex, equipName)
            break
          case "dagger":
            equipDagger(state, game, travelerIndex, equipName)
            break
          case "axe":
            equipAxe(state, game, travelerIndex, equipName)
            break
          case "bow":
            equipBow(state, game, travelerIndex, equipName)
            break
          case "staff":
            equipStaff(state, game, travelerIndex, equipName)
            break
          case "shield":
            equipShield(state, game, travelerIndex, equipName)
            break
          case "headgear":
            equipHeadgear(state, game, travelerIndex, equipName)
            break
          case "body armor":
            equipBodyArmor(state, game, travelerIndex, equipName)
            break
          case "accessory 1":
            equipAccessory1(state, game, travelerIndex, equipName)
            break
          case "accessory 2":
            equipAccessory2(state, game, travelerIndex, equipName)
            break
          case "support skill 1":
            equipSupportSkill(state, game, travelerIndex, equipName, 1)
            break
          case "support skill 2":
            equipSupportSkill(state, game, travelerIndex, equipName, 2)
            break
          case "support skill 3":
            equipSupportSkill(state, game, travelerIndex, equipName, 3)
            break
          case "support skill 4":
            equipSupportSkill(state, game, travelerIndex, equipName, 4)
            break
        }
      }
    },
  }
})

export const { setSecondaryJob, setActiveWeapon, equipTraveler } = travelersSlice.actions;
export default travelersSlice.reducer;



