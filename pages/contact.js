import Head from 'next/head';
import { useState } from 'react';
import Layout from './Layout';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {




  return (
    <Layout>
      <Head>
        <title>Portfolio BTS SIO - Contact</title>
        <meta name="description" content="Me contacter" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 pb-2 border-b-2">Me contacter</h1>
        
        <div className="flex  flex-col md:flex-row gap-10">

   {/* Coordonnées */}
          <div className="md:w-1/3 rounded-3xl shadow-lg mt-10 mx-auto">






            <div className="bg-white text-center rounded-lg shadow-lg  shadow-purple-600/60 p-14 h-full">


              <h2 className="text-xl font-bold mb-6">Mes coordonnées</h2>
              
              <div className="space-y-4 flex flex-col items-center"> 

                <div className="flex items-start">
                  <div className="mt-1  text-blue-600">
                  
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:bousseirid@gmail.com" className="text-purple-600 hover:underline">
                     bousseirid@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-blue-600">
                   
                  </div>
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <a href="tel:+33612345678" className="text-purple-600 hover:underline">
                      +33 7 60 40 45 29
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-blue-600">
               
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
                  Je suis actuellement disponible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}