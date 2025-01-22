import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "anne0qic",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-01-12",
  token: process.env.SANITY_API_TOKEN, // (Optional, only for write access)
});
