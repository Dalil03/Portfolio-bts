import Head from 'next/head';
import Layout from './Layout';
import ProjectCard from './components/ProjetCard';

export default function Projets() {
  // Exemple de projets - à remplacer par vos propres projets
  const projets = [
    {
      id: 1,
      titre: "Entreprise Fictive (AP1)",
      description: "Création de l'entreprise fictive Fusion Taste.",
      technologies: [ "canva"],
      image: "/AP1.png",
      lien: "https://github.com/Pakku73/tastewebsite2"
    },
    {
      id: 2,
      titre: "Site web dynamique (AP2)",
      description: "Création du site web de l'entreprise fictive Fusion Taste.",
      technologies: [ "trello", "Gantt","Uml"],
      image: "/gantt.png",
      lien: "/documentation#ap2"
    },
    {
     id: 4,
     titre: "Site Web GSB (AP3)",
     description: "Développement d'une application mobile pour la gestion de tâches personnelles.",
     technologies: ["React", "TypeScript", "Tailwind CSS","Vite","Node.js","Express"],
     image: "/AP3.png",
     lien: "https://github.com/Shabich/GestInv"
   },
   {
    id: 5,
    titre: "Application mobile GSB (AP4)",
    description: "Développement de l'application mobile GSB. ",
    technologies: ["Dart", "C++", "Ruby","Cmake"],
    image: "/projets/app-mobile.jpg",
    lien: "https://github.com/Shabich/MediCall"
  },
    {
      id: 6,
      titre: "Site web Vivre Debout",
      description: "Site web pour l'association Vivre debout effectuer en stage de 1ère année.",
      technologies: ["Javascript", "CSS"],
      image: "/vivredebout.png",
      lien: "https://github.com/Dalil03/VivreDeboutPrototype"
    },

  ];

  return (
    <Layout>
      <Head>
        <title>Portfolio BTS SIO - Mes Projets</title>
        <meta name="description" content="Projets réalisés pendant mon BTS SIO" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 pb-2 border-b-2">Mes projets</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map(projet => (
            <ProjectCard key={projet.id} projet={projet} />
          ))}
        </div>
      </main>
    </Layout>
  );
}