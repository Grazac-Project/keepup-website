import Navbar from "../components/Navbar"
import Image from "next/image"
import { useDevice } from "../hooks/useDevice"

const SecondaryHero = ({ content }) => {
  const { isMobile, isTabPort } = useDevice()

  return (
    <div className="hero bg-hero">
      <div className="mx-auto py-8 md:px-14 px-8 max-w-xl">
        <Navbar />

        <div className="flex justify-between pt-28 sm:pt-40">
          <div className="lg:w-5/12 w-full">
            <h1
              className="text-gray-dark md:text-6xl text-4xl font-primary font-bold"
              style={{ lineHeight: `${isMobile ? "1.5" : "1.3"}` }}
            >
              {content.header()}
            </h1>

            <p className="leading-loose sm:w-5/6 font-secondary text-lg text-gray-light my-5">{content.main()}</p>

            <div className="flex gap-2">
              <Image src="/googlePlay.svg" width={160} height={70} />
              <Image src="/appleStore.svg" width={150} height={70} />
            </div>
          </div>

          {!isTabPort && (
            <div className="flex gap-8">
              <div className="">
                <Image src="/iphone1.png" width={285} height={549} />
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .hero {
          background-image: url("/bg2.svg");
          background-size: cover;
        }
      `}</style>
    </div>
  )
}

export default SecondaryHero
