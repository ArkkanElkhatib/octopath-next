import { Traveler } from "@/types/Traveler"
import NutsSelectOption from "./nutsSelectOption"

interface Props {
  travelers: Traveler[]
}

export default function NutsSelect({ travelers }: Props) {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex whitespace-pre w-full gap-5 text-md">
        <span className="w-3/5"></span>
        <div className="flex gap-3 text-left pl-2">
          <span className="w-[5ch]">L</span>
          <span className="w-[5ch]">M</span>
          <span className="w-[5ch]">H</span>
        </div>
      </div>
      <NutsSelectOption label="Nourishing Nut" typeString="(HP)" stat="hp" />
      <NutsSelectOption label="Invigorating Nut" typeString="(SP)" stat="sp" />
      <NutsSelectOption label="Fortifying Nut" typeString="(Patk)" stat="patk" />
      <NutsSelectOption label="Magic Nut" typeString="(EAtk)" stat="eatk" />
      <NutsSelectOption label="Tough Nut" typeString="(PDef)" stat="pdef" />
      <NutsSelectOption label="Resistant Nut" typeString="(EDef)" stat="edef" />
      <NutsSelectOption label="Sharp Nut" typeString="(Acc)" stat="accuracy" />
      <NutsSelectOption label="Slippery Nut" typeString="(Spd)" stat="speed" />
      <NutsSelectOption label="Critical Nut" typeString="(Crit)" stat="critical" />
      <NutsSelectOption label="Light Nut" typeString="(Eva)" stat="evasion" />
    </div>
  )
}
