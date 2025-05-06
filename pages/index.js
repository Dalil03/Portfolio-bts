"use client"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import  RootLayout from "./Layout";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export default function Home() {
  return (

 
    <RootLayout>
      <Head>
        <title>Portfolio BTS SIO - Accueil</title>
        <meta name="description" content="Portfolio BTS SIO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="container
      mt-24 mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Dalil Bousseiri</h1>
            <h2 className="text-2xl text-gray-600 mb-6">Étudiant en BTS SIO Option Slam</h2>
            <p className="text-lg text-gray-700 mb-6">
              Bienvenue sur mon portfolio ! Je suis passionné par le développement
              web. Actuellement en formation BTS SIO option SLAM
            , je me spécialise dans la programmation informatique.
              {/* Option à préciser : SLAM ou SISR */}
            </p>

            <div className="flex space-x-4 mb-6">
              {/* Liens externes -> toujours un <a> classique */}
              <a
                href="https://www.linkedin.com/in/dalil-bousseiri-139024256/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/Dalil03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                <FaFileDownload className="mr-2" /> CV
              </a>
              <a
                href="/Tableau.pdf"
                target="_blank"
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                <FaFileDownload className="mr-2" /> Tableau de synthèse
              </a>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300 mx-auto">
              <Image
                src="/image.jpg"
                alt="Photo de profil"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

     

        <div className="grid grid-cols-1  md:grid-cols-3 gap-8 mt-32">
          {/* Liens internes -> utiliser <Link> sans <a> */}
          <Link
            href="/projets"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">Mes projets</h3>
            <p className="text-gray-600">
              Découvrez les projets réalisés pendant ma formation
            </p>
          </Link>

          <Link
            href="/veille"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">Veille technologique</h3>
            <p className="text-gray-600">
              Ma veille sur les nouvelles technologies
            </p>
          </Link>

          <Link
            href="/documentation"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">Documentation</h3>
            <p className="text-gray-600">
              Documentation technique des projets et ateliers
            </p>
          </Link>
        </div>
      </main>
    </RootLayout>
  );
}
