<template>
  <div>
    <section class="section--left--base">
      <div class="text--container" :class="isMenuVisible ? 'invisible--content' : ''">
        <h1>Experiência</h1>
      </div>
      <div
        class="text--container"
        :class="isMenuVisible ? 'invisible--content' : ''"
        v-for="experience in experiences"
        :key="experience.position"
      >
        <h4>{{ experience.position }}</h4>
        <i>{{ experience.date }}</i>
        <p>{{ experience.description }}</p>
      </div>
    </section>
    <section class="section--left--base">
      <div class="text--container" :class="isMenuVisible ? 'invisible--content' : ''">
        <h1>Habilidades</h1>
      </div>
      <div class="stacks--container">
        <div
          class="stack--alone"
          v-for="stack in stacks"
          :key="stack.name"
          :class="isMenuVisible ? 'invisible--content' : ''"
        >
          <img
            :src="require('~/assets/images/icons/' + stack.name + '.svg')"
            :alt="stack.name"
          />
          <small>{{ stack.name }}</small>
        </div>
      </div>
    </section>
    <section class="section--left--base">
      <div class="text--container" :class="isMenuVisible ? 'invisible--content' : ''">
        <h1>Formações</h1>
      </div>
      <div
        class="text--container"
        :class="isMenuVisible ? 'invisible--content' : ''"
        v-for="certificate in certificates"
        :key="certificate.position"
      >
        <h4>{{ certificate.title }}</h4>
        <h5>{{ certificate.school }}</h5>
        <i>{{ certificate.date }}</i>
        <p><b>Ementa/Conteúdos:</b> {{ certificate.content }}</p>
        <base-button-link
          v-if="certificate.link"
          :button-destination="certificate.link"
          button-text="Certificado"
          button-icon="UIMenuResume"
          button-type="external"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import BaseGalleryTemplate from "~/components/BaseGalleryTemplate.vue";

export default Vue.extend({
  components: { BaseGalleryTemplate },
  head: {
    title: `Currículo | William 'Mago' Gonçalves`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Minha experiência, principais habilidades e os cursos e certificados que me ajudaram a chegar até aqui.",
      },
      { property: "og:title", content: "Currículo | William 'Mago' Gonçalves" },
      { property: "og:site_name", content: "mago.link" },
      {
        property: "og:description",
        content:
          "Minha experiência, principais habilidades e os cursos e certificados que me ajudaram a chegar até aqui.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mago.link/" },
      { property: "og:image", content: "https://mago.link/og-background.png" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  data() {
    return {
      experiences: this.$store.state.resume.experiences,
      stacks: this.$store.state.resume.stacks,
      certificates: this.$store.state.resume.certificates,
    };
  },
  computed: {
    isMenuVisible() {
      return this.$store.state.menu.isMenuVisible;
    },
  },
});
</script>

<style lang="scss" scoped>
.text--container {
  &:nth-child(1) {
    h1 {
      margin: 0;
    }
    margin-bottom: $medium--spacing;
  }
}

.text--container + .text--container {
  margin-top: $medium--spacing;
}

.stacks--container {
  margin-top: $medium--spacing;
  display: flex;
  flex-wrap: wrap;
  gap: $medium--spacing;
  align-content: center;
  justify-content: center;
  padding: 0 calc((100vw - 1200px) / 2);

  .stack--alone {
    width: $large--spacing;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $shorter--spacing;
    img {
      height: $medium--spacing;
      width: $medium--spacing;
      object-fit: contain;
    }
    small {
      color: $secondary--color--lighter;
    }
  }
}
</style>
