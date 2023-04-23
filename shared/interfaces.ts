export interface Blog {
  authorName: string;
  authorPicture: {
    url: string;
  };
  coverImage: {
    url: string;
  };
  excerpt: string;
  slug: string;
  sys: {
    firstPublishedAt: string;
    publishedAt: string;
  };
  title: string;
  content: {
    links: {
      assets: {
        blocks: Array<unknown>;
      };
    };
  };
}
