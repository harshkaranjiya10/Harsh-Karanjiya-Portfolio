import { DATA } from "../Data/Resume";

export default function Contact() {
  return (
    <section id="Contact" className="py-20">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 flex flex-col justify-center font-mono text-white">
        <div className="flex justify-center">
          <div>
            <div className="p-1 font-sans text-black bg-white border-solid rounded-md hover:opacity-90 hover:bg-slate-200 text-md">
              Contact
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pt-4 text-4xl sm:text-5xl font-bold">
            <div>Get in Touch</div>
          </div>
        </div>
        <div className="pt-4 text-center flex justify-center font-semibold text-white text-xl opacity-45 tracking-wide">
          Want to chat? Just shoot me a DM with a direct question on LinkedIn and I'll respond whenever I can.
        </div>
      </div>
    </section>
  );
}
