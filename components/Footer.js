import Link from "next/link"
import { PaperPlane } from "../icons"
import { Facebook, IG, Twitter, Linkedin } from "../icons"

const Footer = () => {
  return (
    <div className="sm:mt-72 mt-20">
      <div className="max-w-xl mx-auto px-8 flex justify-between flex-wrap">
        <div className="sm:mb-16 mb-10 md:w-2/6 w-full">
          <h3 className="font-bold font-primary text-gray-dark text-xl sm:mb-8 mb-6">
            Learn more about our services, discounts and special offers.
          </h3>

          <form className="flex w-full">
            <input
              type="text"
              placeholder="Your Email Address"
              className={`border-2 border-gray-50 py-2 px-4 font-tertiary text-gray-100 sm:h-12 h-14 outline-none
								focus:border-primary ease-in duration-100 w-full`}
              style={{ borderRadius: "5px 0 0 5px" }}
            />
            <button
              type="submit"
              className="bg-primary p-2 px-6 flex items-center justify-center sm:h-12 h-14 border-0 outline-none"
              style={{ borderRadius: "0 5px 5px 0" }}
            >
              <PaperPlane />
            </button>
          </form>
        </div>

        <div className="sm:flex md:w-5/12 justify-between flex-wrap gap-8 w-full">
          <ul className="list-none mb-14">
            <li className="list-header">Company</li>
            <li className="list-item__2">
              <Link href="/">About Us</Link>
            </li>
          </ul>

          <ul className="list-none mb-14">
            <li className="list-header">Service</li>
            <li className="list-item">
              <Link href="/laundry">Laundry &amp; Dry Cleaning</Link>
            </li>
            <li className="list-item">
              <Link href="/cleaning">Office &amp; Home Cleaning</Link>
            </li>
            <li className="list-item__2">
              <Link href="/food">Food Delivery</Link>
            </li>
          </ul>

          <ul className="list-none mb-14">
            <li className="list-header">Resources</li>
            <li className="list-item__2">
              <a href="#faqs">FAQs</a>
            </li>
            {/* <li className="list-item">
              <Link href="/about">Blog</Link>
            </li> */}
            <li className="list-item">
              <a href="mailto:info@keepup.ng" target='_blank'>Contact Us</a>
            </li>
            <li className="list-item">
              <Link href="/">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
      </div>

      <span className="bg-gray-50 w-full block" style={{ height: 2 }}>
        &nbsp;
      </span>

      <div className="max-w-xl mx-auto">
        <div className="md:py-12 py-8 px-8 flex justify-between flex-col-reverse space-4 gap-4 sm:flex-row">
          <small className="font-primary text-xs text-gray-100 mt-4 sm:mt-0">{`${new Date().getFullYear()} Keepup Lifestyle Inc. All Rights Reserved.`}</small>

          <div className="flex space-x-4 gap-4">
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Linkedin />
            </a>
            <a href="#">
              <IG />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
