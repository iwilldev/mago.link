<template>
  <nuxt-link
    v-if="cardType == 'internal'"
    :to="{ name: cardDestination, params: { id: cardId } }"
    class="card--container"
  >
    <img
      class="card--image"
      :src="
        cardImage ? cardImage : require('~/assets/images/portfolio/' + cardId + '.png')
      "
      :alt="cardTitle"
    />
    <p class="card--title">{{ cardTitle }}</p>
    <img
      class="card--icon"
      :src="require('~/assets/images/icons/' + cardIcon + '.svg')"
      :alt="cardIcon"
    />
  </nuxt-link>

  <a
    v-else
    :href="cardDestination"
    class="card--container"
    target="_blank"
    rel="noreferrer noopener"
  >
    <img
      class="card--image"
      :src="
        cardImage ? cardImage : require('~/assets/images/portfolio/' + cardId + '.png')
      "
      :alt="cardTitle"
    />
    <p class="card--title">{{ cardTitle }}</p>
    <img
      class="card--icon"
      :src="require('~/assets/images/icons/' + cardIcon + '.svg')"
      :alt="cardIcon"
    />
  </a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    cardId: String,
    cardTitle: String,
    cardImage: String,
    cardIcon: String,
    cardType: String,
    cardDestination: String,
  },
});
</script>

<style lang="scss" scoped>
.card--container {
  width: 100%;
  max-width: 24rem;
  height: 13.5rem;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .card--image {
    width: 90%;
    height: 90%;
    object-fit: cover;
    object-position: top;
    z-index: 1;
    pointer-events: none;
    border: 1px solid $tertiary--color;
  }

  .card--title {
    margin: 0;
    position: absolute;
    text-transform: capitalize;
    font-weight: 500;
    color: $secondary--color;
    z-index: 1;
    background: $tertiary--color--gradient;
    padding: $shorter--spacing;
    bottom: -0.25rem;
    left: -0.25rem;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      content: "";
      width: 100%;
      height: 100%;
      background: $primary--color--gradient;
      opacity: 0;
      transition: 0.5s;
    }
  }

  .card--icon {
    position: absolute;
    height: $short--spacing;
    width: $short--spacing;
    object-fit: contain;
    margin: 0;
    top: -0.25rem;
    right: -0.25rem;

    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    .card--title::after {
      opacity: 1;
    }
  }
}
</style>
