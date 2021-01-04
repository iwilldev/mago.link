<template>
  <span>{{ dynamicText }}</span>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    textToBeWritten: String,
  },
  data() {
    return {
      dynamicText: "",
      characterIndex: 0,
    };
  },
  methods: {
    writedynamicText() {
      if (this.dynamicText.length < this.textToBeWritten.length) {
        this.dynamicText += this.textToBeWritten.charAt(this.characterIndex);
        this.characterIndex++;
        setTimeout(this.writedynamicText, 50);
      }
    },
  },
  created() {
    this.writedynamicText();
  },
});
</script>
