<template>
  <NuxtLink
    v-for="item in props.data"
    :key="item.slug"
    class="PostsCard"
    :href="`posts/${item.slug}`"
  >
    <nuxt-img
      class="PostsCard__cover"
      :src="item.coverImage.url"
      :alt="item.title"
      width="650"
      height="325"
    />
    <div class="PostsCard__author">
      <nuxt-img
        class="PostsCard__author-img"
        :alt="item.authorName"
        :src="item.authorPicture.url"
        width="45"
        height="45"
      />
      <p class="PostsCard__author-name">
        {{ item.authorName }}
      </p>
    </div>
    <p class="PostsCard__date">
      Published On:
      {{
        new Date(item.sys.firstPublishedAt).toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          dateStyle: "long",
        })
      }}
    </p>
    <h2 class="PostsCard__title">
      {{ item.title }}
    </h2>
    <p class="PostsCard__excerpt">
      {{ item.excerpt }}
    </p>
    <p class="PostsCard__readmore">
      Read More...
    </p>
  </NuxtLink>
</template>
<script lang="ts" setup>
// @ts-ignore
import { Blog } from "../shared/interfaces";
// Contentful
const props = defineProps({
  data: {
    type: Array as PropType<Array<Blog>>,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.PostsCard {
  width: 100%;
  border: 7px solid $black;
  border-bottom-right-radius: 8px;
  box-shadow: 4px 7px $black;
  text-decoration: none;
  transition: 0.25s ease-in-out;
  background: $darker-white;
  max-width: 480px;

  @media (max-width: 1520px) {
    max-width: 345px;
  }

  @media (max-width: 1100px) {
    max-width: 47.5%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }

  &:hover {
    box-shadow: 0px 0px 0px 5px $black;
  }

  &__author {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    background: $darker-white;

    &-img {
      border-radius: 100%;
    }

    &-name {
      font-size: 1.1rem;
      font-weight: 700;
    }
  }

  &__cover {
    display: block;
  }

  &__date {
    padding: 3px 5px;
    background: $black;
    color: $white;
    font-size: 0.9rem;
    margin-bottom: 15px;
  }

  &__excerpt {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 1rem;
    margin-bottom: 10px;
  }

  &__readmore {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 1.2rem;
    text-decoration: underline;
    margin-bottom: 10px;
  }

  &__title {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 2rem;
    margin-bottom: 5px;
  }
}
</style>
