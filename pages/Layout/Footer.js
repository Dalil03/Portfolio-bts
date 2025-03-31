// components/Footer.js
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Portfolio BTS SIO</h3>
            <p className="text-gray-400 mt-1">© {new Date().getFullYear()} - Prénom NOM</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/votre-profil/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/votre-profil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="mailto:votre-email@example.com" className="hover:text-blue-400">
              <FaEnvelope className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            Réalisé avec Next.js et Tailwind CSS
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link href="/">
              <a className="hover:text-white">Accueil</a>
            </Link>
            <Link href="/projets">
              <a className="hover:text-white">Projets</a>
            </Link>
            <Link href="/veille">
              <a className="hover:text-white">Veille</a>
            </Link>
            <Link href="/parcours">
              <a className="hover:text-white">Parcours</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-white">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}