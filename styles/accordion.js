import css from "styled-jsx/css"

export default css`
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible */
  /* Remove the focus indicator on mouse-focus for browsers that do support :focus-visible */

  button:focus:not(:focus-visible) {
    outline: 0;
  }

  button:focus-visible {
    outline: 2px dashed #f47c57;
    outline-offset: 0px;
  }

  #root {
    width: 100%;
  }

  .font-weight-bold {
    font-weight: 700;
  }

  .faq {
    width: 100%;
    /* padding-top: 30px;
    padding-bottom: 80px; */
  }

  .faq__title {
    margin: 0;
    padding-bottom: 4rem;
  }

  .faq__question {
    width: 100%;
  }

  .faq__question-button {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border: none;
    background-color: transparent;
    padding: 0px;
    cursor: pointer;
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .faq__question-button::after {
    content: url("/icon-arrow-down.svg");
    margin-right: 17px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .faq__desc {
    margin-top: 0;
    margin-bottom: 0;
    padding-right: 1rem;
    height: 0;
    opacity: 0;
    overflow: hidden;
    -webkit-transition: all 200ms ease-out;
    transition: all 300ms ease-out;
  }

  .attribution {
    font-size: 11px;
    text-align: center;
    color: #e7e7e9;
    padding-top: 10px;
  }

  .attribution a {
    color: #af67e9;
  }

  .faq__desc.show-description {
    height: max-content;
    opacity: 1;
    margin-bottom: 15px;
  }

  /* Arrows */
  /* closed */
  .faq__question-button::after {
    -webkit-transition: -webkit-transform 300ms ease-out;
    transition: -webkit-transform 300ms ease-out;
    transition: transform 300ms ease-out;
    transition: transform 300ms ease-out, -webkit-transform 300ms ease-out;
  }

  /* open */
  .font-weight-bold::after {
    -webkit-transform: rotate(720deg);
    transform: rotate(720deg);
  }

  @media only screen and (max-width: 700px) {
  }
  /*# sourceMappingURL=main.css.map */
`
