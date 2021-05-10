import Navbar from "../components/Navbar"
import Image from "next/image"
import { useDevice } from "../hooks/useDevice"
import Typed from "react-typed"

const services = [
  `<span style="color: #F58726;">Dry Cleaning.</span>`,
  `<span style="color: #007A7A;">House Cleaning.</span>`,
  `<span style="color: #000066;">Food Delivery</span>`,
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
              Let’s Give <br />
              Your Home Some
              <br />
              <Typed strings={services} typeSpeed={80} backSpeed={100} loop />{" "}
            </h1>

            <p className="leading-loose sm:w-2/3 font-secondary text-lg text-gray-light my-5">
              We take care of your <span className="text-gray-dark">chores</span>, so you can get more out of life. It’s
              what you’ve always dreamed of.
            </p>

            <div className="flex gap-2">
              <Image src="/googlePlay.svg" width={160} height={70} />
              <Image src="/appleStore.svg" width={150} height={70} />
            </div>
          </div>

          {!isTabPort && (
            <div className="flex gap-8">
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
      `}</style>
    </div>
  )
}

export default Hero
