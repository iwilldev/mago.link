<template>
  <div>
    <div
      class="g-content-box g-content-box--short-padding"
      :class="isMenuVisible ? 'invisible' : ''"
    >
      <h3>Contatos</h3>
    </div>
    <div class="l-contacts">
      <base-button
        v-for="link in links"
        :key="link.icon"
        :button-destination="link.link"
        :button-text="link.text"
        :button-icon="link.icon"
        button-type="external"
        class="g-button--wide"
        :class="isMenuVisible ? 'invisible' : ''"
      />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: `Contatos | William 'Mago' Gonçalves`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Siga-me nas redes sociais e entre em contato para conhecer mais sobre mim e meu trabalho.",
      },
      { property: "og:title", content: "Contatos | William 'Mago' Gonçalves" },
      { property: "og:site_name", content: "mago.link" },
      {
        property: "og:description",
        content:
          "Siga-me nas redes sociais e entre em contato para conhecer mais sobre mim e meu trabalho.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mago.link/" },
      { property: "og:image", content: "https://mago.link/og-background.png" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  data() {
    return {
      links: [],
    };
  },
  created() {
    this.links = this.$store.state.contacts.links;
  },
  computed: {
    isMenuVisible() {
      return this.$store.state.menu.isMenuVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.l-contacts {
  margin-top: $medium--spacing;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  gap: $medium--spacing;
}
</style>
