<template>
  <div>
    <div v-if="project">
      <section class="g-section g-section--half-sized">
        <div
          class="g-content-box g-content-box--short-padding"
          :class="isMenuVisible ? 'invisible' : ''"
        >
          <h3 class="g-section__project-title">
            {{ project.title }}
          </h3>
          <p class="g-section__project-text">
            {{ project.description }}
          </p>
        </div>
      </section>
      <section class="g-section g-section--half-sized">
        <img
          :src="require('~/assets/images/portfolio/' + project.id + '.png')"
          :alt="project.title"
          class="g-section__project-image"
          :class="isMenuVisible ? 'invisible' : ''"
        />
      </section>
      <section class="g-section g-section--right-aligned g-section--half-sized">
        <div class="g-content-box" :class="isMenuVisible ? 'invisible' : ''">
          <h3 class="g-section__project-title">
            {{ project.secondTitle }}
          </h3>
          <p class="g-section__project-text">
            {{ project.secondDescription }}
          </p>
        </div>
      </section>
      <section v-if="project.link">
        <div class="g-content-box" :class="isMenuVisible ? 'invisible' : ''">
          <h3 class="g-section__project-title">Visite a página do projeto</h3>
          <base-button
            :button-destination="project.link"
            button-text="Bora lá!"
            :button-icon="project.icon"
            button-type="external"
          />
        </div>
      </section>
      <base-button
        :button-destination="projectType === 'web-id' ? '/web' : '/design'"
        button-text="Voltar"
        button-icon="UIBack"
        button-type="internal"
        class="g-button--back"
        :class="isMenuVisible ? 'invisible' : ''"
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

<style lang="scss" scoped></style>
