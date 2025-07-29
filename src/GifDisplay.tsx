import React from 'react';
import { NCINGA_LOGO_GIF } from './assets';

interface GifDisplayProps {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  gifSrc?: string; // Allow custom GIF source
  useEmbedded?: boolean; // Option to use embedded or custom GIF
  showShadow?: boolean; // Option to show/hide shadow
}

const GifDisplay: React.FC<GifDisplayProps> = ({
  className = '',
  width,
  height,
  alt = 'Ncinga Logo Animation',
  gifSrc,
  useEmbedded = true, // Default to using embedded GIF
  showShadow = false // Default to no shadow to preserve transparency
}) => {
  // Determine which source to use
  const imageSrc = useEmbedded 
    ? NCINGA_LOGO_GIF 
    : (gifSrc || 'https://raw.githubusercontent.com/Thinura-dinuth/ncinga-logo-npm-package/main/package/public/ncinga%20logo.gif');

  // Fallback handler in case external source fails
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.target as HTMLImageElement;
    
    // If external source fails, fall back to embedded
    if (!useEmbedded && img.src !== NCINGA_LOGO_GIF) {
      console.warn('External GIF failed to load, falling back to embedded version');
      img.src = NCINGA_LOGO_GIF;
    }
  };

  // Container styles - ensure transparency is preserved
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent' // Explicitly transparent
  };

  // Image styles - preserve transparency and add optional shadow
  const imageStyles: React.CSSProperties = {
    maxWidth: '100%',
    height: 'auto',
    background: 'transparent', // Ensure image background is transparent
    ...(showShadow && {
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' // Use filter instead of box-shadow for transparency
    })
  };

  return (
    <div 
      className={className}
      style={containerStyles}
    >
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        style={imageStyles}
        loading="lazy"
        onError={handleImageError}
      />
    </div>
  );
};

export default GifDisplay;
