import Head from 'next/head';
import { useState } from 'react';
import Layout from './Layout';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  
  const [formState, setFormState] = useState({
    status: null,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ici, vous pouvez intégrer un service d'envoi d'emails comme EmailJS, Formspree, etc.
    // Pour l'exemple, nous simulons juste une réponse réussie
    
    // Simulation d'envoi (à remplacer par un vrai service)
    setFormState({
      status: 'success',
      message: 'Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.'
    });
    
    // Réinitialisation du formulaire
    setFormData({
      nom: '',
      email: '',
      sujet: '',
      message: ''
    });
    
    // Pour simuler un échec, vous pouvez utiliser:
    // setFormState({
    //   status: 'error',
    //   message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.'
    // });
  };

  return (
    <Layout>
      <Head>
        <title>Portfolio BTS SIO - Contact</title>
        <meta name="description" content="Me contacter" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 pb-2 border-b-2">Me contacter</h1>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Formulaire de contact */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {formState.status && (
                <div className={`mb-6 p-4 rounded-md ${
                  formState.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {formState.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nom" className="block text-gray-700 font-medium mb-2">Nom complet</label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
          
          {/* Coordonnées */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h2 className="text-xl font-bold mb-6">Mes coordonnées</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-blue-600">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:bousseirid@gmail.com" className="text-blue-600 hover:underline">
                     bousseirid@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-blue-600">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <a href="tel:+33612345678" className="text-blue-600 hover:underline">
                      +33 7 60 40 45 29
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-blue-600">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-medium">Localisation</h3>
                    <p className="text-gray-600">
                      Guyancourt, France
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Disponibilité</h2>
                <p className="text-gray-600">
                  Je suis actuellement indisponible pour le moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}