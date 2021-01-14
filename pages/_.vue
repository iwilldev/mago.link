<template>
  <div>
    <img
      src="~/assets/images/pages/not-found/ronaldinho.png"
      alt="Ronaldinho Gaúcho, o rei do rolê aleatório"
      data-aos="zoom-in-down"
      class="not-found-image"
      :class="isMenuVisible ? 'invisible' : 'aos-animate'"
    />
    <div
      class="g-content-box"
      :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      data-aos="fade-right"
    >
      <h3><base-dynamic-text text-to-be-written="mermão! que rolé foi esse?" /></h3>
      <p>
        É estranho que tenhamos chegado até aqui. Como todos os scripts dessa página foram
        revisados em voz alta pelo Cidão Moreira, é provável que algum erro de digitação
        tenha direcionado sua navegação pra cá. Mas relaxa! Clique
        <nuxt-link to="/">aqui</nuxt-link>, para voltar do começo, ou use o Menu para
        navegar para outra página.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseDynamicText from "~/components/BaseDynamicText.vue";
export default Vue.extend({
  components: { BaseDynamicText },
  head: {
    title: `Ops! Caminho errado | William 'Mago' Gonçalves`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "É estranho que tenhamos chegado até aqui. Mas relaxa! Use o Menu para navegar para outra página.",
      },
      { property: "og:title", content: "Ops! Caminho errado | William 'Mago' Gonçalves" },
      { property: "og:site_name", content: "mago.link" },
      {
        property: "og:description",
        content:
          "É estranho que tenhamos chegado até aqui. Mas relaxa! Use o Menu para navegar para outra página.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mago.link/" },
      { property: "og:image", content: "https://mago.link/og-background.png" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  computed: {
    isMenuVisible() {
      return this.$store.state.menu.isMenuVisible;
    },
  },
});
</script>

<style lang="scss" scoped>
.not-found-image {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: $short--spacing;
}
</style>
