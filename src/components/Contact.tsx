import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-12">
          Kontakt
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-secondary">
                Kontaktinformationen
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-secondary">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Brandschutz Arnold</p>
                    <p>Inhaber des Unternehmens: Jürgen Arnold</p>
                    <p>Brühlstraße 67</p>
                    <p>70771 Leinfelden-Echterdingen</p>
                    <p>Deutschland</p>
                  </div>
                </div>
                <a
                  href="tel:+4971145145212"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                >
                  <Phone size={20} />
                  <span>+49 (0) 711 – 45145212</span>
                </a>
                <a
                  href="tel:+491735390653"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                >
                  <Phone size={20} />
                  <span>+49 (0) 173 / 539 065 3</span>
                </a>
                <a
                  href="mailto:j.arnold@brandschutz-arnold.de"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                  <span>j.arnold@brandschutz-arnold.de</span>
                </a>
                <p className="text-secondary/80 pt-4">
                  Umsatzsteuer-Identifikationsnummer: 97003/66663
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/09df1356-c06e-45ee-8399-50b4dd4667b0.png"
              alt="Visitenkarte Jürgen Arnold"
              className="max-w-full h-auto shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;