import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";


import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Internship Online Store",
      description:
        "A traditional website built with HTML/CSS and JavaScript, featuring Bootstrap 5 framework, a WhatsApp API and a handcrafted UI.",
      image: project1,
      link: "https://github.com/asif1711/internship_online_store", // ✅ unique link
      tags: ["HTML", "CSS", "JavaScript","Prototype"],
    },
    {
      title: "Ecommerce Tea Store",
      description:
        "Complete UI/UX design for a website, from wireframes to high-fidelity prototypes. Back-end support with transport and online payment logistics.",
      image: project2,
      link: "https://github.com/asif1711/ecom_website", // ✅ another unique link
      tags: ["UI/UX", "Back-end", "API"],
    },
    {
      title: "VIP Event Access Portal",
      description:
        "A highly secured platform to provide access to multiple events according to event manager guidelines. It primarily uses SMS-based verification alongside various hard-gated security standards.",
      image:project3,
      link: "https://github.com/asif1711/esdv0.1", // ✅ another unique link
      tags: ["PHP","Hashing","Twilio SDK","MariaDB","HTML/CSS/JavaScript"],
    },
    {
      title: "IBM Cloud Project",
      description:
        "A project performed on IBM cloud with IBM Watson and Python. Created a ChatBot, performed data representation, predictions and classification with IBM AI model.",
      image:project4,
      link: "https://github.com/asif1711/IBM_Watson_Project", // ✅ another unique link
      tags: ["Python","Cloud","IBM Watson","AI/ML"],
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="border border-[#00ff00] p-6 bg-[#001a00]/30 mb-8">
          <h2 className="text-[#00ff00] mb-4 glow">PROJECTS</h2>
          <p className="text-[#00aa00]">
            &gt; Displaying {projects.length} completed projects...
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-[#00ff00] bg-[#001a00]/50 hover:bg-[#001a00] transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
            >
              {/* ✅ Clickable Thumbnail */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden border-b border-[#00ff00] h-96 group"
                aria-label={`Open ${project.title} in new tab`}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    filter: "brightness(1.05) contrast(1.05)",
                  }}
                />

                {/* External link icon */}
                <div className="absolute top-2 right-3 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-all">
                  <ExternalLink
                    size={18}
                    className="text-[#00ff00] glow transition-transform duration-200 group-hover:scale-110 hover:animate-pulse"
                  />
                </div>
              </a>

              {/* ✅ Project Info */}
              <div className="p-4">
                <h3 className="text-[#00ff00] mb-2 glow">
                  &gt; {project.title}
                </h3>
                <p className="text-[#00aa00] mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 border border-[#00ff00] text-[#00ff00] text-sm"
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-[#00ff00] p-4 bg-[#001a00]/30">
          <div className="text-[#00aa00]">&gt; End of project archive</div>
        </div>
      </div>
    </section>
  );
}
