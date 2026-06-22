import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2026",
      title: "Disaster Brain — Featured Project",
      company: "Offline-First AI Co-pilot",
      type: "Production-Ready",
      description:
        "Offline-first AI co-pilot for disaster first responders with quantized LLMs via Ollama, voice triage, photo assessment, and protocol RAG using ChromaDB. Supports 11 languages. Designed for infrastructure serving 170M+ people.",
    },
    {
      year: "2026",
      title: "MEDISCAN — 5th Place",
      company: "Anveshana 3.0, BMSITM Bangalore",
      type: "₹15,000 Prize · Team Neural Ninjas",
      description:
        "AI-powered medical scan analyzer using computer vision to interpret X-rays, CT scans, and MRIs with anomaly detection. Implemented neural networks for diagnostic support with real-world medical imaging datasets.",
    },
    {
      year: "2026",
      title: "Persistent Context Engine — 4th Place",
      company: "ANVIL Hackathon, Scaler Institute",
      type: "₹3,000 Prize · Built in 24 hours",
      description:
        "Autonomous Site Reliability Engineering agent with persistent memory context. Reduces Mean Time To Resolution (MTTR) for critical engineering incidents through AI-powered analysis and event pattern matching.",
    },
    {
      year: "2025",
      title: "AI Resume Analyzer — Top 25 Global",
      company: "Student HackPad 2025, Devpost",
      type: "Solo Project · Global Competition",
      description:
        "NLP-based resume analysis engine that scores resumes against job descriptions and delivers actionable improvement recommendations. Recognized by founders Allen Du & Arnav Chhajed for coding excellence.",
    },
    {
      year: "2025+",
      title: "B.Tech Computer Science & Engineering",
      company: "CMR Institute of Technology, Bangalore",
      type: "CGPA 9.25 · Batch 2025–2029",
      description:
        "Focus: Generative AI, Backend Development, Data Structures & Algorithms, System Design. Open to internships, collaborations, and interesting problems.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Achievements &amp; Projects</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                <div>
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className="relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? "h-40" : "h-30"} bg-softGray`}
                    />
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 0 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 0 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">{exp.company}</span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
