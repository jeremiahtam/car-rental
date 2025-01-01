import React, { useState } from "react";
import BottomFooter from "../components/BottomFooter";
import MiddleFooter from "../components/MiddleFooter";
import TopFooter from "../components/TopFooter";
import PageHeading from "../components/PageHeading";
import Header from "../components/Header";
import { contactUsPageBreadcrumbsArray } from "../data/breadcrumbsArrays";
import CarBrands from "../components/CarBrands";
import SidebarNav from "../components/SidebarNav";

function Contact() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const handleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  return (
    <div>
      <SidebarNav handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <Header handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <PageHeading
        breadcrumbsArray={contactUsPageBreadcrumbsArray}
        title="Contact Us"
      />
      <div className="px-4 lg:px-0 mb-5">
        <div className="container mx-auto flex flex-col md:flex-row gap-4 md:gap-24">
          <div className="md:w-1/3 space-y-3">
            <div className="text-5xl font-extrabold text-center md:text-left">
              You have many wasy of reaching us
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Address</div>
              <div className="text-gray-700">
                11350 McCormick Rd, EP III, Suite 200, Hunt Valley, MD 21031
              </div>
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Phone numbers</div>
              <div className="text-gray-700">+21687879736 and +21687879736</div>
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Support</div>
              <div className="text-gray-700">info@car.com</div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="">
              <form action="#" className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-3 me-2 mb-2 mt-8 dark:focus:ring-yellow-900"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CarBrands />
      <TopFooter />
      <MiddleFooter />
      <BottomFooter />
    </div>
  );
}

export default Contact;
