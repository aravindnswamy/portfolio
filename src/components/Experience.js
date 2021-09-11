import { BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { experience } from "../data";

export default function Experience() {
    return (
        <section id="experience" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Experience
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {experience.map((exp) => (
                <a
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative">
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-100 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {exp.duration}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {exp.title}
                      </h1>
                      <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">{exp.company}</h2>
                      <p className="leading-relaxed" href={exp.url} target="_blank" rel="noopener noreferrer">
                          <ul><li>{exp.description}</li></ul>
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}