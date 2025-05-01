import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
}

/**
 * OptimizedImage component that implements best practices for image loading
 * - Uses native lazy loading
 * - Uses async decoding
 * - Adds width and height attributes to prevent layout shifts
 * - Supports local and remote images
 */
export const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
}: OptimizedImageProps) => {
  // Check if the image is from an external source
  const isExternal = src.startsWith('http');
  
  // For external images, add query parameters to resize if width is provided
  const optimizedSrc = isExternal && width 
    ? `${src}${src.includes('?') ? '&' : '?'}w=${width}&auto=format,compress` 
    : src;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
    />
  );
};

export default OptimizedImage;
