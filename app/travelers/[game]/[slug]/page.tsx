'use client'

import MenuBar from "@/app/components/menubar/menuBar"
import MenuButton from "@/app/components/menubar/menuButton"
import HeroImage from "@/app/components/heroImage"
import { IRootState } from "@/lib/stores"
import { Traveler } from "@/types/Traveler"

import { Suspense, useRef, useState } from "react"
import { notFound, useParams } from "next/navigation"
import { useSelector } from "react-redux"
import Link from "next/link"
import TravelerInfoDisplay from "@/app/components/travelerInfoDisplay"
import WeaponSelect from "@/app/components/selection/weaponSelect"
import SupportSkillSelect from "@/app/components/selection/supportSkillSelect"
import ArmorSelect from "@/app/components/selection/armorSelect"
import JobSelect from "@/app/components/selection/jobSelect"
import RosterSelect from "@/app/components/selection/rosterSelect"
import StatsPanel from "@/app/components/selection/statsPanel"
import NutsSelect from "@/app/components/selection/nutsSelect"

export default function GameTravelers() {
	const { game, slug } = useParams<{ game: string, slug: string }>()
	const [infoState, setInfoState] = useState("roster")

	const infoRef = useRef<HTMLSelectElement>(null)

	const handleInfoSelectChange = () => {
		if (infoRef.current) {
			setInfoState(infoRef.current.value)
		}
	}

	var travelers: Traveler[] = []
	const travelersStore = useSelector((store: IRootState) => store.travelers)
	switch (game) {
		case "ot1":
			travelers = travelersStore.ot1Travelers
			break;
		case "ot2":
			travelers = travelersStore.ot2Travelers
			break;
		default:
			return notFound()
	}

	const index: number = travelers.findIndex((traveler) => {
		return traveler.slug == slug;
	})

	if (index < 0) {
		return notFound()
	}
	const traveler: Traveler = travelers[index]

	return (
		<main>
			<Suspense fallback={<p>Loading Traveler...</p>}>
				{traveler.full_image &&
					<HeroImage src={traveler.full_image} alt={traveler.name} />
				}
				<div className="w-screen">
					<MenuBar>
						<MenuButton>
							<Link href={`/travelers/${game}`} className="w-full h-full p-3">
								<img src="/back.svg" alt="back" />
							</Link>
						</MenuButton>
					</MenuBar>
					<TravelerInfoDisplay>
						<h3 className="text-center text-2xl">{traveler.name}</h3>
						<select
							ref={infoRef}
							className="bg-zinc-700 w-[18ch] text-lg mb-3 py-1 outline-none border border-transparent focus:border-amber-600 rounded-md"
							onChange={handleInfoSelectChange}
						>
							<option value="roster">Roster</option>
							<option value="jobs">Jobs</option>
							<option value="weapons">Weapons</option>
							<option value="armor">Armor</option>
							<option value="support skills">Support Skills</option>
							<option value="stats">Stats (WIP)</option>
							<option value="nuts">Nuts (WIP)</option>
						</select>

						{infoState == "jobs" &&
							<JobSelect game={game} traveler={traveler} />
						}
						{infoState == "weapons" &&
							<WeaponSelect game={game} traveler={traveler} />
						}
						{infoState == "armor" &&
							<ArmorSelect traveler={traveler} />
						}
						{infoState == "support skills" &&
							<SupportSkillSelect traveler={traveler} />
						}
						{infoState == "roster" &&
							<RosterSelect travelers={travelers} />
						}
						{infoState == "stats" &&
							<StatsPanel travelers={travelers} />
						}
						{infoState == "nuts" &&
							<NutsSelect travelers={travelers} />
						}
					</TravelerInfoDisplay>
				</div >
			</Suspense>
		</main>
	)
}
