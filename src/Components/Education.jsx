import { DATA } from "../Data/Resume";
import { ChevronRight } from "lucide-react";

export default function Education() {
  return (
    <section id="Education" className="py-10">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 flex flex-col justify-center font-mono text-white">
        <div className="text-2xl sm:text-3xl font-extrabold mb-6">Education</div>
        <div className="space-y-4">
          {DATA.education.map((education, index) => (
            <div
              key={index}
              className="group p-5 bg-gray-950 text-white border border-gray-700 rounded-lg hover:opacity-90 hover:bg-gray-900 cursor-pointer transition duration-200"
              onClick={() =>
                window.open(
                  "https://www.daiict.ac.in/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src="DaiictLogo.png"
                    alt="Institute Logo"
                    width="50"
                    height="50"
                    className="border-2 border-gray-600 rounded-full"
                  />
                  <div>
                    <div className="text-lg font-bold">{education.Institue}</div>
                    <div className="text-sm font-semibold text-gray-300">
                      {education.title}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                  <div className="text-sm sm:text-base font-medium">
                    {education.start} - {education.end}
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
