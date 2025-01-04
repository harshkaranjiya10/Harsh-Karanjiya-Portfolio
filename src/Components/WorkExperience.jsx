import { DATA } from "../Data/Resume";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
export default function WorkExperience() {
  return (
    <section id="Work-Experience">
      <div className="mx-auto max-w-screen-lg pt-10 flex flex-col justify-center font-mono text-white">
        <div className="text-2xl font-extrabold">Work Experience</div>
        <div className="text-lg py-2 ">
          {DATA.experience.map((experience) => {
            const [viewDesc, setViewDesc] = useState(false);
            return (
              <div
                key={experience}
                className="group p-5 font-sans bg-gray-950 border-[1px] text-white border-solid  border-gray-800 rounded-md hover:opacity-90 hover:bg-black-200"
              >
                <div className="flex justify-between">
                  <div className="flex items-center px-2">
                    <img
                      src="csfi.png"
                      width={"50px"}
                      height={"20px"}
                      className="border-2 rounded-full"
                    />
                    <div className="px-4">
                      {experience.company}
                      <div>{experience.title}</div>
                    </div>
                    <div
                      className="h-auto px-2 opacity-0 group-hover:opacity-100"
                      onClick={() => {
                        setViewDesc((prev) => {
                          return !prev;
                        });
                      }}
                    >
                      <ChevronRight
                        className={`transition-transform duration-300 ${
                          viewDesc ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center pr-8">
                    {experience.start} {" "} - {" "} {experience.end}
                  </div>
                </div>

                <div className="pt-2 text-[14px]">
                  <div>
                    {viewDesc ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {experience.description} {experience.title}
                      </motion.div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
