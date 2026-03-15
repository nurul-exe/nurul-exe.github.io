import { Menu, X, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

type HeaderProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 bg-black/90 backdrop-blur-sm z-30 border-b border-[#00ff00]">
      
      {/* Top Navigation Bar */}
      <nav className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-[#00ff00] flex items-center gap-2 glow"
        >
          <Terminal size={20} />
          <span>portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link to="/about" onClick={closeMenu} className="text-[#00aa00] hover:text-[#00ff00]">
            $ about
          </Link>

          <Link to="/skills" onClick={closeMenu} className="text-[#00aa00] hover:text-[#00ff00]">
            $ skills
          </Link>

          <Link to="/projects" onClick={closeMenu} className="text-[#00aa00] hover:text-[#00ff00]">
            $ projects
          </Link>

          <Link to="/certifications" onClick={closeMenu} className="text-[#00aa00] hover:text-[#00ff00]">
            $ certifications
          </Link>

          <Link to="/contact" onClick={closeMenu} className="text-[#00aa00] hover:text-[#00ff00]">
            $ contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#00ff00]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* Mobile Navigation (pushes content down instead of overlaying) */}
      {mobileMenuOpen && (
        <div className="bg-black border-b border-[#00ff00] md:hidden transition-all duration-300">
          <div className="max-w-6xl mx-auto flex flex-col gap-4 px-6 py-4">

            <Link to="/about" onClick={closeMenu} className="text-[#00aa00] hover:text-[#00ff00]">
              $ about
            </Link>

            <Link to="/skills" onClick={closeMenu} className="text-[#00aa00] hover:text-[#00ff00]">
              $ skills
            </Link>

            <Link to="/projects" onClick={closeMenu} className="text-[#00aa00] hover:text-[#00ff00]">
              $ projects
            </Link>

            <Link to="/certifications" onClick={closeMenu} className="text-[#00aa00] hover:text-[#00ff00]">
              $ certifications
            </Link>

            <Link to="/contact" onClick={closeMenu} className="text-[#00aa00] hover:text-[#00ff00]">
              $ contact
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}