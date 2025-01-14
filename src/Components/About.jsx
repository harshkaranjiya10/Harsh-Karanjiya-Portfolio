import { DATA } from "../Data/Resume";
import ReactMarkdown from "react-markdown";

export default function About() {
  return (
    <section id="about" className="py-10">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 font-mono text-white">
        <div className="text-2xl sm:text-3xl lg:text-4xl flex flex-col justify-center font-extrabold mb-4">
          About
        </div>
        <ReactMarkdown className="font-sans text-sm sm:text-base lg:text-lg text-slate-100 leading-relaxed">
          {DATA.summary}
        </ReactMarkdown>
      </div>
    </section>
  );
}
