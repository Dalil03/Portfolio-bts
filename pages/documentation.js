import Head from 'next/head';
import { useState } from 'react';
import Layout from '../app/Layout/Layout';
import DocCard from '../app/components/DocCard';
import { FaSearch, FaFilter } from 'react-icons/fa';

export default function Documentation() {
  // Exemple de documents - à remplacer par vos propres documents
  const documents = [
    {
      id: "ap1",
      titre: "Documentation AP1 - Entreprise Fictive",
      description: "Documentation technique du projet AP1 de l'entreprise fictive Fustion Taste.",
      categorie: "Projet Scolaire",
      date: "01-12-24",
      lien: "/ap1-diapo.pdf"
    },
    {
      id: "ap2",
      titre: "Documentation AP2 - Site Entreprise Fictive",
      description: "Documentation technique du projet AP2 sur la création du site web Fusion Taste",
      categorie: "Projet Scolaire",
      date: "01-26-24",
      lien: "/doc-ap2.pdf"
    },
 
    {
      id: "ap3",
      titre: "Documentation AP3 - Site web GSB",
      description: "Documentation technique du projet AP3 sur la création du site web GSB",
      categorie: "Projet Scolaire",
      date: "01-20-25",
      lien: "/doc-ap3.pdf"
    },
    {
      id: "ap4",
      titre: "Documentation AP4 - Application Mobile",
      description: "Documentation technique du projet AP4 sur la création de l'application mobile GSB",
      categorie: "Projet Scolaire",
      date: "03-10-25",
      lien: "/doc-ap4.pdf"
    },
    {
      id: "glpi",
      titre: "Guide d'installation et configuration GLPI",
      description: "Documentation détaillée sur l'installation et la configuration de GLPI pour la gestion de parc informatique.",
      categorie: "Outil",
      date: "12-10-23",
      lien: "/doc-glpi.pdf"
    },
    {
      id: "google alert",
      titre: "Guide d'utilisation de google alert",
      description: "Documentation détaillée sur l'utilisation de google alert",
      categorie: "Outil",
      date: "5-10-24",
      lien: "/doc-googleAlert.pdf"
    },
  ];
  
  // État pour la recherche et le filtrage
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');
  
  // Extraire toutes les catégories uniques
  const categories = ['Tous', ...new Set(documents.map(doc => doc.categorie))];
  
  // Filtrer les documents
  const filteredDocs = documents.filter(doc => {
    const matchSearch = doc.titre.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = activeCategory === 'Tous' || doc.categorie === activeCategory;
    
    return matchSearch && matchCategory;
  });

  return (
    <Layout>
      <Head>
        <title>Portfolio BTS SIO - Documentation Technique</title>
        <meta name="description" content="Documentation technique de mes projets et outils" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 pb-2 border-b-2">Documentation technique</h1>
        
        {/* Barre de recherche et filtres */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher dans la documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="flex items-center">
              <FaFilter className="mr-2 text-gray-500" />
              <span className="mr-2 text-gray-600">Filtrer par catégorie:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Liste des documents */}
        <div className="space-y-6">
          {filteredDocs.length > 0 ? (
            filteredDocs.map(doc => (
              <DocCard key={doc.id} doc={doc} />
            ))
          ) : (
            <div className="p-8 text-center bg-gray-100 rounded-lg">
              <p className="text-gray-600">Aucun document ne correspond à votre recherche.</p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}