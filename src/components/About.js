import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Aravind ⚡.
            <br className="hidden lg:inline-block" />A Software Engineer by profession, much more than that by passion!
          </h1>
          <p className="mb-8 leading-relaxed">
          A software engineer with a flair for platforms for scale, performance and UX. Strive for innovations that can blend the power of hardware and software, that can eventually help make this world a better place.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/aravind-n-753b41112/" target="_blank" rel="noopener noreferrer"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              LinkedIn
            </a>
            <br></br>
            <a
              href="https://github.com/aravindnswamy" target="_blank" rel="noopener noreferrer"
              className="iml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              GitHub
            </a>
            <a
              href="https://twitter.com/arvindnswamy_n" target="_blank" rel="noopener noreferrer"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Twitter
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./formal.jpg"
          />
        </div>
      </div>
    </section>
  );
}