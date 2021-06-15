import { Fragment, useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Button from "./Button"
import { DropDownArrow, Laundry, House, Food } from "../icons"
import { useDevice } from "../hooks/useDevice"
import styles from "../styles/ham"
import Accordion from "./Accordion"

const services = [
  {
    question: "Services",
    answer: () => (
      <ul>
        <li>
          <Link href="/laundry">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white shadow-lg rounded w-max" style={{ transform: "scale(0.75)" }}>
                <Laundry />
              </div>
              <h4 className="font-tertiary text-base">Laundry</h4>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/cleaning">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white shadow-lg rounded w-max" style={{ transform: "scale(0.75)" }}>
                <House />
              </div>
              <h4 className="font-tertiary text-base">House Cleaning</h4>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/food">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white shadow-lg rounded w-max" style={{ transform: "scale(0.75)" }}>
                <Food />
              </div>
              <h4 className="font-tertiary text-base">Food Delivery</h4>
            </div>
          </Link>
        </li>
      </ul>
    ),
  },
]

const Navbar = () => {
  const { isTabPort, isMobile } = useDevice()
  const [fixed, setFixed] = useState(false)
  const [checked, setChecked] = useState(false)
  const nav = useRef(null)

  useEffect(() => {
    if (nav.current && window.pageYOffset > nav.current.offsetTop) setFixed(true)
    else setFixed(false)

    window.addEventListener("scroll", () => {
      if (nav.current && window.pageYOffset > nav.current.offsetTop) setFixed(true)
      else setFixed(false)
    })
  }, [])

  return (
    <div>
      <div
        className={`fixed w-full top-0 left-0 z-50 rounded-sm ease-in duration-150 ${fixed && `shadow-lg bg-white`} ${
          checked && "bg-pink nav-bg"
        }`}
        ref={nav}
      >
        <div className="max-w-xl mx-auto sm:px-12 pb-6 sm:py-4 p-8">
          {!isTabPort ? (
            <div className="flex justify-between items-center bg-transparent">
              <div className="flex items-center">
                <Link href="/" className="relative">
                  <Image src="/keepup.svg" alt="logo" height="30" width="115" />
                </Link>

                <ul className="flex items-center list-none ml-24 text-gray-100 text-base font-secondary">
                  {/* <li className="mr-4 hover:underline active:underline">
                    <Link href="/about">About</Link>
                  </li> */}

                  <li>
                    <Accordion
                      className="hover:underline mr-2 active:underline cursor-pointer flex items-center"
                      questionsAnswers={services}
                      nav={true}
                    >
                      <Link>Services</Link>
                    </Accordion>
                  </li>

                  {/* <DropDownArrow className="block mt-1" /> */}
                </ul>
              </div>

              <Button className="flex items-center">Get Early Access</Button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="relative">
                <Image src="/keepup.svg" alt="logo" height="30" width="115" />
              </div>

              <nav role="navigation">
                <div id="menuToggle">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setChecked(e.target.checked)
                    }}
                  />

                  <span className="span-1"></span>
                  <span className="span-2"></span>
                  <span className="span-3"></span>

                  <ul id="menu" className="bg-pink text-gray-100 text-base font-primary">
                    {/* <li className="hover:underline active:underline font-semibold text-lg">
                      <Link href="/about">About</Link>
                    </li> */}

                    <Accordion questionsAnswers={services} nav={true} />

                    <li className="mt-6">
                      <Button>Get Early Access</Button>
                    </li>
                  </ul>
                </div>
              </nav>

              <style jsx>{styles}</style>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
