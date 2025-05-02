import Head from 'next/head';
import Layout from './Layout';
import VeilleCard from './components/VeilleCard';

export default function Veille() {
  // Exemples de sujets de veille - à remplacer par vos propres sujets
  const veilleSujets = [
    {
      id: 1,
      titre: "Yu,Une IA PDG",
      description: "PDG Yu est une figure influente de l'industrie technologique chinoise, connue pour son leadership visionnaire et ses contributions dans le domaine des innovations. Elle incarne le succès des entreprises émergentes et leur impact mondial, notamment à travers des initiatives stratégiques dans les marchés numériques. Sous sa direction, des progrès significatifs ont été réalisés en intelligence artificielle, commerce en ligne et transformation numérique. Sa vision continue de transformer l'économie numérique chinoise, tout en renforçant son rayonnement international.",
      liens: [
        { titre: "diaporama", url: "https://www.canva.com/design/DAF9tMiuDyo/rstAY0sGcVaPOcl6P5_FHw/edit" },
       
      ],
      image: "/yu.jpg"
    },
    {
      id: 2,
      titre: "Nvidia CUDA ",
      description: " NVIDIA CUDA est une plateforme révolutionnaire pour le calcul parallèle, permettant aux développeurs d'exploiter la puissance des GPU pour accélérer les performances des applications. Cette technologie a transformé des domaines tels que l'intelligence artificielle, l'apprentissage automatique et la simulation scientifique. Grâce à CUDA, les calculs massifs et complexes peuvent être exécutés des milliers de fois plus rapidement qu'avec des CPU traditionnels. Elle est devenue une norme incontournable pour les chercheurs et les ingénieurs, favorisant l'innovation dans des secteurs clés. CUDA continue de définir l'avenir du calcul haute performance.",
      liens: [
        { titre: "diaporama", url: "https://prezi.com/view/PPym9oYhN4V1I0Fmv6In/" },
      
      ],
      image: "/cuda.png"
    },

  ];

  return (
    <Layout>
      <Head>
        <title>Portfolio BTS SIO - Veille Technologique</title>
        <meta name="description" content="Ma veille technologique pour le BTS SIO" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 pb-2 border-b-2">Veilles Technologique</h1>
        </div>
        
        <div className="space-y-8">
          {veilleSujets.map(sujet => (
            <VeilleCard key={sujet.id} sujet={sujet} />
          ))}
        </div>
      </main>
    </Layout>
  );
}