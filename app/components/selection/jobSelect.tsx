import { Traveler } from "@/types/Traveler"
import JobIcon from "./jobIcon"

interface Props {
  game: string
  traveler: Traveler
}

export default function JobSelect({ game, traveler }: Props) {
  let jobInfo = {
    None: "/icons/general/jobs/none.svg",
    Apothecary: "/icons/general/jobs/apothecary.png",
    Cleric: "/icons/general/jobs/cleric.png",
    Dancer: "/icons/general/jobs/dancer.png",
    Hunter: "/icons/general/jobs/hunter.png",
    Merchant: "/icons/general/jobs/merchant.png",
    Scholar: "/icons/general/jobs/scholar.png",
    Thief: "/icons/general/jobs/thief.png",
    Warrior: "/icons/general/jobs/warrior.png",
    Runemaster: "",
    Sorcerer: "",
    Starseer: "",
    Warmaster: "",
    Armsmaster: "",
    Arcanist: "",
    Conjurer: "",
    Inventor: "",
  }

  switch (game) {
    case "ot1":
      jobInfo.Runemaster = "/icons/general/jobs/runelord.png"
      jobInfo.Sorcerer = "/icons/general/jobs/sorcerer.png"
      jobInfo.Starseer = "/icons/general/jobs/starseer.png"
      jobInfo.Warmaster = "/icons/general/jobs/warmaster.png"
      break
    case "ot2":
      jobInfo.Armsmaster = "/icons/octopath_traveler_2/jobs/armsmaster.png"
      jobInfo.Arcanist = "/icons/octopath_traveler_2/jobs/arcanist.png"
      jobInfo.Conjurer = "/icons/octopath_traveler_2/jobs/conjurer.png"
      jobInfo.Inventor = "/icons/octopath_traveler_2/jobs/inventor.png"
  }

  return (
    <div className='grid grid-cols-6 gap-2 justify-center'>
      {
        Object.keys(jobInfo).map((jobName, key) => {
          if (jobName == traveler.primary_job) {
            return
          }

          const jobKey: keyof typeof jobInfo = jobName as keyof typeof jobInfo
          if (!jobInfo[jobKey]) {
            return
          }

          const active = jobName == traveler.secondary_job
          return (
            <JobIcon
              key={key}
              game={game}
              travelerName={traveler.name}
              src={jobInfo[jobKey]}
              value={jobName}
              width={45}
              height={45}
              active={active}
            />
          )
        })
      }
    </div>
  )
}
