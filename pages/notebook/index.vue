<template>
  <div class="canvas">
    <b-container>
      <article>
        <nuxt-content :document="page" />
      </article>
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("articles/test").fetch();

    return {
      page,
    };
  },
};
</script>
