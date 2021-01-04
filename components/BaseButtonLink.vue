<template>
  <nuxt-link
    v-if="buttonType === 'internal'"
    :to="buttonDestination"
    class="base--button--template"
  >
    <img
      :src="require('~/assets/images/icons/' + buttonIcon + '.svg')"
      :alt="buttonText"
    />
    <p>{{ buttonText }}</p>
  </nuxt-link>
  <a
    v-else
    :href="buttonDestination"
    class="base--button--template"
    target="_blank"
    rel="noreferrer noopener"
  >
    <img
      :src="require('~/assets/images/icons/' + buttonIcon + '.svg')"
      :alt="buttonText"
    />
    <p>{{ buttonText }}</p>
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
.base--button--template {
  height: $medium--spacing;
  width: $larger--spacing;
  padding: 0 $short--spacing;

  background: $tertiary--color--gradient;

  box-shadow: 2px 2px 4px $tertiary--color--darker;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 2rem;
    width: 2rem;
    object-fit: contain;
    z-index: 1;
  }

  p {
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

    background: $primary--color--gradient;
    opacity: 0;
    transition: 0.5s;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
}
</style>
