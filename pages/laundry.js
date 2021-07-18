import Head from "next/head"
import SecondaryHero from "../layouts/SecondaryHero"

import { House, Food, Semicolon } from "../icons"
import Footer from "../components/Footer"
import FeedbackCard from "../components/FeedbackCard"
import styles from "../styles/ham"



//carousel
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import PaycheckCard from "../components/PaycheckCard"
import HowCard from "../components/HowCard"

const hero = {
  header: () => (
    <>
      Spend your time wisely. All your <span style={{ color: "#F58726" }}>Laundry</span> on us.
    </>
  ),
  main: () => <>Your clothes are picked up from the door, expertly cleaned, and returned in 72 hours ready to wear.</>,
  image: () => "/iphone2.png",
}

const feedback = [
  {
    profile: "/man.png",
    name: "Cody Fischer",
    main: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`,
    work: "CEO, Parkview Int. Ltd.",
    rating: [true, true, true, false, false],
  },
  {
    profile: "/man.png",
    name: "Cody Fischer",
    main: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`,
    work: "CEO, Parkview Int. Ltd.",
    rating: [true, true, true, false, false],
  },
  {
    profile: "/man.png",
    name: "Cody Fischer",
    main: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`,
    work: "CEO, Parkview Int. Ltd.",
    rating: [true, true, true, true, false],
  },
  {
    profile: "/man.png",
    name: "Cody Fischer",
    main: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`,
    work: "CEO, Parkview Int. Ltd.",
    rating: [true, true, true, false, false],
  },
  {
    profile: "/man.png",
    name: "Cody Fischer",
    main: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`,
    work: "CEO, Parkview Int. Ltd.",
    rating: [true, true, true, false, false],
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Create an Account",
    main: "Download and install KeepUp App. Sign up and create an account.",
  },
  {
    step: "02",
    title: "Confirm your account",
    main: "Check your email to confirm your account and sign in with your login details.",
  },
  {
    step: "03",
    title: "Pick your choice",
    main: "Choose the service(s) you want from our price list, fill in your location, select your pick-up date and subscribe to your preferred plan.",
  },
  {
    step: "04",
    title: "Delivery",
    main: "Our staff will meet with you on your pick-up date to pick your items, clean your clothes to satisfaction and return them in 72 hours ready to wear upon delivery.",
  },
]

const Laundry = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  return (
    <div>
      <Head>
        <title>Laundry</title>
        <meta name="description" content="Spend your time wisely. All your Laundry on us." />
        <link rel="icon" href="/fav.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        ></link>
      </Head>

      <div>
        <SecondaryHero content={hero} />

        <div className="my-16 sm:my-32 max-w-xl mx-auto px-5">
          <h1 className="faq__title text-2xl sm:text-4xl font-primary font-bold text-center mb-10">How It Works</h1>

          <div className="lock flex space-y-8 sm:space-x-8  sm:space-y-0  gap-8 sm:gap-0 lg:justify-between flex-wrap md:flex-nowrap">
            {howItWorks.map((item) => (
              <HowCard content={item} />
            ))}
          </div>
        </div>

        <div className="max-w-xl mx-auto p-8 relative sm:mb-16 mb-4">
          <h1 className="faq__title text-2xl sm:text-4xl font-primary font-bold text-center">Customer’s Feedback</h1>

          <div className="flex justify-center space-x-4 gap-4 mt-10 sm:mt-20">
            <Semicolon />
            <Semicolon />
          </div>

          <Carousel
            arrows={false}
            showDots={true}
            renderDotsOutside={true}
            responsive={responsive}
            className="py-10"
            infinite={true}
          >
            {feedback.map((item) => (
              <FeedbackCard content={item} />
            ))}
          </Carousel>
        </div>

        <div className="max-w-md mx-auto p-8 sm:my-40">
          <PaycheckCard />
        </div>
      </div>
      <a href="https://wa.link/isn7ab" className="whatsapp_float" target="_blank">
        {" "}
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Laundry
