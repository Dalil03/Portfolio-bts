"use client"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import  RootLayout from "./Layout";
import { FaLinkedin, FaGithub, FaFileDownload, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPhp, FaDatabase } from "react-icons/fa";

export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Portfolio BTS SIO - Accueil</title>
        <meta name="description" content="Portfolio BTS SIO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container  mx-auto px-4 py-35">
        <div className="flex flex-col-reverse md:flex-row  items-center justify-between mb-12">

          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Dalil Bousseiri</h1>
            <h2 className="text-2xl text-gray-600 mb-6">Developpeur/Freelance</h2>
            <p className="text-lg text-gray-700 mb-6">
             Bonjour, je m'appelle Dalil Bousseiri. Ayant plusieurs projets à mon actif, je serais ravi de mettre à votre disposition mon expérience.
            </p>

            {/* Liens externes */}
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.linkedin.com/in/dalil-bousseiri-139024256/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-blue-700 transition"
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
           
           
            </div>

       
          </div>

          <div className="md:w-1/3 ">
            <div className="relative mb-20  shadow-xl  shadow-purple-600/20  w-64 h-64 rounded-full overflow-hidden   mx-auto">
              <Image
                src="/image.jpg"
                alt="Photo de profil"
                fill
                style={{ objectFit: "cover " }}
              />
            </div>
          </div>
        </div>
     {/* Compétences techniques (logos) */}
            <div className=" mt-25  ">

              <h2 className="text-3xl font-bold mb-4">Compétences techniques</h2>
              <div className="flex items-center flex-wrap gap-6 text-6xl">

                <FaHtml5 className="text-orange-500" />
                <img src="/tailwind.svg" alt="html" className="w-20 h-20" />
                  <img src="/nextjs.png" alt="html" className="w-14 h-14" />
                <FaCss3Alt className="text-blue-500" />
                <FaJs className="text-yellow-500" />
                <FaReact className="text-blue-400" />
                <FaNode className="text-green-600" />
                <FaPhp className="text-violet-600" />
                <FaDatabase className="text-gray-600" />
              </div>
            </div>
   
      </main>
    </RootLayout>
  );
}
