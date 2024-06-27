import { Equipment, SupportSkill } from "@/types/Equipped"
import SelectOption from "./selectOption"
import { useRef, useState } from "react"

interface Props {
  title: string
  options: Equipment[] | SupportSkill[]
  equipped: Equipment | SupportSkill
  equipType: string
  toggle: () => void
}

export default function SelectionPane({ title, options, equipped, equipType, toggle }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [queryValue, setQueryValue] = useState("")

  const handleInputUpdate = () => {
    if (inputRef.current) {
      setQueryValue(inputRef.current.value.toLowerCase())
    }
  }

  return (
    <div className='flex w-98 justify-center'>
      <div onClick={toggle} className='fixed top-0 left-0 z-40 w-[101vw] h-screen bg-black/80 overflow-hidden'>
      </div >
      <div className='fixed w-[98%] max-w-[500px] top-[10vh] h-[80vh] bg-zinc-900 mx-auto rounded-2xl z-50 shadow-lg shadow-zinc-900/70 overflow-y-hidden'>
        <div className='sticky bg-zinc-900 top-0 z-50 h-24 py-2'>
          <div className='top-0 flex justify-between px-5 py-2'>
            <h5 className='text-3xl'>{title}</h5>
            <button className="h-8 w-8" onClick={toggle}>
              <img src='/close.svg' />
            </button>
          </div>
          <div id='weapon-query-container' className='flex h-8 bg-zinc-700 w-fit ml-4
              rounded-lg border-2 border-transparent focus-within:border-amber-600'>
            <img src='/search.svg' alt='search icon'
              className='h-7' />
            <input id={`${title.toLowerCase}-input`} type='text'
              className='bg-zinc-700 text-zinc-300 outline-none focus:outline-none text-lg rounded-md px-2'
              ref={inputRef}
              onChange={handleInputUpdate}
            />
          </div>
          <div className='h-3 bg-zinc-900 border-b border-b-zinc-300' />
        </div>
        <div id='options' className='flex flex-col w-full h-full overflow-y-scroll gap-3 pt-5 px-2 pb-[12vh]'>
          {
            options
              .filter((option) => (
                option.name.toLowerCase().includes(queryValue) || option.effect.toLowerCase().includes(queryValue))
              )
              .map((option, key) => {
                return (
                  <SelectOption
                    key={key}
                    equippable={option}
                    active={equipped.name == option.name}
                    equipType={equipType}
                  />
                )
              })
          }
        </div>
      </div>
    </div>
  )
}
