<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <nav class="nav">
    <NuxtLink class="nav__logo" href="/">
      &#8220;The Nuxt Blog&#8221;
    </NuxtLink>
    <div class="nav__links">
      <NuxtLink class="nav__links-link" href="/">
        Home
      </NuxtLink>
      <NuxtLink class="nav__links-link" href="/posts">
        Posts
      </NuxtLink>
    </div>
  </nav>
  <main>
    <slot />
  </main>
  <footer class="footer">
    <p class="footer__me">
      Cameron Roberts blog-app |
      <a
        href="https://github.com/koalabur/nuxtjs-blog-app"
        target="_blank"
      >Github Link</a>
    </p>
    <p class="footer__other">
      This blog was developed using <strong>Nuxt 3</strong> and
      <strong>Contentful</strong>.
    </p>
  </footer>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $white;
  @include edge-padding;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 10px;
  border: 7px solid $black;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 4px -8px $black;
  margin-top: 50px;

  &__me {
    font-family: $main-font;
    color: $black;
    font-size: 16px;
    font-weight: 700;
    text-align: center;

    a {
      color: $black;
    }
  }

  &__other {
    font-family: $main-font;
    color: $black;
    font-size: 16px;
    text-align: center;
  }
}

.nav {
  background: $white;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  border: 7px solid $black;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: 4px 8px $black;
  margin-bottom: 25px;
  @include edge-padding;

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  &__links {
    display: flex;
    flex-direction: row;
    gap: 20px;

    &-link {
      font-family: $main-font;
      text-decoration: none;
      color: $black;
      font-size: 1.25rem;

      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
  }

  &__logo {
    font-family: $main-font;
    font-size: 30px;
    cursor: pointer;
    color: $black;
    text-decoration: none;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 700;
    margin-right: 3rem;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-right: 0px;
    }
  }
}
</style>
