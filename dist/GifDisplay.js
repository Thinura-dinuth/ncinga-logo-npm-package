import { jsx as _jsx } from "react/jsx-runtime";
import { NCINGA_LOGO_GIF } from './assets';
const GifDisplay = ({ className = '', width, height, alt = 'Ncinga Logo Animation', gifSrc, useEmbedded = true, // Default to using embedded GIF
showShadow = false // Default to no shadow to preserve transparency
 }) => {
    // Determine which source to use
    const imageSrc = useEmbedded
        ? NCINGA_LOGO_GIF
        : (gifSrc || 'https://raw.githubusercontent.com/Thinura-dinuth/ncinga-logo-npm-package/main/package/public/ncinga%20logo.gif');
    // Fallback handler in case external source fails
    const handleImageError = (e) => {
        const img = e.target;
        // If external source fails, fall back to embedded
        if (!useEmbedded && img.src !== NCINGA_LOGO_GIF) {
            console.warn('External GIF failed to load, falling back to embedded version');
            img.src = NCINGA_LOGO_GIF;
        }
    };
    // Container styles - ensure transparency is preserved
    const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent' // Explicitly transparent
    };
    // Image styles - preserve transparency and add optional shadow
    const imageStyles = Object.assign({ maxWidth: '100%', height: 'auto', background: 'transparent' }, (showShadow && {
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' // Use filter instead of box-shadow for transparency
    }));
    return (_jsx("div", { className: className, style: containerStyles, children: _jsx("img", { src: imageSrc, alt: alt, width: width, height: height, style: imageStyles, loading: "lazy", onError: handleImageError }) }));
};
export default GifDisplay;
