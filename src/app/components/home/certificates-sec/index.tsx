"use client";

import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Certificate = {
  title: string;
  event: string;
  prize: string;
  issuer: string;
  image: string;
  pdf: string | null;
};

const CertificatesSec = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/certificates-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCertificates(data?.certificates ?? []);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchData();
  }, []);

  const current = certificates[active];

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Hackathon Certificates</h2>
              <p className="text-xl text-primary">( 03 )</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
              <div className="flex flex-col gap-4">
                {certificates.map((cert, index) => (
                  <button
                    key={cert.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`text-left rounded-xl border p-5 transition-all duration-200 cursor-pointer ${
                      active === index
                        ? "border-primary bg-white shadow-sm"
                        : "border-mistGray bg-white/60 hover:border-primary/40"
                    }`}
                  >
                    <p className="text-sm font-semibold text-primary mb-1">{cert.prize}</p>
                    <h5 className="text-black font-semibold mb-1">{cert.title}</h5>
                    <p className="text-secondary text-sm mb-1">{cert.event}</p>
                    <p className="text-secondary text-xs">{cert.issuer}</p>
                  </button>
                ))}
              </div>

              {current && (
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-xl border border-mistGray bg-white p-3 shadow-sm">
                    <Image
                      src={getImgPath(current.image)}
                      alt={current.title}
                      width={900}
                      height={650}
                      className="w-full h-auto rounded-lg object-contain"
                    />
                  </div>
                  {current.pdf && (
                    <Link
                      href={getImgPath(current.pdf)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 text-base font-medium text-primary hover:underline"
                    >
                      View / Download PDF Certificate →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSec;
