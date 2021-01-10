<template>
  <base-gallery
    page-title="projetos"
    :list-of-dynamic-texts="['js', 'css', 'vue', 'jsx', 'html']"
    card-destination="web-id"
    card-type="internal"
    :store="this.$store.state.web.projectsList"
  />
</template>

<script>
import Vue from "vue";
import BaseGallery from "~/components/BaseGallery.vue";

export default Vue.extend({
  components: { BaseGallery },
  head: {
    title: `Projetos Web | William 'Mago' Gonçalves`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Conheça meu portfólio de projetos web e descubra detalhes sobre cada trabalho.",
      },
      { property: "og:title", content: "Projetos Web | William 'Mago' Gonçalves" },
      { property: "og:site_name", content: "mago.link" },
      {
        property: "og:description",
        content:
          "Conheça meu portfólio de projetos web e descubra detalhes sobre cada trabalho.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mago.link/" },
      { property: "og:image", content: "https://mago.link/og-background.png" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
});
</script>
