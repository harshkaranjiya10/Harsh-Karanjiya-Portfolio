import { DATA } from "../Data/Resume";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
export default function Education() {
  return (
    <section id="Education">
      <div className="mx-auto max-w-screen-lg pt-10 flex flex-col justify-center font-mono text-white">
        <div className="text-2xl font-extrabold">Education</div>
        <div className="text-lg py-2 ">
          {DATA.education.map((education) => {
            const [viewDesc, setViewDesc] = useState(false);
            return (
              <div
                key={education}
                className="group p-5 font-sans bg-gray-950 text-white border-solid border-[1px] border-gray-800 rounded-md hover:opacity-90 hover:bg-black-200"
                onClick={() => { window.open("https://www.daiict.ac.in/", "_blank", "noopener,noreferrer");}}
              >
                <div className="flex justify-between">
                  <div className="flex items-center px-2">
                    <img
                      src="DaiictLogo.png"
                      width={"50px"}
                      height={"20px"}
                      className="border-2 rounded-full"
                    />
                    <div className="px-4">
                      {education.Institue}
                      <div className="font-semibold text-[16px]">
                        {education.title}
                      </div>
                    </div>
                    <div className="h-auto px-2 opacity-0 group-hover:opacity-100">
                      <ChevronRight />
                    </div>
                  </div>
                  <div className="flex justify-center items-center pr-8">
                    {education.start} - {education.end}
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
