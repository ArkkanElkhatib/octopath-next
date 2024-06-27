import { ReactNode } from "react"

interface Props {
  active?: boolean,
  children?: ReactNode
}

export default function MenuButton({ active = false, children }: Props) {
  const borderColor: string = active ? "border-amber-600" : "border-zinc-600"
  return (
    <div className={`border ${borderColor} rounded-lg hover:opacity-60 h-16 w-16 flex justify-center items-center bg-zinc-800 shadow-lg`}>
      {children}
    </div>
  )
}
