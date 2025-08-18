import Head from 'next/head';
import Layout from './Layout';
import ProjectCard from './components/ProjetCard';

export default function Projets() {
  // Exemple de projets - à remplacer par vos propres projets
  const projets = [
    {
     id: 1,
     titre: "rimconciergerie ",
     description: "Site de conciergerie effectué en freelance.",
     technologies: ["Next", "TypeScript","Tailwind CSS","Node.js","Express"],
     image: "/rim.png",

     lien: "https://rimconciergerie.fr/"
   },
        {
     id: 2,
     titre: "kevannProduction",
     description: "Site dédié aux prestations de production vidéo réalisées en freelance.",

     technologies: ["Next", "TypeScript","Tailwind CSS"],
     image: "/kevannProduction.png",

     lien: "https://kevann-production-5qn6-h4n0i28az-dalil03s-projects.vercel.app/accueil"
   },

    {
      id: 3,
      titre: "Fleepit Belem Lyrics (collaboration avec Deezer)",
      description: "Site web pour 1 Plus V effectué en stage de 2ème année.",
      technologies: ["php", "CSS","html"],
      image: "/belem-image.png",
      lien: "https://belem.fleepit.com/"
    },
    {
      id: 4,
      titre: " TAE Paris ",
      description: "Outils Pdf réalisé chez 1 Plus V en stage de 2ème année.",
      technologies: ["php", "CSS","html"],
      image: "/TAE-paris.png",
      lien: "https://fleepit-digital.clients.ipsolution.fr/Sharepoint/TAEParis/outils.php?tkn=ff9f8a2774994d2e9ec3a2dd2ef7bc6"
    },
    {
      id: 5,
      titre: "Site web AJUP ",
      description: "Outils Pdf réalisé chez 1 Plus V en stage de 2ème année.",
      technologies: ["php", "CSS","html"],
      image: "/AJUP.png",
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