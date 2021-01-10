<template>
  <nuxt-link
    v-if="cardType == 'internal'"
    :to="{ name: cardDestination, params: { id: cardId } }"
    class="g-card"
  >
    <img
      class="g-card__image"
      :src="
        cardImage ? cardImage : require('~/assets/images/portfolio/' + cardId + '.png')
      "
      :alt="cardTitle"
    />
    <p class="g-card__text">{{ cardTitle }}</p>
    <img
      class="g-card__icon"
      :src="require('~/assets/images/icons/' + cardIcon + '.svg')"
      :alt="cardIcon"
    />
  </nuxt-link>

  <a
    v-else
    :href="cardDestination"
    class="g-card"
    target="_blank"
    rel="noreferrer noopener"
  >
    <img
      class="g-card__image"
      :src="
        cardImage ? cardImage : require('~/assets/images/portfolio/' + cardId + '.png')
      "
      :alt="cardTitle"
    />
    <p class="g-card__text">{{ cardTitle }}</p>
    <img
      class="g-card__icon"
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
.g-card {
  width: 100%;
  max-width: 24rem;
  height: 13.5rem;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.25s;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    z-index: 1;
    pointer-events: none;
    border: 3px solid $tertiary--color;
  }

  &__text {
    margin: 0;
    width: 100%;
    position: absolute;
    text-transform: capitalize;
    font-weight: 500;
    color: $secondary--color;
    z-index: 1;
    background: $tertiary--color;
    padding: $shorter--spacing;
    bottom: 0;
  }

  &__icon {
    position: absolute;
    top: 0;
    right: 0;

    height: 2rem;
    width: 2rem;
    object-fit: contain;

    margin: 0;
    padding: 0.25rem;
    background: $tertiary--color;

    z-index: 1;
    pointer-events: none;
  }

  &:hover &__text {
    color: $tertiary--color--darker;
    background: $primary--color;
  }

  &:hover &__icon {
    background: $primary--color;
  }

  &:hover &__image {
    border-color: $primary--color;
  }
}
</style>
