<template>
  <section class="blog">
    <div class="blog__container">
      <PostsCard :data="currentPosts" />
    </div>
    <PaginationBasic
      :posts="data"
      :posts-per-page="postsPerPage"
      :current-page="currentPage"
      @next-page="nextPage"
      @prev-page="prevPage"
      @paginate="paginate"
    />
  </section>
</template>
<script lang="ts" setup>
// Get contentful data
const query = `
  query postsCollectionQuery {
    postsCollection {
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
        excerpt
        coverImage {
          url
        }
        content {
          json
        }
      }
    }
  }
`;
const blog = await useContentful(query);
const data = blog.data.postsCollection.items;

// Pagination
const postsPerPage = ref<number>(6);
const currentPage = ref<number>(1);
/// Get current post
const indexOfLastPost = computed<number>(() => {
  return currentPage.value * postsPerPage.value;
});
const indexOfFirstPost = computed<number>(() => {
  return indexOfLastPost.value - postsPerPage.value;
});
const currentPosts = computed(() => {
  return data.slice(indexOfFirstPost.value, indexOfLastPost.value);
});
/// How many pages are there?
const pageNumbers: number[] = [];
for (let i = 1; i <= Math.ceil(data.length / postsPerPage.value); i++) {
  pageNumbers.push(i);
}
/// Next Page
function nextPage () {
  if (currentPage.value !== pageNumbers.length) {
    currentPage.value++;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
/// Previous Page
function prevPage () {
  if (currentPage.value !== 1) {
    currentPage.value--;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
/// Paginate
function paginate (number: number) {
  currentPage.value = number;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: column;

  &__container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    font-family: $main-font;
    margin-bottom: 35px;
    flex-wrap: wrap;

    @media (max-width: 1520px) {
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 1100px) {
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
