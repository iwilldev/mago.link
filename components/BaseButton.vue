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

  background: $tertiary--color;

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
    opacity: 0.8;
    transition: 0.25s;
  }

  &__text {
    margin: 0;
    z-index: 1;
    color: $secondary--color;
    font-weight: 500;
    transition: 0.25s;
  }

  &:hover {
    background: $primary--color;
  }

  &:hover &__icon {
    filter: invert(100%);
  }

  &:hover &__text {
    color: $tertiary--color--darker;
  }

  &--wide {
    width: 100%;
    max-width: 25rem;
  }

  &--back {
    margin: 3rem 0;
  }
}
</style>
