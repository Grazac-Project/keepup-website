import Navbar from "../components/Navbar"
import Image from "next/image"
import { useDevice } from "../hooks/useDevice"
import Typed from "react-typed"

const services = [
  `<span style="color: #F58726;">laundry </span>`,
  `<span style="color: #007A7A;">house cleaning</span>`,
  `<span style="color: #000066;">market runs</span>`,
]

const Hero = () => {
  const { isMobile, isTabPort } = useDevice()

  return (
    <div className="hero bg-pink">
      <div className="mx-auto py-8 md:px-14 px-8 max-w-xl">
        <Navbar />

        <div className="flex justify-between pt-28 sm:pt-40">
          <div className="lg:w-5/12 w-full">
            <h1
              className="text-gray-dark md:text-6xl text-4xl font-primary font-bold"
              style={{ lineHeight: `${isMobile ? "1.5" : "1.3"}` }}
            >
              Spend your time wisely. All your <br />
              <Typed strings={services} typeSpeed={80} backSpeed={100} loop /> <br /> on us
            </h1>

            <p className="leading-loose sm:w-2/3 font-secondary text-lg text-gray-light my-5">
              We handle your housework so you can live a more comfortable life and enjoy the life of your dreams.
            </p>

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
            <div className="flex space-x-10">
              <div className="flex self-start">
                <Image src="/iphone1.png" width={285} height={549} />
              </div>
              <div className="pt-16">
                <Image src="/iphone2.png" width={285} height={549} />
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .hero {
          background-image: url("/bg.svg");
          background-size: cover;
        }

        .pt-28 {
          padding-top: 7rem;
        }

        .@media (min-width: 640px) .sm\:pt-40 {
          padding-top: 10rem;
        }
      `}</style>
    </div>
  )
}

export default Hero
