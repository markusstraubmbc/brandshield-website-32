
import { Mail, Phone, MapPin } from "lucide-react";
import { trackPhoneClick, trackEmailClick } from "@/lib/tracking";

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
                  <address className="not-italic">
                    <p className="font-bold">Brandschutz Arnold</p>
                    <p>Inhaber: Jürgen Arnold</p>
                    <p>Brühlstraße 67</p>
                    <p>70771 Leinfelden-Echterdingen</p>
                    <p>Deutschland</p>
                  </address>
                </div>
                <a
                  href="tel:+4971145145212"
                  onClick={() => trackPhoneClick("contact_section")}
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                >
                  <Phone size={20} />
                  <span>+49 (0) 711 – 45145212</span>
                </a>
                <a
                  href="tel:+491735390653"
                  onClick={() => trackPhoneClick("contact_section_mobile")}
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                >
                  <Phone size={20} />
                  <span>+49 (0) 173 / 539 065 3</span>
                </a>
                <a
                  href="mailto:j.arnold@brandschutz-arnold.de"
                  onClick={() => trackEmailClick("contact_section")}
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                  <span>j.arnold@brandschutz-arnold.de</span>
                </a>
                <p className="text-secondary/80 pt-4">
                  Umsatzsteuer-Identifikationsnummer: 97003/66663
                </p>
                <p className="text-secondary/80">
                  USt-IdNr. DE 326610644
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/visitenkarte.png"
              alt="Visitenkarte Jürgen Arnold"
              className="max-w-full h-auto shadow-lg rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
