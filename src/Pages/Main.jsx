import { useState } from "react";
import { DATA } from "../Data/Resume";
import ReactMarkdown from "react-markdown";
export default function Main() {
  return (
    <div className="">
      <section id="hero">
        <div className="mx-auto max-w-screen-md pt-20 flex items-center justify-center  font-mono font-extrabold text-white">
          <div className="flex flex-col ">
            <div className="text-6xl ">Hi,I'm Harsh👋</div>
            <p className="text-xl">{DATA.description}</p>
          </div>
          <img
            className="w-[150px] h-[150px] rounded-full mx-10"
            src="profile.jpg"
          ></img>
        </div>
      </section>
      <section id="about">
        <div className="mx-auto max-w-screen-lg pt-10 font-mono text-white">
          <div className="text-2xl flex flex-col justify-center font-extrabold">
            About
          </div>
          <ReactMarkdown className="font-sans text-sm text-slate-100">
            {DATA.summary}
          </ReactMarkdown>
        </div>
      </section>
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
      <section id="Work-Experience">
        <div className="mx-auto max-w-screen-lg pt-10 flex flex-col justify-center font-mono text-white">
          <div className="text-2xl font-extrabold">Work Experience</div>
          <div className="bg-black">
            {DATA.experience.map((experience) => {
              const [viewDesc, setViewDesc] = useState(false);
              return (
                <div
                  key={experience}
                  className="p-1 font-sans text-white  bg-black border-solid  rounded-md hover:opacity-90 hover:bg-black-200"
                  onClick={() => {
                    setViewDesc((prev) => {
                      return !prev;
                    });
                  }}
                >
                  <div className="flex-col">
                    <div className="">
                      {experience.company} {experience.title}
                    </div>
                    <div className="">
                      {experience.start}-{experience.end}
                    </div>
                  </div>
                  <div className="">
                    <div>
                      {viewDesc ? (
                        <div>
                          {experience.description} {experience.title}
                        </div>
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
    </div>
  );
}
