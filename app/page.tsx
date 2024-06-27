import Link from "next/link";

export default function Home() {
  return (
    <div className='bg-darkest text-white w-screen h-screen overflow-hidden flex justify-center items-end pb-24 lg:pb-64'>
      <div className='sticky flex flex-col justify-center items-center gap-5 px-16 py-8 z-20 max-w-[95vw]
        bg-lessdark/10 backdrop-blur-[8px] rounded-3xl shadow-2xl text-center
        '>
        <h1 className='text-3xl md:text-4xl'>
          Octopath Team Builder
        </h1>
        <h2 className='text-md md:text-xl'>
          Plan Your Adventure
        </h2>
        <Link href={'/travelers'} className='text-xl md:text-2xl text-darkest bg-amber-600 px-8 py-3 rounded-2xl shadow-xl shadow-lessdark'>
          Try Now
        </Link>
      </div>
      <div className='fixed top-[5vh] bg-darkest md:right-2 h-[90vh] min-w-[800px] overflow-hidden z-10'>
        <img src="/images/full/octopath_traveler_1/cyrus.png" alt='cyrus albright reading a book' className='h-full overflow-hidden m-auto md:m-0' />
      </div>
    </div>
  )
}
