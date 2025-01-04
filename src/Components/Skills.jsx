

import { DATA } from "../Data/Resume";
import ReactMarkdown from "react-markdown";
export default function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-screen-lg pt-10 flex flex-col justify-center font-mono text-white">
        <div className="text-2xl font-extrabold">Skills</div>
        <div className="h-min-0 flex flex-wrap gap-2">
          {DATA.skills.map((skill) => {
            return (
              <div
                key={skill}
                className="p-1 text-sm font-sans text-black bg-white border-solid rounded-md hover:opacity-90 hover:bg-slate-200"
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
