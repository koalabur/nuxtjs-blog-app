<template>
  <section class="home">
    <h1 class="home__title">
      Welcome to &#8220;The Nuxt Blog&#8221;
    </h1>
    <h2 class="home__subtitle">
      A project created by Cameron using Nuxt 3 and Contentful
    </h2>
    <div class="home__container">
      <p class="home__container-body">
        This <strong>Nuxt</strong> web app was created to showcase:
      </p>
      <ul class="home__container-list">
        <li class="home__container-list-item">
          Nuxt/ Vue usage
        </li>
        <li class="home__container-list-item">
          Dynamic slugs
        </li>
        <li class="home__container-list-item">
          Content generated through the Contentful API
        </li>
        <li class="home__container-list-item">
          Fetching content using GraphQL
        </li>
      </ul>
      <NuxtLink class="home__container-btn" href="/posts">
        Visit Blog
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  border: 8px solid $black;
  background: $darker-white;
  padding: 15px;
  box-shadow: 6px 7px $black;
  border-radius: 8px;

  &__container {
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;

    &-body {
      font-family: $main-font;
      font-size: 1.25rem;
      margin-bottom: 15px;
    }

    &-btn {
      background: $vue-blue;
      color: $vue-green;
      width: auto;
      padding: 15px;
      display: block;
      max-width: 145px;
      text-decoration: none;
      display: flex;
      justify-content: center;
      border-radius: 12px;
      box-shadow: 4px 7px $vue-green;
      font-family: $main-font;
      font-size: 1.25rem;
      transition: 0.2s ease-in-out;

      &:hover {
        box-shadow: 0px 0px 0px 7px $vue-green;
      }
    }

    &-list {
      padding-left: 20px;
      margin-bottom: 25px;

      &-item {
        font-family: $main-font;
        font-size: 1.25rem;
      }
    }
  }

  &__title {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 15px;
    font-family: $main-font;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  &__subtitle {
    font-family: $main-font;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 25px;
  }
}
</style>
