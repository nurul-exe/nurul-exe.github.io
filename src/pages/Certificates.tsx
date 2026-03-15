// src/pages/Certificates.tsx
import React from "react";

export function Certificates() {
  const certificates = [
    {
      title: "Google CyberSecurity",
      provider: "Coursera/Google",
      year: "2023",
      image:
        "https://white-secondary-jay-146.mypinata.cloud/ipfs/bafybeihqjiqgh7glgq63xiaopwb2u7vj3q6zuatkq5befhd5resx7dwfhu/1.png",
    },
    {
      title: "Java Full Stack",
      provider: "EduSkills Academy",
      year: "2026",
      image:
        "https://white-secondary-jay-146.mypinata.cloud/ipfs/bafybeifrhopeacajcwhzaj2uc4l4k7j52ls3egraasa3rb6bdt46b2nj7i",
    },
    {
      title: "Web Design & Development",
      provider: "NSDC",
      year: "2025",
      image:
        "https://white-secondary-jay-146.mypinata.cloud/ipfs/bafkreialtmuxpmwh24mzqikdsliivy2i66464bacgxl72scmkmbc2hbwym",
    },
    {
      title: "AWS Cloud Foundations",
      provider: "AWS Academy",
      year: "2025",
      image:
        "https://white-secondary-jay-146.mypinata.cloud/ipfs/bafybeihqjiqgh7glgq63xiaopwb2u7vj3q6zuatkq5befhd5resx7dwfhu/2.png",
    },
    {
      title: "Python Programming",
      provider: "Internshala Trainings",
      year: "2024",
      image:
        "https://white-secondary-jay-146.mypinata.cloud/ipfs/bafybeihqjiqgh7glgq63xiaopwb2u7vj3q6zuatkq5befhd5resx7dwfhu/3.png",
    },
    {
      title: "Google Android Developer",
      provider: "AICTE",
      year: "2025",
      image:
        "https://white-secondary-jay-146.mypinata.cloud/ipfs/bafybeihqjiqgh7glgq63xiaopwb2u7vj3q6zuatkq5befhd5resx7dwfhu/4.png",
    },
    {
      title: "AWS Data Engineering",
      provider: "AWS Academy",
      year: "2025",
      image:
        "https://white-secondary-jay-146.mypinata.cloud/ipfs/bafybeihqjiqgh7glgq63xiaopwb2u7vj3q6zuatkq5befhd5resx7dwfhu/5.png",
    },
    {
      title: "AWS ML Foundations",
      provider: "AWS Academy",
      year: "2025",
      image:
        "https://white-secondary-jay-146.mypinata.cloud/ipfs/bafybeihqjiqgh7glgq63xiaopwb2u7vj3q6zuatkq5befhd5resx7dwfhu/6.png",
    },
    {
      title: "Celonis Process Mining",
      provider: "Celonis Academy",
      year: "2025",
      image:
        "https://white-secondary-jay-146.mypinata.cloud/ipfs/bafkreibxfscbmy5uuynlcyeslwffrc257nny3xqj74ut737u46cczzvmym",
    }
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen px-6 py-20 flex justify-center items-start"
    >
      <div className="max-w-4xl w-full mx-auto">
        
        {/* Header */}
        <div className="border border-[#00ff00] p-6 bg-[#001a00]/30 mb-10">
          <h2 className="text-[#00ff00] mb-4 glow text-3xl font-bold">
            CERTIFICATIONS
          </h2>
          <p className="text-[#00aa00]">
            &gt; Displaying {certificates.length} verified certifications...
          </p>
        </div>

        {/* Certificate List */}
        <div className="space-y-10">
          {certificates.map((cert, index) => (
            <React.Fragment key={index}>
              
              {/* Certificate Card */}
              <div className="border border-[#00ff00] bg-[#001a00]/40 hover:bg-[#001a00]/60 transition-all shadow-md hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">

                {/* Image */}
                <div className="w-full overflow-hidden border-b border-[#00ff00]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full object-contain max-h-[500px] bg-black"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="p-4">
                  <h3 className="text-[#00ff00] text-xl mb-2 font-bold glow">
                    &gt; {cert.title}
                  </h3>
                  <p className="text-[#00aa00] mb-1">
                    <span className="text-[#00ff00]">Provider:</span>{" "}
                    {cert.provider}
                  </p>
                  <p className="text-[#00aa00]">
                    <span className="text-[#00ff00]">Year:</span> {cert.year}
                  </p>
                </div>
              </div>

              {/* Divider bar between cards */}
              {index < certificates.length - 1 && (
                <div className="w-full h-[2px] bg-[#00ff00]/30 shadow-[0_0_12px_#00ff00]"></div>
              )}

            </React.Fragment>
          ))}
        </div>

        {/* Footer message */}
        <div className="mt-10 border border-[#00ff00] p-4 bg-[#001a00]/30">
          <p className="text-[#00aa00]">&gt; End of certification records</p>
        </div>
      </div>
    </section>
  );
}
