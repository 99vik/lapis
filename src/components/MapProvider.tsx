'use client';

import { useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (loadError)
    return (
      <div className="w-[90%] h-[400px] bg-zinc-800 rounded-[15px] mx-auto flex items-center justify-center">
        Error while loading map.
      </div>
    );

  if (!scriptLoaded)
    return (
      <div className="w-[90%] h-[400px] bg-zinc-800 animate-pulse rounded-[15px] mx-auto" />
    );

  return children;
}
