import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { ProfilePhoto } from "./ProfilePhoto";

const HeroSection = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 gap-10 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl lg:w-1/2">
            <p className="w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Open to Internships &amp; Collaborations
            </p>
            <div>
              <div className="flex items-center gap-8">
                <h1>I&apos;m Naman</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                  />
                </div>
              </div>
              <h1>AI Engineer</h1>
            </div>
            <p className="text-lg font-medium text-black">
              AI Engineer &amp; Backend Developer — Building Intelligent Systems
            </p>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              First-year B.Tech CSE student at CMR Institute of Technology, Bangalore —
              specializing in LangChain, RAG pipelines, Multi-Agent Systems, and FastAPI
              backends. 3× Hackathon Winner with ₹18K+ in prizes. CGPA 9.25.
            </p>
          </div>

          <div className="flex justify-center lg:hidden">
            <ProfilePhoto className="w-full max-w-[280px]" priority />
          </div>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 z-1 hidden -translate-y-1/2 pt-16 lg:block xl:right-16">
        <ProfilePhoto className="w-[320px] xl:w-[380px]" priority />
      </div>
    </section>
  );
};

export default HeroSection;
