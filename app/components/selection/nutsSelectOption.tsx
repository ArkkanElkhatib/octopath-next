interface Props {
  label: string
  typeString: string
  stat: string
}

export default function NutsSelectOption({ label, typeString, stat }: Props) {
  const MIN = 0
  const MAX = 99

  return (
    <div>
      <div className="flex whitespace-pre w-full gap-5 text-md">
        <span className="w-3/5">{label.padEnd(18) + typeString.padEnd(7)} : </span>
        <div className="flex gap-3">
          <input
            type="number"
            min={MIN}
            max={MAX}
            defaultValue={0}
            className="w-[5ch] bg-zinc-700 pl-2 rounded-md"
          />
          <input
            type="number"
            min={MIN}
            max={MAX}
            defaultValue={0}
            className="w-[5ch] bg-zinc-700 pl-2 rounded-md"
          />
          <input
            type="number"
            min={MIN}
            max={MAX}
            defaultValue={0}
            className="w-[5ch] bg-zinc-700 pl-2 rounded-md"
          />
        </div>
      </div>
    </div>
  )
}
