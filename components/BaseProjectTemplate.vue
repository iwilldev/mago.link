<template>
  <div>
    <div v-if="project">
      <section class="section--left--base half--screen--section">
        <base-button-link
          :button-destination="projectType === 'web-id' ? '/web' : '/design'"
          button-text="Voltar"
          button-icon="UIBack"
          button-type="internal"
          class="go--back--button"
          :class="isMenuVisible ? 'invisible--content' : ''"
        />
        <div class="text--container" :class="isMenuVisible ? 'invisible--content' : ''">
          <h3 class="project--header">{{ project.title }}</h3>
          <p class="project--paragraph">{{ project.description }}</p>
        </div>
      </section>
      <section class="section--left--base half--screen--section">
        <img
          :src="require('~/assets/images/portfolio/' + project.id + '.png')"
          :alt="project.title"
          class="project--image"
          :class="isMenuVisible ? 'invisible--content' : ''"
        />
      </section>
      <section class="section--right--base half--screen--section">
        <div class="text--container" :class="isMenuVisible ? 'invisible--content' : ''">
          <h3 class="project--header">{{ project.secondTitle }}</h3>
          <p class="project--paragraph">{{ project.secondDescription }}</p>
        </div>
      </section>
      <section v-if="project.link">
        <div class="text--container" :class="isMenuVisible ? 'invisible--content' : ''">
          <h3 class="project--header">Visite a página do projeto</h3>
          <base-button-link
            :button-destination="project.link"
            button-text="Bora lá!"
            :button-icon="project.icon"
            button-type="external"
          />
        </div>
      </section>
      <base-button-link
        :button-destination="projectType === 'web-id' ? '/web' : '/design'"
        button-text="Voltar"
        button-icon="UIBack"
        button-type="internal"
        class="go--back--button"
        :class="isMenuVisible ? 'invisible--content' : ''"
      />
    </div>
    {{ !project ? this.$router.push("/404") : null }}
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head() {
    if (this.project) {
      return {
        title:
          this.projectType === "web-id"
            ? this.project.title +
              ": projeto em " +
              this.project.icon +
              ` | William 'Mago' Gonçalves`
            : this.project.title + ` | William 'Mago' Gonçalves`,
        meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          {
            hid: "description",
            name: "description",
            content: this.project.description,
          },
          {
            property: "og:title",
            content:
              this.projectType === "web-id"
                ? this.project.title +
                  ": projeto em " +
                  this.project.icon +
                  ` | William 'Mago' Gonçalves`
                : this.project.title + ` | William 'Mago' Gonçalves`,
          },
          { property: "og:site_name", content: "mago.link" },
          {
            property: "og:description",
            content: this.project.description,
          },
          { property: "og:type", content: "website" },
          { property: "og:url", content: "https://mago.link/" },
          { property: "og:image", content: "https://mago.link/og-background.png" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
      };
    }
  },
  props: {
    projectId: String,
    projectType: String,
  },
  methods: {},
  computed: {
    project() {
      if (this.projectType === "web-id") {
        return this.$store.state.web.projectsList.find(
          (project) => project.id === this.projectId
        );
      } else {
        return this.$store.state.design.projectsList.find(
          (project) => project.id === this.projectId
        );
      }
    },
    isMenuVisible() {
      return this.$store.state.menu.isMenuVisible;
    },
  },
});
</script>

<style lang="scss" scoped>
section {
  .project--header {
    text-transform: capitalize;
  }

  .project--paragraph {
    white-space: pre-line;
  }

  &:nth-child(1) .go--back--button,
  &:nth-child(3) {
    margin-bottom: $medium--spacing;
  }

  .project--image {
    justify-self: center;
    align-self: center;
    width: 100%;
    max-width: 1000px;
    object-fit: cover;
    border: 5px solid $secondary--color--lighter;
    cursor: $hover--emoji--heart--eyes;
  }
}
</style>
