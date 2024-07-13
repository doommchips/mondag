import { createClient } from "@sanity/client";

import groq from "groq";

import {
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
} from "$env/static/public";

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
  throw new Error("Did you forget to run sanity init --env?");
}

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20", // date of setup
});

export async function getArtists() {
  return await client.fetch(
    groq`*[_type == "artist" && defined(slug.current)] | order(lower(title) desc)`
  );
}

export async function getArtist(slug) {
  return await client.fetch(
    groq`*[_type == "artist" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export async function getExhibitions() {
  return await client.fetch(
    groq`*[_type == "exhibition"]{
      title,
      startDate,
      closeDate,
      location,
      mainImage
    } | order(lower(title) asc)`
  );
}
export async function getExhibitionPhotos() {
  return await client.fetch(
    groq`*[_type == "exhibition"]{
      images
    }[0...5]`
  );
}