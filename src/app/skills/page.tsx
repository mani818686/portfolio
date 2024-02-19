import { skills } from "@/utils/data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Skills',
};

function Skills() {
  return (
    <div className="block-container">
      <h1 className="mt-10 text-5xl mb-5">Skills</h1>
      <div className="frontend">
        {Object.entries(skills).map(([key, value]) => {
          return (
            <div key={`section-${key}`}>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-1/2 h-px my-2 bg-gray-200 border-0 " />
                <span className="absolute px-3 font-medium text-grey -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                  {key}
                </span>
              </div>
              <div className="skills flex justify-center items-center flex-wrap mb-3 mt-3">
                {value.map((skill: string, index: number) => {
                  return (
                    <div
                      key={`skill-${index}`}
                      className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300 "
                    >
                      <div className="text-sm font-normal leading-none max-w-full flex-initial">
                        {skill}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
