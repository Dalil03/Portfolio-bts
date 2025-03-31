import Head from 'next/head';
import Layout from './Layout';
import { FaGraduationCap, FaBriefcase, FaMedal } from 'react-icons/fa';

export default function Parcours() {
  // Exemple de données de parcours - à remplacer par votre propre parcours
  const formations = [
    {
      id: 1,
      periode: "2023 - 2025",
      titre: "BTS SIO option SLAM",
      etablissement: "IPSSI",
      description: "IPSSI est une école d'informatique proposant des diplômes reconnus dans les métiers du développement web, de la cybersécurité, et du cloud computing. À travers cette formation, je me spécialise dans les technologies actuels afin d'en apprendre plus sur le domaine."
    },
    {
      id: 2,
      periode: "2019 - 2021",
      titre: "Baccalauréat Professionnel",
      etablissement: "Lycée Lucien René Dushesne",
      description: "J'ai suivi un bac pro maintenance des véhicules, où j'ai acquis des compétences techniques dans le diagnostic, la réparation, et l'entretien de véhicules."
    }
  ];
  
  const experiences = [
    {
      id: 1,
      periode: "janvier 2025 - Avril 2025",
      titre: "Stage de deuxième année",
      entreprise: "1 plus V",
      description: "J'interviens sur leurs sites pour diverses missions, allant de la refonte complète à l'intégration de nouvelles fonctionnalités."
    },
    {
      id: 2,
      periode: "Mai 2024 - Juin 2024",
      titre: "Stage de première année",
      entreprise: "Vivre Debout",
      description: "Vivre Debout est une association à but non lucratif, ayant pour but d'aider les personnes en situation de handicap dans leur quotidien. Elle organise des événements comme des sorties, des pièces de théâtre ou encore des activités sportives.Durant mon stage, je me suis chargé d'effectuer la refonte complète de la partie front du site. Je me suis aussi assuré que le site soit accessible aux personnes en situation de handicap."
    }
  ];
  
  // const certifications = [
  //   {
  //     id: 1,
  //     annee: "2024",
  //     titre: "TOEIC - Score 785",
  //     organisme: "ETS Global"
  //   },
  //   {
  //     id: 2,
  //     annee: "2024",
  //     titre: "Certification JavaScript",
  //     organisme: "Codecademy"
  //   }
  // ];

  return (
    <Layout>
      <Head>
        <title>Portfolio BTS SIO - Parcours Scolaire</title>
        <meta name="description" content="Mon parcours scolaire et mes expériences" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 pb-2 border-b-2">Mon parcours</h1>
        
        {/* Formations */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-blue-600 text-2xl mr-3" />
            <h2 className="text-2xl font-bold">Formation</h2>
          </div>
          
          <div className="space-y-6 pl-8 border-l-2 border-gray-200">
            {formations.map(formation => (
              <div key={formation.id} className="relative">
                <div className="absolute -left-10 w-6 h-6 bg-blue-100 border-2 border-blue-600 rounded-full"></div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="text-sm text-gray-500 mb-1">{formation.periode}</div>
                  <h3 className="text-lg font-bold mb-1">{formation.titre}</h3>
                  <div className="text-gray-600 mb-2">{formation.etablissement}</div>
                  <p className="text-gray-700">{formation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Expériences */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-green-600 text-2xl mr-3" />
            <h2 className="text-2xl font-bold">Expériences professionnelles</h2>
          </div>
          
          <div className="space-y-6 pl-8 border-l-2 border-gray-200">
            {experiences.map(experience => (
              <div key={experience.id} className="relative">
                <div className="absolute -left-10 w-6 h-6 bg-green-100 border-2 border-green-600 rounded-full"></div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="text-sm text-gray-500 mb-1">{experience.periode}</div>
                  <h3 className="text-lg font-bold mb-1">{experience.titre}</h3>
                  <div className="text-gray-600 mb-2">{experience.entreprise}</div>
                  <p className="text-gray-700">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        {/* <div>
          <div className="flex items-center mb-6">
            <FaMedal className="text-yellow-600 text-2xl mr-3" />
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map(certification => (
              <div key={certification.id} className="bg-white p-5 rounded-lg shadow-md">
                <div className="text-sm text-gray-500 mb-1">{certification.annee}</div>
                <h3 className="text-lg font-bold mb-1">{certification.titre}</h3>
                <div className="text-gray-600">{certification.organisme}</div>
              </div>
            ))}
          </div>
        </div> */}
      </main>
    </Layout>
  );
}