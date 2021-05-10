import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "../icons"
import { useMediaQuery } from "react-responsive"

const FeedbackCard = ({ content }) => {
  const isTab = useMediaQuery({ query: "(max-width: 56.25em)" })

  return (
    <div className="feedback p-6 sm:p-7 relative mt-10">
      <div className="dp rounded-full">
        <Image src={content.profile} width={95} height={95} className="img" />
      </div>
      <div>
        <div className="border-b border-gray-50">
          <p className="text-gray-light font-tertiary sm:leading-loose leading-relaxed py-5 pt-10">{content.main}</p>
        </div>

        <div className="pt-4 flex justify-between gap-2 items-center">
          <div>
            <h4 className="font-primary text-gray-dark text-base font-bold">{content.name}</h4>
            <small className="text-gray-light text-xs font-tertiary">{content.work}</small>
          </div>

          <div className="flex gap-2">
            {content.rating.map((i) => (
              <Star filled={i} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .feedback {
          max-width: ${isTab ? "100%" : "25rem"};
          box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.05);
          border-radius: 20px;
        }
        .dp {
          position: absolute;
          top: -40px;
        }
        .img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  )
}

export default FeedbackCard
