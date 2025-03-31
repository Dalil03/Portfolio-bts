import React from 'react';
import Head from 'next/head';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython, FaDatabase, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import Layout from '../app/Layout/Layout';

export default function About() {
  return (
    <Layout>
      <div className="container mt-24 mx-auto px-4 py-8 max-w-6xl">
        <Head>
          <title>À propos de moi | Mon Portfolio</title>
          <meta name="description" content="Mon parcours professionnel et mes compétences en développement web" />
        </Head>

        <main>
          <section className="mb-20">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">À propos de moi</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-lg mb-6 leading-relaxed">
                Après mon bac pro en maintenance automobile, je me suis réorienté vers l'informatique, ma véritable passion. J'ai suivi une formation chez DORANCO où j'ai appris HTML, CSS, JavaScript, PHP, SQL et j'ai poursuivi mon apprentissage en autodidacte avant de m'inscrire à l'école IPSSI.
              </p>
              <p className="text-lg leading-relaxed">
                Ma première expérience professionnelle en programmation informatique a été la refonte du site de l'association "VivreDebout", où j'ai été chargé de la partie front-end.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">Mon parcours</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                    <FaGraduationCap className="text-3xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">Formation</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span>Formation développement web - DORANCO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span>École IPSSI - Développement informatique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span>Bac Pro Maintenance Automobile</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full mr-4">
                    <FaBriefcase className="text-3xl text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">Expérience</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                    <span>Développeur front-end - Association "VivreDebout"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                    <span>Projets clients lors de la formation IPSSI</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full mr-4">
                    <FaCode className="text-3xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">Autodidacte</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></span>
                    <span>Formation continue en ligne (Udemy, OpenClassrooms)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></span>
                    <span>Projets personnels pour renforcer mes compétences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></span>
                    <span>Veille technologique et expérimentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">Compétences techniques</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-orange-300">
                <div className="flex items-center mb-4">
                  <FaHtml5 className="text-5xl text-orange-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">HTML5</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-orange-500 h-2.5 rounded-full w-11/12"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Structure sémantique et accessibilité web</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-blue-300">
                <div className="flex items-center mb-4">
                  <FaCss3Alt className="text-5xl text-blue-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">CSS3</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-blue-500 h-2.5 rounded-full w-10/12"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Styles avancés, animations et responsive design</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-yellow-300">
                <div className="flex items-center mb-4">
                  <FaJs className="text-5xl text-yellow-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">JavaScript</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-yellow-500 h-2.5 rounded-full w-9/12"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">ES6+, programmation asynchrone, APIs</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-blue-300">
                <div className="flex items-center mb-4">
                  <FaReact className="text-5xl text-blue-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">React</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-blue-400 h-2.5 rounded-full w-8/12"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Développement d'interfaces utilisateur modernes</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-green-300">
                <div className="flex items-center mb-4">
                  <FaNode className="text-5xl text-green-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">Node.js</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-green-600 h-2.5 rounded-full w-7/12"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Développement back-end et APIs RESTful</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-blue-300">
                <div className="flex items-center mb-4">
                  <FaPython className="text-5xl text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">Python</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-blue-600 h-2.5 rounded-full w-6/12"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Traitement de données et automatisation</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-gray-300" style={{gridColumn: "span 3"}}>
                <div className="flex items-center mb-4">
                  <FaDatabase className="text-5xl text-gray-600 mr-4" />
                  <div className="w-full">
                    <h3 className="text-xl font-semibold">Bases de données</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <span className="text-sm font-medium">MySQL</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                          <div className="bg-gray-600 h-2.5 rounded-full w-9/12"></div>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium">MongoDB</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                          <div className="bg-gray-600 h-2.5 rounded-full w-7/12"></div>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium">PostgreSQL</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                          <div className="bg-gray-600 h-2.5 rounded-full w-6/12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Conception, optimisation et gestion de bases de données relationnelles et non-relationnelles</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}