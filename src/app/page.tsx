"use client";
import Image from "next/image";
import profilePic from "../../public/01.png"; // Replace with your image
// import Marquee from "react-fast-marquee";
import bannerPic from "../../public/02.png";
import bannerPic2 from "../../public/03.jpg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useState } from "react";
import { FaTwitter, FaDribbble, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
const faqData = [
  {
    question: "How do I get Quotation for my project?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How many landing page can I work with your project?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can I use your project for my clients?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Will growth products slow down my products?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <nav className="bg-gradient-to-r from-purple-50 to-purple-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="text-purple-600 text-3xl font-bold">G</div>
          </div>

          {/* Hamburger Menu for Small Devices */}
          <div className="lg:hidden">
            <button
              onClick={toggleDrawer}
              className="text-purple-600 hover:text-purple-800 text-2xl"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-6 bg-white border border-purple-300 rounded-full px-6 py-2 shadow-md">
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition"
                >
                  Portfolios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex space-x-4">
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800 transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800 transition text-xl"
            >
              <FaDribbble />
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800 transition text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800 transition text-xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={closeDrawer}
        ></div>

        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <button
              onClick={toggleDrawer}
              className="text-purple-600 hover:text-purple-800 text-2xl mb-4"
            >
              <HiX />
            </button>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  Portfolios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-purple-600 hover:text-purple-800 transition text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-purple-800 transition text-xl"
              >
                <FaDribbble />
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-purple-800 transition text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-purple-800 transition text-xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-purple-50 to-purple-100 p-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="place-items-center lg:col-span-5">
            <div className="md:w-[437px] md:h-[475px] h-[253px] w-[233px]  rounded-full overflow-hidden shadow-lg">
              <Image
                src={profilePic}
                alt="Profile Picture"
                width={437}
                height={475}
                className="object-cover "
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left lg:col-span-7">
            <div className="flex items-center justify-center  bg-gradient-to-r from-purple-50 to-purple-100">
              <div className="text-center lg:text-left max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-[#2a1454]">
                  Hi, I am <span>Tayler</span>.
                </h1>
                <h2 className="text-[35px] md:text-[38px] lg:text-[50px] xl:text-[55px] 2xl:text-[65px] font-extrabold bg-gradient-to-r from-[#7749d3] via-[#412379] to-[#2a1454] bg-clip-text text-transparent mt-2 leading-tight">
                  A creative designer <br /> based in London
                </h2>

                <p className="text-lg text-gray-600 mt-4">
                  Explored the principles of typeface design and its impact on
                  visual communication.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start mt-6 gap-4">
              <div className="flex items-center justify-center  bg-gradient-to-r from-purple-50 to-purple-100">
                <button className="px-8 py-4 text-purple-600 font-bold text-lg border-2 border-purple-500 rounded-full hover:bg-purple-100 transition duration-200 focus:outline-none">
                  Got a project?
                </button>
              </div>

              <div className="flex items-center justify-center  bg-gradient-to-r from-purple-50 to-purple-100">
                <button className="px-8 py-4 text-white font-bold text-lg bg-gradient-to-r from-[#8750f7] to-[#2a1454] rounded-full shadow-lg hover:opacity-90 focus:outline-none">
                  Let&apos;s Talk!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 w-full overflow-hidden">
        <div className="py-10 transform -rotate-2">
        <div className="flex items-center space-x-8 text-purple-700 font-bold text-[20px] ">
              <span>DESIGN</span>
              <span className="text-xl animate-spin">✶</span>
              <span>DEVELOPMENT</span>
              <span className="text-xl animate-spin">✶</span>
              <span>WEBFLOW</span>
              <span className="text-xl animate-spin">✶</span>
              <span>GRAPHIC</span>
              <span className="text-xl animate-spin">✶</span>
              <span>GRAPHIC</span>
              <span className="text-xl animate-spin">✶</span>
              <span>GRAPHIC</span>
              <span className="text-xl animate-spin">✶</span>
              <span>GRAPHIC</span>
              <span className="text-xl animate-spin">✶</span>
              <span>GRAPHIC</span>
              <span className="text-xl animate-spin">✶</span>
            </div>
        </div>
      </div>
      <section className="text-center py-12 bg-gradient-to-b from-purple-50 to-white">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7749d3] via-[#412379] to-[#2a1454]">
          My Recent Works
        </h2>

        <p className="text-gray-600 text-lg mt-2 tracking-wide">
          RECENT PROJECTS
        </p>
      </section>
      <ParallaxProvider>
        <div className="bg-purple-50 border-[2px] border-[#d9d9d9] p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Text Content */}
            <Parallax speed={-5}>
              <div>
                <h3 className="text-sm text-purple-600 font-bold uppercase">
                  UI/UX
                </h3>
                <h1 className="text-2xl lg:text-3xl font-bold text-purple-800 my-3">
                  Deloitte
                </h1>
                <p className="text-gray-600 mb-6">
                  Project was about precision and information. That’s all. Our
                  design team helps clients achieve their marketing targets and
                  branding that appeals to a website.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-500">✓</span> We provide
                    the most reasonable.
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-500">✓</span> Finish Work
                    Before Deadline.
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-500">✓</span> The
                    certified materials in a timely.
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-500">✓</span> We provide
                    24/7 on-time services.
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-lg">
                    Branding
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-lg">
                    Graphic Design
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-lg">
                    User Stories
                  </span>
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="text-purple-600 hover:underline text-sm flex items-center"
                  >
                    View Live Project <span className="ml-2">↗</span>
                  </a>
                </div>
              </div>
            </Parallax>

            {/* Image Section */}
            <Parallax speed={10}>
              <div className="flex justify-center">
                <div className="w-[300px] lg:w-[400px] h-[200px] lg:h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={bannerPic} // Replace with your image path
                    alt="Project Screenshot"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </ParallaxProvider>
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800">Services</h2>
            <p className="text-sm text-gray-500 mt-2 uppercase tracking-wide">
              Offered Services
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="text-purple-700 text-3xl">
                  <i className="fas fa-pencil-alt"></i>{" "}
                  {/* Replace with proper icon */}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-800">
                    Web Design
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="text-purple-700 text-3xl">
                  <i className="fas fa-cube"></i>{" "}
                  {/* Replace with proper icon */}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-800">
                    Product Design
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="text-purple-700 text-3xl">
                  <i className="fas fa-user-cog"></i>{" "}
                  {/* Replace with proper icon */}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-800">
                    UI/UX Design
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="text-purple-700 text-3xl">
                  <i className="fas fa-video"></i>{" "}
                  {/* Replace with proper icon */}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-800">
                    Motion Graphic
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Stat 1 */}
            <div>
              <h3 className="text-5xl font-bold text-purple-800">14</h3>
              <p className="text-sm text-purple-500 mt-2">
                Years of Experience
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <h3 className="text-5xl font-bold text-purple-800">50+</h3>
              <p className="text-sm text-purple-500 mt-2">Projects Completed</p>
            </div>

            {/* Stat 3 */}
            <div>
              <h3 className="text-5xl font-bold text-purple-800">1.5K</h3>
              <p className="text-sm text-purple-500 mt-2">Happy Clients</p>
            </div>

            {/* Stat 4 */}
            <div>
              <h3 className="text-5xl font-bold text-purple-800">14</h3>
              <p className="text-sm text-purple-500 mt-2">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800">My Resume</h2>
          </div>

          {/* Education and Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education Section */}
            <div className="max-w-4xl mx-auto px-6">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-purple-800">
                  Education
                </h2>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute top-0 left-4 w-1 bg-purple-300 h-full"></div>

                {/* Timeline Items */}
                <div className="space-y-8">
                  {/* Item 1 */}
                  <div className="relative flex items-start space-x-6">
                    {/* Dot */}
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      🎓
                    </div>
                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-800">
                        2023 - 2024
                      </h4>
                      <p className="font-bold text-gray-800">
                        Fine Arts in Graphic
                      </p>
                      <p className="text-sm text-gray-500">
                        Harvard University
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative flex items-start space-x-6">
                    {/* Dot */}
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      🎓
                    </div>
                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-800">
                        2023 - 2024
                      </h4>
                      <p className="font-bold text-gray-800">
                        Adobe Creative Suite
                      </p>
                      <p className="text-sm text-gray-500">
                        Harvard University
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="relative flex items-start space-x-6">
                    {/* Dot */}
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      🎓
                    </div>
                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-800">
                        2023 - 2024
                      </h4>
                      <p className="font-bold text-gray-800">Design Bootcamp</p>
                      <p className="text-sm text-gray-500">
                        Harvard University
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="relative flex items-start space-x-6">
                    {/* Dot */}
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      🎓
                    </div>
                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-800">
                        2023 - 2024
                      </h4>
                      <p className="font-bold text-gray-800">User Experience</p>
                      <p className="text-sm text-gray-500">
                        Harvard University
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="max-w-4xl mx-auto px-6">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-purple-800">
                  Education
                </h2>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute top-0 left-4 w-1 bg-purple-300 h-full"></div>

                {/* Timeline Items */}
                <div className="space-y-8">
                  {/* Item 1 */}
                  <div className="relative flex items-start space-x-6">
                    {/* Dot */}
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      🎓
                    </div>
                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-800">
                        2023 - 2024
                      </h4>
                      <p className="font-bold text-gray-800">
                        Fine Arts in Graphic
                      </p>
                      <p className="text-sm text-gray-500">
                        Harvard University
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative flex items-start space-x-6">
                    {/* Dot */}
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      🎓
                    </div>
                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-800">
                        2023 - 2024
                      </h4>
                      <p className="font-bold text-gray-800">
                        Adobe Creative Suite
                      </p>
                      <p className="text-sm text-gray-500">
                        Harvard University
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="relative flex items-start space-x-6">
                    {/* Dot */}
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      🎓
                    </div>
                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-800">
                        2023 - 2024
                      </h4>
                      <p className="font-bold text-gray-800">Design Bootcamp</p>
                      <p className="text-sm text-gray-500">
                        Harvard University
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="relative flex items-start space-x-6">
                    {/* Dot */}
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      🎓
                    </div>
                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-800">
                        2023 - 2024
                      </h4>
                      <p className="font-bold text-gray-800">User Experience</p>
                      <p className="text-sm text-gray-500">
                        Harvard University
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800">My Skills</h2>
            <p className="text-sm text-gray-500 mt-2 uppercase tracking-wide">
              Offered Services
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Skill Card 1 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                <span className="text-lg font-bold text-gray-700">Ps</span>
              </div>
              <p className="text-xl font-semibold text-purple-800">92%</p>
              <p className="text-sm text-gray-500 mt-2">Photoshop</p>
            </div>

            {/* Skill Card 2 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                <span className="text-lg font-bold text-gray-700">Ai</span>
              </div>
              <p className="text-xl font-semibold text-purple-800">80%</p>
              <p className="text-sm text-gray-500 mt-2">Illustrator</p>
            </div>

            {/* Skill Card 3 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                <span className="text-lg font-bold text-gray-700">Ae</span>
              </div>
              <p className="text-xl font-semibold text-purple-800">85%</p>
              <p className="text-sm text-gray-500 mt-2">After Effect</p>
            </div>

            {/* Skill Card 4 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                <span className="text-lg font-bold text-gray-700">Lr</span>
              </div>
              <p className="text-xl font-semibold text-purple-800">99%</p>
              <p className="text-sm text-gray-500 mt-2">Light Room</p>
            </div>

            {/* Skill Card 5 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                <span className="text-lg font-bold text-gray-700">Pr</span>
              </div>
              <p className="text-xl font-semibold text-purple-800">89%</p>
              <p className="text-sm text-gray-500 mt-2">Premier Pro</p>
            </div>

            {/* Skill Card 6 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                <span className="text-lg font-bold text-gray-700">Id</span>
              </div>
              <p className="text-xl font-semibold text-purple-800">93%</p>
              <p className="text-sm text-gray-500 mt-2">InDesign</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800">
              Your Questions and Answers
            </h2>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow ${
                  activeIndex === index
                    ? "bg-purple-500 text-white"
                    : "bg-white"
                }`}
              >
                {/* Question */}
                <div
                  className="flex justify-between items-center px-6 py-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3
                    className={`text-lg font-semibold ${
                      activeIndex === index ? "text-white" : "text-purple-800"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span className="text-2xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* Answer with Transition */}
                <div
                  className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-[200px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-r from-purple-600 via-purple-800 to-indigo-900 py-20 rounded-xl">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
              <img
                src="/profile.jpg" // Replace with your image path
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            If you have any project in mind
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Have a project in mind? Let work together to bring your vision to
            life
          </p>

          {/* Button */}
          <div>
            <a
              href="#"
              className="inline-block bg-purple-500 hover:bg-purple-700 text-white font-semibold text-lg px-6 py-3 rounded-full transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-300 rounded-xl p-6 lg:p-10 shadow-md flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Text Content */}
        <div className="flex-1">
          {/* Title */}
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            <span className="text-purple-500 text-3xl font-extrabold">01.</span>{" "}
            UI/UX Design
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-4">
            Conducting qualitative and quantitative research to understand user
            needs, behaviors, and pain points. Utilizing methods such as
            surveys, interviews, and usability testing to actionable insights.
          </p>

          {/* Bullet Points */}
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>UI/UX Design</li>
            <li>Research</li>
            <li>Mobile & Web App</li>
          </ul>

          {/* Button */}
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-purple-500 text-white font-medium text-sm rounded-full shadow-md hover:bg-purple-600 transition"
          >
            Learn More <span className="ml-2">↗</span>
          </a>
        </div>

        {/* Responsive Image Section */}
        <div className="flex-1">
          <div className="w-full h-auto">
            <Image
              src={bannerPic2} // Replace with your image path
              alt="UI/UX Design"
              width={500} // Replace with your image width
              height={500} // Replace with your image height
              className="rounded-lg shadow-lg object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
