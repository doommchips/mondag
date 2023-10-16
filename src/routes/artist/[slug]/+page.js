import { error } from "@sveltejs/kit";

import { getArtist } from "$lib/utils/sanity";

export const ssr = false;

// export async function load({ params }) {
export const load = async ({ params }) => {
  const artist = await getArtist(params.slug);
  if (artist) return artist;

  throw error(404, "Not found");
};
