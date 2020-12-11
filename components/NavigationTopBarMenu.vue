<template>
  <div id="navigation--top--bar--menu" :class="isMenuVisible ? 'visible' : ''">
    <NuxtLink @click.native="toggleMenu" v-for="menuItem in menuItems" :key="menuItem.pathname" :to="menuItem.pathname" :class="isMenuVisible ? 'visible' : ''" no-prefetch>
      <img :src="require(`~/assets/images/icons/menu/${menuItem.icon}.svg`)" :alt="menuItem.altText" />
      {{ menuItem.text }}
    </NuxtLink>
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
#navigation--top--bar--menu {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  height: 100vh;

  padding: calc((100vh - 400px) / 2) calc((100vw - 700px) / 2);

  background: $background--hover--color--darker;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-around;
  gap: $short--spacing;
  flex-wrap: wrap;

  visibility: hidden;

  opacity: 0;

  transition: 0.25s;

  &.visible {
    visibility: visible;
    opacity: 1;
  }

  a {
    padding-top: $short--spacing;

    position: relative;

    width: 120px;
    height: calc($medium--spacing + $short--spacing);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    transition: 0.25s;
    transform: scale(0.0000001) translate(50%, -50%);

    &::after {
      position: absolute;
      z-index: -1;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: $short--spacing;
      background-image: linear-gradient(125deg, $background--hover--color--darker, $primary--hover--color);
      opacity: 0;
      transition: 0.25s;
    }

    &:hover {
      &::after {
        opacity: 1;
      }
    }

    img {
      height: 1.5rem;
    }

    &.visible {
      transform: scale(1) translate(0, 0);
    }
  }
}
</style>
