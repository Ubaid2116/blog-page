import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from '../../types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataSet = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export const client = createClient({
  projectId,
  dataset: dataSet,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// Use SanityImageSource type instead of any
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
