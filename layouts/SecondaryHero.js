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
          <div className="lg:w-7/12 md:w-7/12 w-full hero-content content">
            <h1
              className="text-gray-dark md:text-6xl text-4xl font-primary font-bold"
              style={{ lineHeight: `${isMobile ? "1.5" : "1.3"}` }}
            >
              {content.header()}
            </h1>

            <p className="leading-loose sm:w-5/6 font-secondary text-lg text-gray-light my-5">{content.main()}</p>

            <div className="flex">
              <div>
                <Image className="cursor-pointer" src="/appleStore.svg" width={150} height={70} />
              </div>
              <div className="ml-4">
                <Image className="cursor-pointer ml-8" src="/googlePlay.svg" width={160} height={70} />
              </div>
            </div>
          </div>

          {!isTabPort && (
            <div className="flex gap-8">
              <div className="iphone1">
                <Image src={content.image()} width={285} height={549} />
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

        .content {
          animation: moveInLeft 1.5s ease-out;
        }

        @keyframes moveInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }

          80% {
            transform: translateX(10px);
          }

          100% {
            opacity: 1;
            transform: translate(0);
          }
        }

        .iphone1 {
          animation: moveInRight 1.5s ease-out;
        }

        @keyframes moveInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }

          80% {
            transform: translateX(-10px);
          }

          100% {
            opacity: 1;
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  )
}

export default SecondaryHero
