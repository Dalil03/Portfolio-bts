"use client";
import React from "react";

export default function SynthesisTable() {
  const competences = [
    {
      bloc: "Bloc 1 - Support et mise à disposition de services informatiques",
      activites: [
        { id: "A1.1", nom: "Gestion du patrimoine informatique", niveau: 3 },
        { id: "A1.2", nom: "Répondre aux incidents", niveau: 2 },
        { id: "A1.3", nom: "Développement de la présence en ligne", niveau: 3 },
        { id: "A1.4", nom: "Travail en mode projet", niveau: 2 },
      ],
    },
    {
      bloc: "Bloc 2 - SLAM : Conception et développement d'applications",
      activites: [
        {
          id: "A2.1",
          nom: "Conception et développement d'une solution applicative",
          niveau: 3,
        },
        {
          id: "A2.2",
          nom: "Maintenance corrective ou évolutive d'une solution applicative",
          niveau: 2,
        },
        { id: "A2.3", nom: "Gestion des données", niveau: 3 },
      ],
    },
    {
      bloc: "Bloc 3 - Cybersécurité des services informatiques",
      activites: [
        {
          id: "A3.1",
          nom: "Protection des données à caractère personnel",
          niveau: 2,
        },
        { id: "A3.2", nom: "Préservation de l'identité numérique", niveau: 2 },
        { id: "A3.3", nom: "Sécurisation des équipements", niveau: 3 },
        {
          id: "A3.4",
          nom: "Garantie de la disponibilité et de la continuité des services",
          niveau: 2,
        },
      ],
    },
  ];

  // Fonction pour afficher les niveaux de compétence
  const renderNiveau = (niveau) => {
    const maxNiveau = 3;
    return (
      <div className="flex">
        {[...Array(maxNiveau)].map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full mx-1 ${
              i < niveau ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border text-left">Bloc de compétences</th>
            <th className="py-2 px-4 border text-left">Activité</th>
            <th className="py-2 px-4 border text-center">Niveau</th>
          </tr>
        </thead>
        <tbody>
          {competences.map((bloc, idx) => (
            // Utilisation correcte d'un Fragment avec une key
            <React.Fragment key={idx}>
              {bloc.activites.map((activite, index) => (
                <tr key={activite.id} className="hover:bg-gray-50">
                  {/* N'afficher la cellule du bloc qu'à la première ligne de chaque bloc */}
                  {index === 0 && (
                    <td
                      className="py-3 px-4 border"
                      rowSpan={bloc.activites.length}
                    >
                      {bloc.bloc}
                    </td>
                  )}
                  <td className="py-3 px-4 border">
                    <span className="font-medium">{activite.id}</span> -{" "}
                    {activite.nom}
                  </td>
                  <td className="py-3 px-4 border text-center">
                    {renderNiveau(activite.niveau)}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}