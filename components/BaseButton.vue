<template>
  <nuxt-link v-if="buttonType === 'internal'" :to="buttonDestination" class="g-button">
    <img
      :src="require('~/assets/images/icons/' + buttonIcon + '.svg')"
      :alt="buttonText"
      class="g-button__icon"
    />
    <p class="g-button__text">{{ buttonText }}</p>
  </nuxt-link>
  <a
    v-else
    :href="buttonDestination"
    class="g-button"
    target="_blank"
    rel="noreferrer noopener"
  >
    <img
      :src="require('~/assets/images/icons/' + buttonIcon + '.svg')"
      :alt="buttonText"
      class="g-button__icon"
    />
    <p class="g-button__text">{{ buttonText }}</p>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    buttonDestination: String,
    buttonText: String,
    buttonIcon: String,
    buttonType: String,
  },
});
</script>

<style lang="scss">
.g-button {
  height: $medium--spacing;
  width: $larger--spacing;
  padding: 0 $short--spacing;

  background: $primary--color;
  background: -webkit-linear-gradient(
    to top,
    $primary--color--darker 5%,
    $primary--color
  );
  background: linear-gradient(to top, $primary--color--darker 5%, $primary--color);

  box-shadow: 3px 3px 6px #000000aa;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &__icon {
    height: 2rem;
    width: 2rem;
    object-fit: contain;
    z-index: 1;
    opacity: 0.5;
  }

  &__text {
    margin: 0;
    z-index: 1;
    color: $secondary--color;
    font-weight: 500;
  }

  &::after {
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
    content: "";
    height: $medium--spacing;
    width: $larger--spacing;

    background: $primary--color;
    background: -webkit-linear-gradient(
      to bottom,
      $primary--color--darker 5%,
      $primary--color
    );
    background: linear-gradient(to bottom, $primary--color--darker 5%, $primary--color);
    opacity: 0;
    transition: 0.5s;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }

  &:hover &__icon {
    opacity: 0.8;
  }

  &--wide {
    width: 100%;
    max-width: 25rem;

    &::after {
      width: 100%;
      max-width: 25rem;
    }
  }

  &--back {
    margin: 3rem 0;
  }
}
</style>
