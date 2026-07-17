import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

export async function sanityFetch<T>(options: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
}): Promise<T> {
  return sanityClient.fetch<T>(options.query, options.params ?? {}, {
    next: {
      revalidate: 60,
      tags: options.tags,
    },
  });
}

