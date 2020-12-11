<template>
  <div id="navigation--top--bar">
    <img src="~/assets/images/branding/logo.svg" alt="Logo do Mago: chapéu branco em design flat com a ponta dobrada para a esquerda e uma estrela na ponta" />
    <transition name="menu">
      <p key="1" v-if="isMenuVisible">Fechar</p>
      <p key="2" v-else>Menu</p>
    </transition>
    <button id="navigation--top--bar--menu--button" @click="toggleMenu" :class="isMenuVisible ? 'visible' : ''" aria-valuetext="Menu">
      <div></div>
      <div></div>
      <div></div>
    </button>
    <NavigationTopBarMenu id="navigation--top--bar--menu" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { mapMutations } from "vuex";

export default Vue.extend({
  data() {
    return {};
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
});
</script>

<style lang="scss">
#navigation--top--bar {
  height: $medium--spacing;
  width: 100%;

  background: $background--hover--color;
  box-shadow: 0px 2px 4px $background--hover--color--darker;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: $shorter--spacing;

  z-index: 2;

  #navigation--top--bar--menu {
    z-index: -1;
  }

  p {
    margin: 0;
    margin-left: auto;
    margin-right: $shorter--spacing;
  }

  img {
    height: 100%;
  }

  &--menu--button {
    all: unset;
    height: 1.25rem;
    width: $short--spacing;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    cursor: pointer;

    div {
      height: 0.25rem;
      width: $short--spacing;
      pointer-events: none;
      background: $primary--color--lighter;
      border-radius: 0.125rem;
      transition: 0.25s;
      position: relative;
      box-shadow: 0px 2px 4px $background--color--darker;
    }

    &:hover {
      div {
        background: $primary--color;
      }
    }

    &.visible {
      div {
        background: $secondary--color;
        position: absolute;
        box-shadow: none;

        &:nth-child(1) {
          transform: rotate(-225deg);
          top: 1.35rem;
        }

        &:nth-child(2) {
          transform: rotate(495deg);
          top: 1.35rem;
        }

        &:nth-child(3) {
          transform: rotate(-855deg);
          top: 1.35rem;
        }
      }

      &:hover {
        div {
          background: $primary--color;
        }
      }
    }
  }
}

.menu-enter-active {
  transition: 0.25s;
}
.menu-enter,
.menu-leave {
  opacity: 0;
}
</style>
