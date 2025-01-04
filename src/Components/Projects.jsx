import { DATA } from "../Data/Resume";
import ReactMarkdown from "react-markdown";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-screen-lg pt-20 flex flex-col justify-center font-mono text-white">
        <div className="flex justify-center">
          <div>
            <div className="p-1 font-sans text-black bg-white border-solid rounded-md hover:opacity-90 hover:bg-slate-200 text-md">
              Projects
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pt-4 text-6xl font-bold">
            <div>Check out my latest work</div>
          </div>
        </div>
        <div className="py-4 text-center flex justify-center font-semibold text-white text-xl opacity-45 tracking-wide">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </div>
        <div className="m-10 py-10 grid grid-cols-2 gap-8">
          {DATA.projects.map((project) => {
            return (
              <div
                key={project.title}
                className="flex flex-col justify-between cursor-pointer h-auto w-auto bg-black border border-gray-700 rounded-2xl text-sm"
                onClick={() => {
                  window.open(
                    project.url.vercel,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <img
                  src={project.image}
                  className=" w-auto rounded-2xl rounded-b-none"
                />
                <div className="p-2 flex flex-col ">
                  <div className="py-2 text-lg">{project.title}</div>
                  <div className="py-1 text-sm">{project.time}</div>
                  <div className="py-1 text-xs text-white text-opacity-75">
                    {project.description}
                  </div>
                  <div className="py-4 flex">
                    {project.tech.map((technology) => {
                      return (
                        <div key={technology} className="mx-1 flex px-[4px] font-sans text-white bg-gray-900 border-solid rounded-md hover:opacity-90 hover:bg-gray-950 text-sm">
                          {technology}
                        </div>
                      );
                    })}
                  </div>
                  <div className="pt-2 flex">
                    {project.url.githubDisplay ? (
                      <div
                        className="m-1 flex p-1 font-sans text-black bg-white border-solid rounded-md hover:opacity-90 hover:bg-slate-200 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={project.url.github}
                          className="flex mx-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon />
                          <div className="px-1 pt-[1px]">Source</div>
                        </a>
                      </div>
                    ) : (
                      <></>
                    )}
                    {project.url.vercelDisplay ? (
                      <div
                        className="m-1 flex p-1 font-sans text-black bg-white border-solid rounded-md hover:opacity-90 hover:bg-slate-200 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={project.url.vercel}
                          className="flex mx-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LanguageIcon />
                          <div className="px-1 pt-[1px]">Website</div>
                        </a>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
