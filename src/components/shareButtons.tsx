// components/shareButtons/ShareButton.tsx

import React from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';

interface ShareButtonProps {
  platform: string;
  url: string;
  color?: string;  // Optional color prop
}

const platformColors: Record<string, string> = {
  whatsapp: 'text-green-500',
  instagram: 'text-pink-500',
  twitter: 'text-blue-400',
  facebook: 'text-blue-600',
  email: 'text-gray-600',
};

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

  // Use platform-specific color if provided, otherwise fallback to default color
  const platformColor = color || platformColors[platform] || 'text-gray-600';

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`transition-colors hover:text-blue-700 ${platformColor}`} 
      aria-label={`Share on ${platform}`}
    >
      <Icon className="text-2xl mx-2" />
    </a>
  );
};

export default ShareButton;
