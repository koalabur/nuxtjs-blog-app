export default async function useContentful (query: string) {
  const config = useRuntimeConfig();

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${config.public.CONTENTFUL_SPACE}/environments/master`,
    {
      // It's confusing. Just smile and wave
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${config.public.CONTENTFUL_CDA}`,
      },
      body: JSON.stringify({ query }),
    },
  );

  const data = await res.json();

  return data;
}
