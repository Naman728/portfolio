import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { ProfilePhoto } from "../hero-section/ProfilePhoto";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="hidden lg:block w-[303px] shrink-0">
                <ProfilePhoto className="w-full" />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  I&apos;m <strong>Naman Anand</strong>, a first-year Computer Science student at{" "}
                  <strong>CMR Institute of Technology, Bangalore</strong> (Batch 2025–2029),
                  focused on building intelligent, production-grade AI systems.
                </p>
                <p className="mt-4">
                  My core domain is <strong>AI Engineering</strong> — LangChain, LangGraph, RAG
                  systems, Multi-Agent architectures — backed by solid FastAPI and backend
                  infrastructure. I ship real systems, not just notebooks.
                </p>
                <p className="mt-4">
                  Competed at national-level hackathons and placed in multiple competitions. I have
                  a strong bias toward <strong>accuracy over embellishment</strong>, and I understand
                  systems at both the code and architecture layer simultaneously.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "₹18K+", label: "Prize money won" },
                    { count: "20+", label: "GitHub repos" },
                    { count: "75+", label: "LeetCode problems" },
                    { count: "3×", label: "National hackathon placements" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="stack-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Core Stack</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {[
                      "LangChain",
                      "LangGraph",
                      "FastAPI",
                      "Python",
                      "RAG",
                      "Ollama",
                      "ChromaDB",
                      "Next.js",
                    ].map((tech) => (
                      <p
                        key={tech}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
