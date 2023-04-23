<template>
  <div class="PaginationBasic">
    <button class="PaginationBasic__number" @click="$emit('prevPage')">
      Prev
    </button>

    <button
      v-for="number in pageNumbers"
      :key="number"
      role="button"
      :class="activePageNumber(number)"
      @click="$emit('paginate', number)"
    >
      {{ number }}
    </button>

    <button class="PaginationBasic__number" @click="$emit('nextPage')">
      Next
    </button>
  </div>
</template>
<script lang="ts" setup>
defineEmits(["nextPage", "prevPage", "paginate"]);

interface Blog {
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
}

const props = defineProps({
  posts: {
    type: Array as PropType<Array<Blog>>,
    required: true,
  },
  postsPerPage: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

const pageNumbers: number[] = [];
for (let i = 1; i <= Math.ceil(props.posts.length / props.postsPerPage); i++) {
  pageNumbers.push(i);
}

function activePageNumber (number: number) {
  if (number === props.currentPage) {
    return "PaginationBasic__number PaginationBasic__number--active";
  } else {
    return "PaginationBasic__number";
  }
}
</script>
<style lang="scss" scoped>
.PaginationBasic {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3px;

  &__number {
    background: $darker-white;
    color: $black;
    border: 3px solid $black;
    font-family: $main-font;
    padding: 5px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &--active {
      background: $black;
      color: $darker-white;
      pointer-events: none;
    }

    &:hover {
      background: $black;
      color: $darker-white;
    }
  }
}
</style>
