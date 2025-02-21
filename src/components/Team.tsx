
const Team = () => {
  const team = [
    {
      name: "Jürgen Arnold",
      title: "Experte für Brandschutz und zertifizierter Spezialist",
      image: "/lovable-uploads/f570c998-36eb-4c03-b873-58bec8ef243a.png",
      description:
        "Mit über 25 Jahren Erfahrung in der Brandschutzplanung und -beratung. Zertifizierter Sachverständiger für vorbeugenden Brandschutz.",
      qualifications: [
        "Türenplanung (Rauch,-Brand.-Flucht und Sicherheitstüren)",
        "Fachplaner für vorbeugenden Brandschutz (TÜV Süd Akademie)",
        "Geprüfter Sachverständiger für vorbeugenden Brandschutz (EIPOS - Reg.-Nr. 1294-ST-01-2017)",
        "Sachverständiger für vorbeugenden Brandschutz (EIPOS)",
        "Brandschutzbeauftragter (TÜV Süd Akademie)",
        "Projektmanagement (IHK)",
        "Qualitätssicherung im Bereich Brandschutz (Türen & Brandabschottungen)",
        "Rauchsimulationen in Gebäuden"
      ]
    },
    {
      name: "Tatjana Arnold",
      title: "Administration und Büroleitung",
      image: "/lovable-uploads/101e1314-6274-415b-b2ce-23488969b23c.png",
      description:
        "Diplom-Betriebswirtin (FH) mit umfassender Expertise in Verwaltung und Projektkoordination. Verantwortlich für reibungslose Büroabläufe und Kundenbetreuung.",
    },
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-12">
          Unser Team
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-muted rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square w-48 mx-auto mb-6 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.title}</p>
                <p className="text-secondary/80">{member.description}</p>
                {member.qualifications && (
                  <ul className="mt-4 text-left list-disc pl-6 text-secondary/80">
                    {member.qualifications.map((qual, index) => (
                      <li key={index} className="mb-1">{qual}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
