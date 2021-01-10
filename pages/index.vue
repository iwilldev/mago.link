<template>
  <div>
    <div
      class="g-content-box g-content-box--short-padding"
      :class="isMenuVisible ? 'invisible' : ''"
    >
      <h1>
        mago(<base-dynamic-text-group
          :list-of-dynamic-texts="['web', 'design', 'blog', 'learn', 'create']"
        />)
      </h1>
      <p>
        Site e portfólio de William Gonçalves: dev front-end, designer, aspirante a
        fotógrafo, escritor amador e, no geral, criativo por essência.
      </p>
      <base-button
        @click.native="toggleMenu"
        button-destination=""
        button-text="Vamos lá?"
        button-icon="logo"
        button-type="internal"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import { mapMutations } from "vuex";

export default Vue.extend({
  head: {
    title: `William 'Mago' Gonçalves`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Site e portfólio de William Gonçalves: dev front-end, designer, aspirante a fotógrafo, escritor amador e, no geral, criativo por essência.",
      },
      { property: "og:title", content: "William 'Mago' Gonçalves" },
      { property: "og:site_name", content: "mago.link" },
      {
        property: "og:description",
        content:
          "Site e portfólio de William Gonçalves: dev front-end, designer, aspirante a fotógrafo, escritor amador e, no geral, criativo por essência.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mago.link/" },
      { property: "og:image", content: "https://mago.link/og-background.png" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  methods: {
    isVideoLoaded() {
      if (this.$refs.video) {
        if (this.$refs.video.readyState === 4) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    ...mapMutations({
      toggleMenu: "menu/toggleMenu",
    }),
  },
  computed: {
    isMenuVisible() {
      return this.$store.state.menu.isMenuVisible;
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  justify-content: flex-end;
}

.g-content-box .g-button {
  margin-bottom: $short--spacing;
}
</style>
