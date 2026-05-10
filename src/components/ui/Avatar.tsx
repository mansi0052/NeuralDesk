import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
};

export function Avatar({ src, alt, initials, size = 'md', className }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={`inline-flex items-center justify-center rounded-full bg-[--surface-secondary] text-[--text-primary] font-semibold ${sizeClasses[size]} ${className || ''}`}
    >
      {src && (
        <AvatarPrimitive.Image
          src={src}
          alt={alt || 'Avatar'}
          className="h-full w-full rounded-full object-cover"
        />
      )}
      <AvatarPrimitive.Fallback>{initials || '?'}</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
