import { DATA } from "../Data/Resume";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 flex flex-col justify-center font-mono text-white">
        <div className="flex justify-center">
          <div>
            <div className="p-1 font-sans text-black bg-white border-solid rounded-md hover:opacity-90 hover:bg-slate-200 text-md">
              Projects
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pt-4 text-4xl sm:text-5xl font-bold">
            <div>Check out my latest work</div>
          </div>
        </div>
        <div className="py-4 text-center flex justify-center font-semibold text-white text-xl opacity-45 tracking-wide">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
          {DATA.projects.map((project) => {
            return (
              <div
                key={project.title}
                className="flex flex-col justify-between cursor-pointer h-auto bg-black border border-gray-700 rounded-2xl text-sm"
                onClick={() => window.open(project.url.vercel, "_blank", "noopener,noreferrer")}
              >
                <img src={project.image} className="w-full rounded-t-2xl" alt={project.title} />
                <div className="p-2 flex flex-col">
                  <div className="py-2 text-lg">{project.title}</div>
                  <div className="py-1 text-sm">{project.time}</div>
                  <div className="py-1 text-xs text-white text-opacity-75">{project.description}</div>
                  <div className="py-4 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <div key={technology} className="px-2 py-1 font-sans text-white bg-gray-900 rounded-md text-xs">
                        {technology}
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 flex">
                    {project.url.githubDisplay && (
                      <div className="m-1 flex p-1 font-sans text-black bg-white border-solid rounded-md hover:opacity-90 hover:bg-slate-200 text-xs">
                        <div onClick={() => window.open(project.url.github, "_blank", "noopener,noreferrer")} className="flex items-center mx-1" target="_blank" rel="noopener noreferrer">
                          <GitHubIcon className="text-gray-800" />
                          <div className="px-1" >Source</div>
                        </div>
                      </div>
                    )}
                    {project.url.vercelDisplay && (
                      <div className="m-1 flex p-1 font-sans text-black bg-white border-solid rounded-md hover:opacity-90 hover:bg-slate-200 text-xs">
                        <a href={project.url.vercel} className="flex items-center mx-1" target="_blank" rel="noopener noreferrer">
                          <LanguageIcon className="text-gray-800" />
                          <div className="px-1">Website</div>
                        </a>
                      </div>
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
