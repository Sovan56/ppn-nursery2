import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  alt: string;
}

const DEFAULT_PLANT_FALLBACK = "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80";

const BOTANICAL_SVG_FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f1f7f2'/%3E%3Cpath d='M300 100C230 160 200 240 200 300H400C400 240 370 160 300 100Z' fill='%231b5e20' fill-opacity='0.15'/%3E%3Cpath d='M300 100V300' stroke='%232e7d32' stroke-width='4' stroke-linecap='round'/%3E%3Ccircle cx='300' cy='200' r='120' stroke='%234caf50' stroke-width='2' stroke-dasharray='6 6' fill='none'/%3E%3Ctext x='50%25' y='82%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='600' font-size='18' fill='%231b5e20'%3EPPN Nursery%3C/text%3E%3C/svg%3E";

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = DEFAULT_PLANT_FALLBACK,
  className = '',
  onError,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc);
  const [errorCount, setErrorCount] = useState<number>(0);

  useEffect(() => {
    setImgSrc(src || fallbackSrc);
    setErrorCount(0);
  }, [src, fallbackSrc]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (errorCount === 0 && fallbackSrc && imgSrc !== fallbackSrc) {
      setErrorCount(1);
      setImgSrc(fallbackSrc);
    } else if (errorCount <= 1 && imgSrc !== BOTANICAL_SVG_FALLBACK) {
      setErrorCount(2);
      setImgSrc(BOTANICAL_SVG_FALLBACK);
    }

    if (onError) {
      onError(e);
    }
  };

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt || 'PPN Nursery Plant'}
      referrerPolicy="no-referrer"
      onError={handleError}
      className={className}
    />
  );
};

export default SafeImage;
