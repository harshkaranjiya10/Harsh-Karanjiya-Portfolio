import { DATA } from "../Data/Resume";

import ReactMarkdown from "react-markdown";
export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto max-w-screen-md pt-20 flex items-center justify-center  font-mono font-extrabold text-white">
        <div className="flex flex-col ">
          <div className="text-6xl max-md:text-3xl">Hi,I'm Harsh👋</div>
          <p className="text-xl max-md:text-md pt-2">{DATA.description}</p>
        </div>
        <img
          className="w-[150px] h-[150px] max-md:w-[70px] max-md:h-[70px] rounded-full mx-10"
          src="profile.png"
        ></img>
      </div>
    </section>
  );
}
