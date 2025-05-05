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
      titre: "(AP2)",
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
    technologies: ["flutter"],
    image: "/projets/app-mobile.jpg",
    lien: "https://github.com/Shabich/MediCall"
  },
    {
      id: 6,
      titre: "Site web Vivre Debout",
      description: "Site web pour l'association Vivre debout effectuer en stage de 1ère année.",
      technologies: ["React"],
      image: "/vivredebout.png",
      lien: "https://github.com/Dalil03/VivreDeboutPrototype"
    },
    {
      id: 7,
      titre: "Site web Fleepit Belem Lyrics ",
      description: "Site web pour 1 Plus V effectué en stage de 2ème année.",
      technologies: ["php", "CSS","html"],
      image: "/belem-image.png",
      lien: "https://belem.fleepit.com/"
    },
    {
      id: 8,
      titre: "Site web TAE Paris ",
      description: "Site web pour 1 Plus V effectué en stage de 2ème année.",
      technologies: ["php", "CSS","html"],
      image: "/TAE-Paris.png",
      lien: "https://fleepit-digital.clients.ipsolution.fr/Sharepoint/TAEParis/outils.php?tkn=ff9f8a2774994d2e9ec3a2dd2ef7bc6"
    },
    {
      id: 9,
      titre: "Site web AJUP ",
      description: "Site web pour 1 Plus V effectué en stage de 2ème année.",
      technologies: ["php", "CSS","html"],
      image: "/AJUP.png",
      lien: "https://fleepit-digital.clients.ipsolution.fr/Sharepoint/Ajup/outils.php?tkn=ff9f8a2774994d2e9ec3a2dd2ef7bc6"
    },
    {
      id: 10,
      titre: "Site web TAE ",
      description: "Site web pour 1 Plus V effectué en stage de 2ème année.",
      technologies: ["php", "CSS","html"],
      image: "/TAE-Affaire.png",
      lien: "https://fleepit-digital.clients.ipsolution.fr/Sharepoint/Ajup/outils.php?tkn=ff9f8a2774994d2e9ec3a2dd2ef7bc6"
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