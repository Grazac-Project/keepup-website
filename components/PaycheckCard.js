import Image from "next/image"
import { useDevice } from "../hooks/useDevice"

const PaycheckCard = () => {
  const { isTabPort, isTab } = useDevice()

  return (
    <div className="flex justify-between relative">
      <div className="bg-primary sm:px-20 sm:py-16 p-10 rounded-3xl w-full">
        <div>{isTab && <Image src="/iphone3.png" width={285} height={549} />}</div>
        <h2 className="font-primary text-white sm:text-4xl text-2xl font-bold leading-snug sm:w-3/5 w-full py-2">
          Sign up for the cheapest option that saves you time and energy at home.
        </h2>

        <div className="flex gap-4 items-center">
          <Image src="/googlePlay2.svg" height={100} width={140} />
          <svg width="2" height="40" viewBox="0 0 2 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="2" height="40" transform="matrix(-1 0 0 1 2 0)" fill="white" fill-opacity="0.25" />
          </svg>
          <Image src="/appleStore2.svg" height={100} width={130} />
        </div>
      </div>

      <div className="phone">{!isTabPort && <Image src="/iphone3.png" width={285} height={549} />}</div>

      <style jsx>{`
        .phone {
          position: absolute;
          right: 6rem;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  )
}

export default PaycheckCard
