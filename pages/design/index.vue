<template>
  <base-gallery-template
    page-title="design"
    :list-of-dynamic-texts="['art', 'logo', 'ai', 'psd', 'xd']"
    card-destination="design-id"
    card-type="internal"
    :store="this.$store.state.design.projectsList"
  />
</template>

<script>
import Vue from "vue";
import BaseGalleryTemplate from "~/components/BaseGalleryTemplate.vue";

export default Vue.extend({
  components: { BaseGalleryTemplate },
  head: {
    title: `Projetos de Design | William 'Mago' Gonçalves`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Conheça meu portfólio de Projetos de Design e descubra detalhes sobre cada trabalho.",
      },
      { property: "og:title", content: "Projetos de Design | William 'Mago' Gonçalves" },
      { property: "og:site_name", content: "mago.link" },
      {
        property: "og:description",
        content:
          "Conheça meu portfólio de Projetos de Design e descubra detalhes sobre cada trabalho.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mago.link/" },
      { property: "og:image", content: "https://mago.link/og-background.png" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
});
</script>
