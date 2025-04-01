import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ projet }) {
  // Add a default check if projet is undefined
  if (!projet) {
    return <div>Chargement...</div>;
  }
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-56">
        <Image 
          src={projet?.image || '/placeholder-project.jpg'} 
          alt={projet?.titre || 'Projet'} 
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{projet?.titre || 'Titre du projet'}</h3>
        <p className="text-gray-600 mb-4">{projet?.description || 'Description du projet'}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies utilisées :</h4>
          <div className="flex flex-wrap gap-2">
            {projet?.technologies?.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {projet?.lien && (
          <Link 
            href={projet.lien}
            className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            Voir les détails →
          </Link>
        )}
      </div>
    </div>
  );
}