import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { customIcons } from "../../src/icons/customIcons";
import { LinkedInIcon } from "../../src/icons/LinkedInIcon";
import { SimpleIcon } from "../components/SimpleIcon";

/* =========================
   CONTACT FORM COMPONENT
========================= */

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="mt-10 border border-[#00ff00] p-6 bg-[#001a00]/40 space-y-4"
    >
      <h3 className="text-[#00ff00] glow text-xl font-bold">
        &gt; SEND MESSAGE
      </h3>

      <input
        type="text"
        name="from_name"
        placeholder="Your name"
        required
        className="w-full bg-black border border-[#00ff00] p-2 text-[#00ff00] outline-none"
      />

      <input
        type="email"
        name="from_email"
        placeholder="Your email"
        required
        className="w-full bg-black border border-[#00ff00] p-2 text-[#00ff00] outline-none"
      />

      <textarea
        name="message"
        placeholder="Your message"
        required
        rows={4}
        className="w-full bg-black border border-[#00ff00] p-2 text-[#00ff00] outline-none"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="border border-[#00ff00] px-6 py-2 text-[#00ff00]
        hover:bg-[#001a00] hover:shadow-[0_0_15px_rgba(0,255,0,0.4)]
        transition-all disabled:opacity-50"
      >
        {status === "sending" ? "SENDING..." : "SEND"}
      </button>

      {status === "success" && <MatrixSuccess />}
      {status === "error" && (
        <div className="text-red-500 mt-4">&gt; Transmission failed</div>
      )}
    </form>
  );
}

/* =========================
   MATRIX SUCCESS UI
========================= */

function MatrixSuccess() {
  const [lines, setLines] = useState<string[]>([]);

  const messages = [
    "> TRANSMISSION COMPLETE",
    "> ENCRYPTING PAYLOAD...",
    "> MESSAGE DELIVERED ✔",
  ];

  useEffect(() => {
    messages.forEach((msg, i) => {
      setTimeout(() => {
        setLines((prev) => [...prev, msg]);
      }, i * 500);
    });
  }, []);

  return (
    <div className="mt-6 border border-[#00ff00] bg-black p-4 text-[#00ff00] font-mono glow shadow-[0_0_20px_rgba(0,255,0,0.4)]">
      {lines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      <span className="animate-pulse">█</span>
    </div>
  );
}

/* =========================
   MAIN CONTACT PAGE
========================= */

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="border border-[#00ff00] p-6 bg-[#001a00]/30">
          <h2 className="text-[#00ff00] mb-4 glow font-extrabold tracking-wide text-2xl">
            CONTACT ME
          </h2>

          <div className="text-[#00aa00] mb-8">
            <p>&gt; Initializing communication protocols...</p>
            <p className="text-[#00ff00] glow">&gt; Connection status: READY</p>
            <p>&gt; I'm always interested in new projects and opportunities.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* EMAIL */}
            <a
              href="mailto:asif17111998@gmail.com"
              className="flex items-center gap-3 p-4 border border-[#00ff00]
              text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00]
              transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
              <SimpleIcon
                path={customIcons.gmail.path}
                size={20}
                color="#00ff00"
              />
              <div>
                <div className="text-[#00ff00]">Email</div>
                <div className="text-sm">asif17111998@gmail.com</div>
              </div>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/asif1711/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#00ff00]
              text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00]
              transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
              <SimpleIcon
                path={customIcons.github.path}
                size={20}
                color="#00ff00"
              />
              <div>
                <div className="text-[#00ff00]">GitHub</div>
                <div className="text-sm">View</div>
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/nurulislam1711/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#00ff00]
              text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00]
              transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
              <LinkedInIcon size={20} color="#00ff00" />
              <div>
                <div className="text-[#00ff00]">LinkedIn</div>
                <div className="text-sm">Connect</div>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919875535211"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#00ff00]
              text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00]
              transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
              <SimpleIcon
                path={customIcons.whatsapp.path}
                size={20}
                color="#00ff00"
              />
              <div>
                <div className="text-[#00ff00]">WhatsApp</div>
                <div className="text-sm">Text</div>
              </div>
            </a>
          </div>

          <ContactForm />

          <div className="border border-[#00ff00] p-4 bg-[#001a00]/50 mt-6">
            <div className="text-[#00aa00]">
              <div>&gt; Available for:</div>
              <div className="pl-4">
                <div>[✓] Freelance Projects</div>
                <div>[✓] Full-time Opportunities</div>
                <div>[✓] Collaborations</div>
                <div>[✓] Consulting</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 border border-[#00ff00] p-4 bg-[#001a00]/30 text-[#00aa00]">
          <div>&gt; Communication channels active</div>
          <div>&gt; Awaiting transmission...</div>
        </div>
      </div>
    </section>
  );
}
