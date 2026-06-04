
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Spalte 1: Logo + Tagline */}
          <div>
            <Link to="/" aria-label="Arnold Brandschutz Startseite">
              <img
                src="/assets/logo.png"
                alt="Arnold Brandschutz Logo – Experte für Brandschutz Stuttgart"
                className="h-12 mb-4"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Ihr zuverlässiger Partner für Brandschutz seit über 30 Jahren.<br />
              TÜV-zertifiziert · EIPOS-Sachverständiger · Stuttgart & bundesweit.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a href="tel:+4971145145212" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Phone size={14} /> +49 (0) 711 – 45145212
              </a>
              <a href="mailto:j.arnold@brandschutz-arnold.de" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Mail size={14} /> j.arnold@brandschutz-arnold.de
              </a>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Brühlstraße 67, 70771 Leinfelden-Echterdingen</span>
              </div>
            </div>
          </div>

          {/* Spalte 2: Dienstleistungen */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4 text-white/90">Dienstleistungen</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/dienstleistungen/sabotageschutz" className="text-white/70 hover:text-white transition-colors">Sabotageschutz Infrastruktur</Link>
              <Link to="/dienstleistungen/gesamtsanierung-brandschutz" className="text-white/70 hover:text-white transition-colors">Gesamtsanierung Brandschutz</Link>
              <Link to="/dienstleistungen/sicherheitstechnik-tueren" className="text-white/70 hover:text-white transition-colors">Sicherheitstechnik Türen</Link>
              <Link to="/dienstleistungen/tuerengutachten" className="text-white/70 hover:text-white transition-colors">Türengutachten</Link>
              <Link to="/dienstleistungen/brandschutzplanung" className="text-white/70 hover:text-white transition-colors">Brandschutzplanung</Link>
              <Link to="/dienstleistungen/tuerenplanung" className="text-white/70 hover:text-white transition-colors">Türenplanung</Link>
              <Link to="/dienstleistungen/brandschutzkonzepte" className="text-white/70 hover:text-white transition-colors">Brandschutzkonzepte</Link>
              <Link to="/dienstleistungen/brandschutzbegehungen" className="text-white/70 hover:text-white transition-colors">Brandschutzbegehungen</Link>
            </nav>
          </div>

          {/* Spalte 3: Weitere Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4 text-white/90">Weitere Leistungen</h3>
            <nav className="flex flex-col gap-2 text-sm mb-6">
              <Link to="/dienstleistungen/brandschutzberatung" className="text-white/70 hover:text-white transition-colors">Brandschutzberatung</Link>
              <Link to="/dienstleistungen/flucht-und-rettungsplaene" className="text-white/70 hover:text-white transition-colors">Flucht- & Rettungspläne</Link>
              <Link to="/dienstleistungen/feuerwehr-einsatzplaene" className="text-white/70 hover:text-white transition-colors">Feuerwehr-Einsatzpläne</Link>
              <Link to="/dienstleistungen/brandschutzhelfer-ausbildung" className="text-white/70 hover:text-white transition-colors">Brandschutzhelfer Ausbildung</Link>
              <Link to="/brandschutz-stuttgart" className="text-white/70 hover:text-white transition-colors">Brandschutz Stuttgart</Link>
            </nav>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-2 text-white/90">Servicegebiet</h3>
            <p className="text-white/60 text-sm">Stuttgart · Leinfelden-Echterdingen · Tübingen · München · Baden-Württemberg · Bayern</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-white/50">
          <p>&copy; {currentYear} Arnold Brandschutz – Jürgen Arnold. Alle Rechte vorbehalten.</p>
          <p>Brandschutz Stuttgart · Sabotageschutz · Türengutachten · Sachverständiger</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
