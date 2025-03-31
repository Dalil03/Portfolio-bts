import Image from 'next/image';

export default function VeilleCard({ sujet }) {
  // Si sujet n'est pas défini, on retourne null pour éviter des erreurs
  if (!sujet) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/3 h-48 md:h-auto">
          <Image 
            src={sujet.image } 
            alt={sujet.titre} 
            layout="fill" 
            objectFit="cover" 
          />
        </div>

        <div className="p-6 md:w-2/3">
          <h3 className="text-xl font-bold mb-3">{sujet.titre}</h3>
          <p className="text-gray-600 mb-4">{sujet.description}</p>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Ressources et liens :</h4>
            <ul className="space-y-2">
              {sujet.liens && sujet.liens.length > 0 ? (
                sujet.liens.map((lien, index) => (
                  <li key={index}>
                    <a 
                      href={lien.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {lien.titre} ↗
                    </a>
                  </li>
                ))
              ) : (
                <li>Aucun lien disponible</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}