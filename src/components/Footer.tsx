const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="/lovable-uploads/51f6a88b-0936-4380-a9af-5b9bd7144996.png"
              alt="Arnold Brandschutz Logo"
              className="h-12 mb-4"
            />
            <p className="text-white/80">
              Ihr zuverlässiger Partner für Brandschutz- und Fluchtwegslösungen
              seit über 25 Jahren.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Impressum</h4>
            <div className="text-white/80 space-y-2">
              <p>Brandschutz Arnold</p>
              <p>Inhaber des Unternehmens: Jürgen Arnold</p>
              <p>Brühlstraße 67</p>
              <p>70771 Leinfelden-Echterdingen</p>
              <p>Deutschland</p>
              <p>Email: j.arnold@brandschutz-arnold.de</p>
              <p>Telefon: +49 (0) 711 – 45145212</p>
              <p>Umsatzsteuer-Identifikationsnummer: 97003/66663</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; 2024 Arnold Brandschutz. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;