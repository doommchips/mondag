import { getArtists } from "$lib/utils/sanity";
import { getExhibitions } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";

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