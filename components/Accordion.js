import { useState } from "react"
import AccordionItem from "./AccordionItem"
import styles from "../styles/accordion"

const Accordion = ({ questionsAnswers, nav }) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : ""
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : ""
    const ariaExpanded = index === activeIndex ? "true" : "false"

    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        isNav={nav}
        onClick={() => {
          setActiveIndex(index)
          if (activeIndex === index) {
            console.log("heyyyy")
            setActiveIndex(-1)
          }
        }}
      />
    )
  })

  return (
    <div className="faq py-4 sm:py-12">
      <dl className="faq__list">{renderedQuestionsAnswers}</dl>

      <style jsx>{styles}</style>
    </div>
  )
}

export default Accordion
