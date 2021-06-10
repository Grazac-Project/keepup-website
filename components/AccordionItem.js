import styles from "../styles/accordion"

const AccordionItem = ({ showDescription, ariaExpanded, fontWeightBold, item, index, onClick, isNav }) => (
  <div className="faq__question" key={item.question}>
    <dt>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button ${fontWeightBold} font-primary text-base  text-gray-100 noSelect
        ${isNav && "font-semibold text-lg font-primary"}`}
        onClick={onClick}
      >
        {item.question}
      </button>
    </dt>
    <dd>
      <p
        id={`faq${index + 1}_desc`}
        data-qa="faq__desc"
        className={`faq__desc ${showDescription} text-sm leading-relaxed sm:text-base text-gray-100 font-primary ${
          isNav && "pl-4"
        }`}
      >
        {item.answer()}
      </p>
    </dd>
    <style jsx>{styles}</style>
  </div>
)

export default AccordionItem
