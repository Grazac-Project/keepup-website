import Link from "next/link"
import { useDevice } from "../hooks/useDevice"

const ServicesCard = ({ content }) => {
  const { isTab, isMobile } = useDevice()

  return (
    <div
      className="bg-pink h-80 service max-w-sm rounded-lg flex flex-col justify-between p-8"
      // style={{ height: isTab || isMobile ? "19.5rem" : null }}
    >
      <div className="p-3 bg-white shadow-lg rounded w-max">{content.icon()}</div>

      <h2 className="font-primary text-2xl font-bold text-gray-dark">{content.title}</h2>
      <p className="text-gray-light font-tertiary leading-loose">{content.main}</p>

      <Link href="/d">
        <span className="text-primary font-bold text-sm font-primary hover:underline cursor-pointer ease-in duration-150">
          View More
        </span>
      </Link>

      <style jsx>{`
        .service {
          background-image: url("/bg.svg");
          background-size: cover;
        }
      `}</style>
    </div>
  )
}

export default ServicesCard
