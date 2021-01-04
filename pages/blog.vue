<template>
  <base-gallery-template
    page-title="blog"
    :list-of-dynamic-texts="['youtube', 'design', 'code', 'dev.to', 'learn']"
    card-type="external"
    :store="this.$store.state.blog.postsList"
  />
</template>

<script>
import Vue from "vue";
import BaseGalleryTemplate from "~/components/BaseGalleryTemplate.vue";

export default Vue.extend({
  components: { BaseGalleryTemplate },
  head: {
    title: `Blog | William 'Mago' Gonçalves`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Conheça e acompanhe o conteúdo que compartilho com a comunidade, através das minhas redes sociais e do meu canal.",
      },
      { property: "og:title", content: "Blog | William 'Mago' Gonçalves" },
      { property: "og:site_name", content: "mago.link" },
      {
        property: "og:description",
        content:
          "Conheça e acompanhe o conteúdo que compartilho com a comunidade, através das minhas redes sociais e do meu canal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mago.link/" },
      { property: "og:image", content: "https://mago.link/og-background.png" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
});
</script>
