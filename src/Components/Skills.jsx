import { DATA } from "../Data/Resume";
import ReactMarkdown from "react-markdown";

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 flex flex-col justify-center font-mono text-white">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6">
          Skills
        </div>
        <div className="flex flex-wrap gap-3">
          {DATA.skills.map((skill) => {
            return (
              <div
                key={skill}
                className="px-3 py-1 text-xs sm:text-sm lg:text-base font-sans text-black bg-white border-solid rounded-md shadow-md hover:opacity-90 hover:bg-slate-200 transition duration-200"
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
