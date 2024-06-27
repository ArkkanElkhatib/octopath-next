interface Props {
  label: string
  value: string
  toggle: () => void
}

export default function ToggleSelect({ label, value, toggle }: Props) {
  return (
    <div className='flex gap-2'>
      <span className='whitespace-pre'>{label.padEnd(12)}:</span>
      <div className='w-full flex justify-end'>
        <button className='bg-zinc-700 w-full max-w-[25ch] 
          text-left pl-2 rounded-md text-md'
          onClick={toggle}
        >
          {value}
        </button>
      </div>
    </div>
  )
}
