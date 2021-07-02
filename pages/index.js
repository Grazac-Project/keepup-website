import Head from "next/head"
import ServicesCard from "../components/ServicesCard"
import Hero from "../layouts/Hero"
import { House, Laundry, Food, Semicolon } from "../icons"
import Footer from "../components/Footer"
import Accordion from "../components/Accordion"
import FeedbackCard from "../components/FeedbackCard"
import styles from "../styles/ham"

//carousel
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import PaycheckCard from "../components/PaycheckCard"

const services = [
  {
    icon: Laundry,
    title: "Laundry",
    href: "/laundry",
    main: `We pickup, clean and deliver your laundry meticulously to your doorstep every month.`,
  },
  {
    icon: House,
    title: "House Cleaning",
    href: "/cleaning",
    main: `We give your home thorough and personalized attention with cleaning done your way and cost next to nothing.`,
  },
  {
    icon: Food,
    title: "Raw Food Delivery",
    href: "/food",
    main: `Get organic quality food items delivered straight to your doorstep at no extra cost.`,
  },
]

const questionsAnswers = [
  {
    question: "What is Keep Up?",
    answer: () => (
      <div>
        Digital Solution to help you manage your housework.
        <br /> Keep-Up was built for ultimate comfort, time redeeming and maximum flexibility. We believe your weekends
        weren't made for housework.
        <br />
        <br /> Get crisp laundry, unique house-cleaning, and fresh food items delivered straight to your doorstep on a
        budget when you subscribe to our platform.
      </div>
    ),
  },
  {
    question: "What Keep-Up does for you?",
    answer: () => (
      <div>
        We offer three major services.
        <br />
        <br />
        Laundry - KeepUp allows you to put all your laundry work on us. Your clothes are picked up from the door,
        expertly cleaned, and returned in 48 hours ready to wear.
        <br />
        <br />
        Housecleaning - KeepUp helps reduce your stress level by giving your home surface and deep cleaning with
        prioritized and personalized attention.
        <br />
        <br />
        Raw-Food Delivery - KeepUp delivers fresh food items to your doorstep at no extra cost while you enjoy the best
        part of your weekends.
      </div>
    ),
  },
  {
    question: "How Keep-Up works?",
    answer: () => (
      <div>
        When you sign up on Keep-Up, you subscribe monthly to any/all of our service plans that meet your needs. You can
        schedule each service plan just as you want it and we deliver to you within our turn-around time. Track, pause,
        modify, edit or cancel your plans and schedules at will.
      </div>
    ),
  },
  {
    question: "Who are Keep-Up Home Managers?",
    answer: () => (
      <div>
        Keep-Up Home Managers are our trained, responsible and qualified staff. They help you access the services, treat
        your requests as tasks and ensure it’s delivered perfectly, giving you what you truly want.
        <br />
        <br />
        They're the human side of Keep-Up: cautiously screened individuals (we run full personal investigations on all
        <strong> home managers</strong>).
        <br />
        <br />
        Our home managers fit a profile. They're conscientious, responsive, capable and cordial. At the point when you sign
        up on Keep-Up, you see a profile of your home manager, and you can get an impression of them before they begin
        taking care of your tasks.
      </div>
    ),
  },
]

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

const Home = () => {
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
    <div className="">
      <Head>
        <title>Keep up</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        ></link>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Hero />

        <div className="my-16 sm:my-32 max-w-xl mx-auto px-5">
          <h1 className="text-2xl sm:text-4xl font-primary font-bold mb-10 text-head">Our Services</h1>
          <div
            className={`lock flex space-y-8 gap-8 sm:gap-0 sm:space-y-0 lg:justify-between flex-wrap md:flex-nowrap`}
          >
            {services.map((item) => (
              <ServicesCard content={item} />
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

        <div className="max-w-md mx-auto p-8" id='faqs'>
          <h1 className="faq__title text-2xl sm:text-4xl font-primary font-bold">Frequently Asked Questions</h1>

          <Accordion questionsAnswers={questionsAnswers} />
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

export default Home
