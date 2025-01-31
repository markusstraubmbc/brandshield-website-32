import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-12">
          Kontakt
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-secondary">
                Kontaktinformationen
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+4971145145212"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                >
                  <Phone size={20} />
                  <span>+49 (0) 711 – 45145212</span>
                </a>
                <a
                  href="mailto:j.arnold@brandschutz-arnold.de"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                  <span>j.arnold@brandschutz-arnold.de</span>
                </a>
                <div className="flex items-start gap-3 text-secondary">
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p>Brühlstraße 67</p>
                    <p>70771 Leinfelden-Echterdingen</p>
                    <p>Deutschland</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;