import { DATA } from "../Data/Resume";

import ReactMarkdown from "react-markdown";
export default function Contact() {
  return (
    <section id="Contact">
      <div className="mx-auto max-w-screen-lg pt-20 pb-40 flex flex-col justify-center font-mono text-white">
        <div className="flex justify-center">
          <div>
            <div className="p-1 font-sans text-black bg-white border-solid rounded-md hover:opacity-90 hover:bg-slate-200 text-md">
              Contact
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pt-4 text-6xl font-bold">
            <div>Get in Touch</div>
          </div>
        </div>
        <div className="pt-4 text-center flex justify-center font-semibold text-white text-xl opacity-45 tracking-wide">
          Want to chat? Just shoot me a dm with a direct question on Linkedin and
          I'll respond whenever I can.
        </div>
      </div>
    </section>
  );
}
