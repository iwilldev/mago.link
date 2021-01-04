<template>
  <span class="dynamic--text--group">{{ dynamicText }}</span>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    listOfDynamicTexts: Array,
  },
  data() {
    return {
      dynamicText: "",
      characterIndex: 0,
      wordIndex: 0,
      isFunctionWriting: true,
    };
  },
  methods: {
    writedynamicText() {
      if (this.isFunctionWriting) {
        if (this.characterIndex < this.listOfDynamicTexts[this.wordIndex].length) {
          this.dynamicText += this.listOfDynamicTexts[this.wordIndex].charAt(
            this.characterIndex
          );
          this.characterIndex++;
          setTimeout(this.writedynamicText, 100);
        } else {
          setTimeout(() => {
            if (this.wordIndex < this.listOfDynamicTexts.length - 1) {
              this.wordIndex++;
            } else {
              this.wordIndex = 0;
            }
            this.isFunctionWriting = false;
            this.writedynamicText();
          }, 1000);
        }
      } else {
        this.dynamicText = this.dynamicText.slice(0, -1);
        this.characterIndex--;
        setTimeout(this.writedynamicText, 50);
        if (this.characterIndex < 0) {
          this.dynamicText = "";
          this.characterIndex = 0;
          this.isFunctionWriting = true;
        }
      }
    },
  },
  created() {
    this.writedynamicText();
  },
});
</script>

<style lang="scss" scoped>
span {
  color: $primary--color;
}
</style>
