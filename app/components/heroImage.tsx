import Image from "next/image"

interface Props {
  src: string
  alt: string
}

export default function HeroImage({ src, alt }: Props) {
  return (
    <div>
      <div className="fixed flex w-[150vw] lg:w-[120vw] 2xl:w-screen justify-center 
      -top-[5vh] -left-[25vw] lg:-left-[10vw] 2xl:left-0">
        <div className="w-100 xl:w-[40%] justify-center -top-[5vh]">
          <Image
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            quality={100}
            style={{ objectFit: "cover" }}
            priority={true}
            placeholder="blur"
            blurDataURL={src}
            loading="eager"
          >
          </Image>
        </div>
      </div>
    </div>
  )
}
