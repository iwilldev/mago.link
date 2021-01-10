<template>
  <div>
    <div
      class="g-content-box g-content-box--short-padding"
      :class="isMenuVisible ? 'invisible' : ''"
    >
      <h1>
        {{ pageTitle }}(<base-dynamic-text-group
          :list-of-dynamic-texts="listOfDynamicTexts"
        />)
      </h1>
    </div>
    <div class="g-l-gallery">
      <base-card
        v-for="post in postsList"
        :key="post.id"
        :card-title="post.title"
        :card-icon="post.icon"
        :card-id="post.id"
        :card-type="cardType"
        :card-image="post.image ? post.image : null"
        :card-destination="cardType === 'internal' ? cardDestination : post.link"
        :class="isMenuVisible ? 'invisible' : ''"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import BaseCard from "~/components/BaseCard.vue";

export default Vue.extend({
  components: { BaseCard },
  props: {
    pageTitle: String,
    listOfDynamicTexts: Array,
    cardDestination: String,
    cardType: String,
    store: Array,
  },
  data() {
    return {
      postsList: [],
    };
  },
  methods: {
    populatePostList() {
      let fullPostsList = this.store;
      fullPostsList.map((post) => {
        if (post.image) {
          let { id, title, icon, link, image } = post;
          this.postsList.push({ id, title, icon, link, image });
        } else {
          let { id, title, icon, link } = post;
          this.postsList.push({ id, title, icon, link });
        }
      });
    },
  },
  created() {
    this.populatePostList();
  },
  computed: {
    isMenuVisible() {
      return this.$store.state.menu.isMenuVisible;
    },
  },
});
</script>

<style lang="scss" scoped>
.g-l-gallery {
  margin-top: $medium--spacing;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: $medium--spacing;
}
</style>
