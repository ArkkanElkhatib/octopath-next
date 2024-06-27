import Link from "next/link";
import MenuBar from "../components/menubar/menuBar";
import MenuButton from "../components/menubar/menuButton"

export default function Travelers() {
  return (
    <div>
      <MenuBar>
        <MenuButton>
          <Link href={'/'} className="w-full h-full p-3">
            <img src="/back.svg" alt="back" />
          </Link>
        </MenuButton>
      </MenuBar>
      <main className='flex flex-col justify-center items-center w-screen h-[70vh] gap-5'>
        <h2 className='text-2xl'>
          Choose a Game
        </h2>
        <div className='flex flex-wrap justify-center items-center gap-3'>
          <Link href='/travelers/ot1' className='bg-amber-600 px-4 py-2 rounded-lg text-lg'>
            <span>Octopath Traveler 1</span>
          </Link>
          <Link href='/travelers/ot2' className='bg-amber-600 px-4 py-2 rounded-lg text-lg'>
            <span>Octopath Traveler 2</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
