import { DATA } from "../Data/Resume";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function WorkExperience() {
  return (
    <section id="Work-Experience" className="py-10">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 flex flex-col justify-center font-mono text-white">
        <div className="text-2xl sm:text-3xl font-extrabold mb-6">Work Experience</div>
        <div className="space-y-6">
          {DATA.experience.map((experience, index) => {
            const [viewDesc, setViewDesc] = useState(false);

            return (
              <div
                key={index}
                className="group p-5 bg-gray-950 text-white border border-gray-700 rounded-md hover:opacity-90 hover:bg-gray-900 transition duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start">
                  <div className="flex items-center space-x-4">
                    <img
                      src="csfi.png"
                      alt={experience.company}
                      width="50"
                      height="20"
                      className="border-2 rounded-full"
                    />
                    <div>
                      <div className="text-lg font-semibold">{experience.company}</div>
                      <div className="text-sm">{experience.title}</div>
                    </div>
                  </div>

                  <div className="text-sm sm:text-base text-center sm:text-right pt-2 sm:pt-0">
                    {experience.start} - {experience.end}
                  </div>
                  <div
                    className="h-auto opacity-0 group-hover:opacity-100 cursor-pointer mt-2 sm:mt-0"
                    onClick={() => setViewDesc((prev) => !prev)}
                  >
                    <ChevronRight
                      className={`transition-transform duration-300 ${viewDesc ? "rotate-90" : ""}`}
                    />
                  </div>
                </div>

                {viewDesc && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="pt-2 text-sm text-gray-300"
                  >
                    {experience.description}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
