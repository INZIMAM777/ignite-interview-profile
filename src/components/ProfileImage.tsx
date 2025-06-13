
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const ProfileImage = ({ 
  src = "/placeholder.svg", 
  alt = "Profile Picture", 
  size = 'lg',
  className = ""
}: ProfileImageProps) => {
  const sizeClasses = {
    sm: 'h-16 w-16',
    md: 'h-24 w-24',
    lg: 'h-32 w-32',
    xl: 'h-40 w-40'
  };

  return (
    <div className={`relative ${className}`}>
      <Avatar className={`${sizeClasses[size]} ring-4 ring-purple-500/20 hover:ring-purple-500/40 transition-all duration-300`}>
        <AvatarImage 
          src={src} 
          alt={alt}
          className="object-cover"
        />
        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-bold">
          {alt.split(' ').map(word => word[0]).join('').toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
    </div>
  );
};

export default ProfileImage;
