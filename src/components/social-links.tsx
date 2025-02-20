import React from 'react';
import { Linkedin, FileText, X } from 'lucide-react';
import Data from '@/app/data.json';

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-16 cursor-pointer transform transition-transform duration-200">
      <a
        href={Data.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-teal-300 transition-colo s"
      >
        <Linkedin size={24} />
      </a>
      <a
        href={Data.devTo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-teal-300 transition-colors"
      >
        <FileText size={24} />
      </a>
      <a
        href={Data.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-teal-300 transition-colors"
      >
        <X size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;