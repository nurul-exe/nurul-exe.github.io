import { useState, useEffect } from "react";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

export function Skills() {
  const skills = [
    {
      icon: <Code size={20} />,
      title: "DEVELOPMENT",
      items: [
        "Python/R",
        "HTML/CSS/JavaScript",
        "PHP",
        "React/TypeScript",
        "C/C++",
        "Java",
        "SQL",
        "Assembly",
      ],
    },
    {
      icon: <Palette size={20} />,
      title: "DESIGN",
      items: [
        "Figma",
        "Canva",
        "Adobe Photoshop",
        "Adobe Sketchbook",
        "Blender",
        "Adobe XD",
      ],
    },
    {
      icon: <Smartphone size={20} />,
      title: "MOBILE APP DEV",
      items: ["Android Studio","React Native"],
    },
    {
      icon: <Zap size={20} />,
      title: "TOOLS",
      items: ["Virtual Machines", "Git", "Docker", "AWS"],
    },
  ];

  const allItems = skills.flatMap((mod) => mod.items);
  const totalSkills = allItems.length;

  const [visibleCount, setVisibleCount] = useState(0);

  // Animate one skill per tick
  useEffect(() => {
  let i = 0;
  const timer = setInterval(() => {
    setVisibleCount((prev) => {
      if (prev < totalSkills) return prev + 1;
      clearInterval(timer);
      return totalSkills; // clamp to max
    });
    i++;
  }, 250);
  return () => clearInterval(timer);
}, [totalSkills]);


  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="border border-[#00ff00] p-6 bg-[#001a00]/30 mb-8">
          <h2 className="text-[#00ff00] mb-6 glow">SKILLS</h2>
          <p className="text-[#00aa00] mb-4">
            &gt; Loading all skills in order [Expert -&gt; Novice] like [Top
            -&gt; Bottom]...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            // calculate start & end indices for each module
            const startIndex = skills
              .slice(0, index)
              .reduce((sum, s) => sum + s.items.length, 0);
            const endIndex = startIndex + skill.items.length;

            return (
              <div
                key={index}
                className="border border-[#00ff00] p-4 bg-[#001a00]/50 hover:bg-[#001a00] transition-colors hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
              >
                <div className="flex items-center gap-2 text-[#00ff00] mb-4 glow">
                  {skill.icon}
                  <span>{skill.title}</span>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => {
                    const absoluteIndex = startIndex + itemIndex;
                    const isVisible = absoluteIndex < visibleCount;

                    return (
                      <div
                        key={itemIndex}
                        className={`transition-all duration-300 ${
                          isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-3"
                        } text-[#00aa00] flex items-center gap-2`}
                      >
                        <span
                          className={`${
                            isVisible
                              ? "text-[#00ff00] animate-pulse"
                              : "text-gray-700"
                          }`}
                        >
                          [{isVisible ? "✓" : "·"}]
                        </span>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 border border-[#00ff00] p-4 bg-[#001a00]/30">
  <div className="text-[#00aa00] mb-2">
    &gt; Total skills loaded: {visibleCount}/{totalSkills}
  </div>

  <div className="text-[#00aa00]">
    &gt; All systems {visibleCount === totalSkills ? "operational." : "booting..."}
  </div>
</div>

      </div>
    </section>
  );
}
