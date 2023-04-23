<template>
  <article class="post">
    <figure>
      <nuxt-img
        class="post__cover"
        :src="currentPost.coverImage.url"
        :alt="currentPost.title"
        width="800"
        height="400"
      />
    </figure>
    <div class="post__content">
      <h1 class="post__content-title">
        {{ currentPost.title }}
      </h1>
      <div class="post__content-author">
        <nuxt-img
          class="post__content-author-img"
          :src="currentPost.authorPicture.url"
          :alt="currentPost.authorName"
          width="75"
          height="75"
        />
        <div class="post__content-author-info">
          <p class="post__content-author-info-name">
            {{ currentPost.authorName }}
          </p>
          <p class="post__content-author-info-date">
            Published On:
            {{
              new Date(currentPost.sys.firstPublishedAt).toLocaleString(
                "en-US",
                {
                  timeZone: "America/Los_Angeles",
                  dateStyle: "long",
                }
              )
            }}
          </p>
        </div>
      </div>
      <div class="post__content-body">
        <RichTextRenderer
          :document="currentPost.content.json"
        />
      </div>
      <NuxtLink class="post__back" href="/posts">
        Back To Posts
      </NuxtLink>
    </div>
  </article>
</template>
<script lang="ts" setup>
// @ts-ignore
import RichTextRenderer from "contentful-rich-text-vue-renderer";

const route = useRoute();
const query = `
  query postsCollectionQuery {
    postsCollection(limit: 10) {
      items {
        sys {
          firstPublishedAt
          publishedAt
        }
        title
        slug
        authorName
        authorPicture {
          url
        }
        coverImage {
          url
        }
        content {
          links {
            assets {
              block {
                title
                url
                width
                height
                sys {
                  id
                }
              }
            }
          }
          json
        }
      }
    }
  }
`;
const blog = await useContentful(query);
const data = blog.data.postsCollection.items;
const post = data.filter((posts: { slug: (string | string[])[] }) =>
  posts.slug.includes(route.params.slug),
);

const currentPost = Object.assign({}, ...post);
</script>
<style lang="scss">
.post {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  background: $darker-white;
  border-radius: 12px;
  border: 7px solid $black;
  padding-bottom: 1rem;

  &__back {
    padding-left: 10px;
    padding-right: 10px;
    font-family: $main-font;
    font-size: 1.25rem;
  }

  &__content {
    padding-left: 10px;
    padding-right: 10px;

    &-author {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 2rem;

      &-info {
        display: flex;
        flex-direction: column;

        &-date {
          font-family: $main-font;
          font-size: 1.05rem;
        }

        &-name {
          font-family: $main-font;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
      }

      &-img {
        margin-right: 10px;
        border-radius: 100%;
      }
    }

    &-body {
      font-family: $main-font;

      code {
        color: $vue-green;
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        margin-top: 6px;
      }

      h3 {
        font-size: 1.7rem;
        margin-top: 6px;
        margin-bottom: 20px;
      }

      img {
        margin-bottom: 20px;
        display: block;
      }

      p {
        font-size: 1.1rem;
        margin-bottom: 20px;
      }

      pre {
        width: 100%;
        background: $black;
        padding: 10px;
        border-radius: 6px;
        margin-bottom: 20px;
      }

      ul,
      ol {
        padding-left: 20px;
        margin-bottom: 20px;

        li {
          p {
            margin-bottom: 10px;
          }
        }
      }
    }

    &-date {
      font-family: $main-font;
      font-size: 1.1rem;
    }

    &-title {
      font-size: 3rem;
      font-family: $main-font;
      margin-bottom: 8px;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }

  &__cover {
    display: block;
    margin-bottom: 15px;
  }
}
</style>
