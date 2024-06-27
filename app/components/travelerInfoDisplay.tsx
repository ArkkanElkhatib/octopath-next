import { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

export default function TravelerInfoDisplay({ children }: Props) {
  return (
    <div className='flex justify-center'>
      <div className='absolute bg-zinc-900 top-[50vh] w-[96vw] max-w-[500px] 
      rounded-t-xl min-h-[50vh] flex flex-col z-20 py-4 px-7 md:px-10 gap-2'>
        {children}
      </div>
    </div>
  )
}
