import React from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';

interface ShareButtonProps {
  platform: string;
  url: string;
  color?: string;  // Optional color prop
}

const ShareButton: React.FC<ShareButtonProps> = ({ platform, url, color }) => {
  let Icon: React.ElementType;

  switch (platform) {
    case 'whatsapp':
      Icon = FaWhatsapp;
      break;
    case 'instagram':
      Icon = FaInstagram;
      break;
    case 'twitter':
      Icon = FaTwitter;
      break;
    case 'facebook':
      Icon = FaFacebook;
      break;
    case 'email':
      Icon = FaEnvelope;
      break;
    default:
      return null;
  }

  // Use default color if none is provided
  const platformColor = color || 'text-gray-600';

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`hover:text-blue-700 ${platformColor} transition-colors`}>
      <Icon className="text-2xl mx-2" />
    </a>
  );
};

export default ShareButton;
