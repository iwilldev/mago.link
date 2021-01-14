<template>
  <div class="menu" :class="isMenuVisible ? 'visible' : ''">
    <base-button
      v-for="menuItem in menuItems"
      :key="menuItem.pathname"
      @click.native="toggleMenu"
      class="menu__button"
      :class="isMenuVisible ? 'visible' : ''"
      :button-destination="menuItem.pathname"
      :button-text="menuItem.text"
      :button-icon="menuItem.icon"
      button-type="internal"
    />
    <small class="menu__information">
      Para uma melhor experiência, o mínimo recomendado: Chrome 84+, Firefox 76+, Edge 84+
      ou Opera 70+
    </small>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { mapMutations } from "vuex";

export default Vue.extend({
  data() {
    return {
      menuItems: [],
    };
  },
  computed: {
    isMenuVisible() {
      return this.$store.state.menu.isMenuVisible;
    },
  },
  methods: {
    ...mapMutations({
      toggleMenu: "menu/toggleMenu",
    }),
  },
  created() {
    this.menuItems = this.$store.state.menu.menuItems;
  },
});
</script>

<style lang="scss">
.menu {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  height: 100vh;

  padding: calc((100vh - 400px) / 2) calc((100vw - 1200px) / 2);

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: $short--spacing;
  flex-wrap: wrap;

  visibility: hidden;

  opacity: 0;

  transition: 0.5s;

  &.visible {
    visibility: visible;
    opacity: 1;
  }

  &__button {
    transform: scale(0.0001) translate(0, -50%);
    transition: 0.5s;

    &.visible {
      transform: scale(1) translate(0, 0);
    }
  }

  &__information {
    font-size: 0.7rem;
    color: $secondary--color--darker;
    text-align: center;
    width: 90%;
    max-width: 450px;
    transition: 0.5s;
  }
}
</style>
