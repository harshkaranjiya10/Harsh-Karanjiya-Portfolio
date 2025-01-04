
import { DATA } from "../Data/Resume";

import ReactMarkdown from "react-markdown";
export default function About() {
  return (
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
  );
}
