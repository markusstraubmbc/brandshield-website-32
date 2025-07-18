
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: "services", label: "Dienstleistungen" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Kontakt" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/89e68df5-d32c-408f-a278-72aff11ee3e1.png"
              alt="Arnold Brandschutz Logo - Experte für Brandschutz und Fluchtwegplanung in Stuttgart und Umgebung"
              className="h-14 lg:h-16" // h-14 for mobile (increased from h-12), h-16 for desktop
            />
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center gap-6 text-secondary">
            <a
              href="tel:+4971145145212"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label="Rufen Sie uns an unter +49 (0) 711 – 45145212"
            >
              <Phone size={20} />
              <span>+49 (0) 711 – 45145212</span>
            </a>
            <a
              href="mailto:j.arnold@brandschutz-arnold.de"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label="Kontaktieren Sie uns per E-Mail"
            >
              <Mail size={20} />
              <span>j.arnold@brandschutz-arnold.de</span>
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-secondary hover:text-primary capitalize transition-colors ${
                  item.id === 'services' ? 'font-semibold px-4' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-secondary"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t" role="navigation" aria-label="Mobile Navigation">
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-secondary hover:text-primary capitalize transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-4 mt-4 text-secondary">
              <a
                href="tel:+4971145145212"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="Rufen Sie uns an unter +49 (0) 711 – 45145212"
              >
                <Phone size={20} />
                <span>+49 (0) 711 – 45145212</span>
              </a>
              <a
                href="mailto:j.arnold@brandschutz-arnold.de"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="Kontaktieren Sie uns per E-Mail"
              >
                <Mail size={20} />
                <span>j.arnold@brandschutz-arnold.de</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
