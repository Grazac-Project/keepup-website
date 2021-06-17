import Link from "next/link"

const HowCard = ({ content }) => {
  return (
    <div
      className="how md:max-w-sm w-full rounded-3xl flex flex-col justify-between text-center p-8"
      // style={{ height: isTab || isMobile ? "19.5rem" : null }}
    >
      {/* <div className="p-3 bg-white shadow-lg rounded w-max">{content.icon()}</div> */}

      <div className="flex justify-center mb-6 relative">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="35" r="35" fill="#F58726" fill-opacity="0.1" />
        </svg>
        <span className="font-primary text-2xl font-bold text-gray-dark flex absolute">{content.step}</span>
      </div>

      <h2 className="font-primary text-2xl font-bold text-gray-dark">{content.title}</h2>
      <p className="text-gray-light font-tertiary leading-loose py-6">{content.main}</p>

      <Link href="/d">
        <span className="text-primary font-bold text-sm font-primary hover:underline cursor-pointer ease-in duration-150">
          Learn More
        </span>
      </Link>

      <style jsx>{`
        .how {
          box-shadow: 0px 4px 14px 2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  )
}

export default HowCard
