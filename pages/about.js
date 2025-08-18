import React from 'react';
import Head from 'next/head';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPhp, FaDatabase,  } from 'react-icons/fa';
import Layout from './Layout';

export default function About() {
  return (
    <Layout>
      <div className="container mt-24 mx-auto px-4 py-8 max-w-6xl">
        <Head>
          <title>À propos de moi | Mon Portfolio</title>
          <meta name="description" content="Mon parcours professionnel et mes compétences en développement web" />
        </Head>

        <main>
  
      

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
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-green-300">
                <div className="flex items-center mb-4">
                  <FaPhp className="text-5xl text-violet-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">PHP</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-violet-600 h-2.5 rounded-full w-7/12"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Développement back-end et APIs RESTful</p>
              </div>
              <div >
                
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
                        {/* <span className="text-sm font-medium">MongoDB</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                          <div className="bg-gray-600 h-2.5 rounded-full w-7/12"></div>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium">PostgreSQL</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                          <div className="bg-gray-600 h-2.5 rounded-full w-6/12"></div>
                        </div> */}
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