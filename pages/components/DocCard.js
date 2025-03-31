import { FaFileAlt, FaDownload, FaCalendarAlt, FaTag } from 'react-icons/fa';

export default function DocCard({ doc }) {
  // Si doc n'est pas défini, on retourne null pour éviter les erreurs
  if (!doc) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition" id={doc.id}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <FaFileAlt className="text-blue-600 text-3xl" />
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2">{doc.titre}</h3>

          <div className="flex flex-wrap text-sm text-gray-500 mb-3">
            <div className="flex items-center mr-4">
              <FaCalendarAlt className="mr-1" />
              <span>{new Date(doc.date).toLocaleDateString('fr-FR')}</span>
            </div>

            <div className="flex items-center">
              <FaTag className="mr-1" />
              <span>{doc.categorie}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-4">{doc.description}</p>

          <a 
            href={doc.lien} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <FaDownload className="mr-2" />
            Télécharger
          </a>
        </div>
      </div>
    </div>
  );
}