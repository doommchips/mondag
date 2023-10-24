import { getArtists } from "$lib/utils/sanity";
import { getExhibitions } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });

export const load = async () => {
  const artists = await getArtists();
  const exhibitions = await getExhibitions();

  if (artists) {
    return {
      artists,
      exhibitions
    };
  }

  throw error(404, "Not found");
};