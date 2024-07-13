import { getArtists, getExhibitions, getExhibitionPhotos } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });

export const load = async () => {
  try {
    const [artists, exhibitions, exhibitionPhotos] = await Promise.all([
      getArtists(),
      getExhibitions(),
      getExhibitionPhotos()
    ]);

    if (!artists || !exhibitions || !exhibitionPhotos) {
      throw new Error('One or more required data sets could not be fetched');
    }

    return { artists, exhibitions, exhibitionPhotos };
  } catch (e) {
    console.error(e.message); // Log the error for debugging purposes
    return error(500, "An error occurred while fetching data.");
  }
};