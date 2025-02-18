
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <img
              src="/lovable-uploads/51f6a88b-0936-4380-a9af-5b9bd7144996.png"
              alt="Arnold Brandschutz Logo"
              className="h-12 mb-4 md:mb-0"
            />
          </div>
          <div>
            <p className="text-white/80 text-center md:text-right">
              Ihr zuverlässiger Partner für Brandschutz- und Fluchtwegslösungen
              seit über 25 Jahren.
            </p>
            <p className="text-white/60 text-center md:text-right mt-2">
              &copy; {currentYear} Arnold Brandschutz. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
