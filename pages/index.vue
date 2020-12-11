<template>
  <transition name="home">
    <div id="content--container" class="index--content">
      <div id="animation--container" :class="isVideoLoaded()">
        <div id="animation--container--content">
          <h5>flex-container</h5>
        </div>
        <div id="animation--container--background">
          <video playsinline autoplay muted loop ref="video" class="background--video">
            <source src="~/assets/videos/index.webm" />
          </video>
        </div>
      </div>
      <h1>
        mago<span :style="{ color: dynamicColor }">{{ dynamicText }}</span>
      </h1>
      <p>"Se você pensa que pode ou sonha que pode, comece. Ousadia tem genialidade, poder e mágica. Ouse fazer e o poder lhe será dado." Johann Goethe</p>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  transition: {
    name: "home",
    mode: "out-in",
  },
  data() {
    return {
      dynamicText: "",
      dynamicColor: "",
      listOfDynamicTexts: [".web()", ".design()", ".blog()", ".learn()", ".create()"],
      listOfDynamicColors: ["#a54bff", "#00fdfd", "#fa7a4f", "#4bb4ff", "#ff4b78"],
      characterIndex: 0,
      wordIndex: 0,
      isFunctionWriting: true,
    };
  },
  methods: {
    writedynamicText() {
      if (this.isFunctionWriting) {
        if (this.characterIndex < this.listOfDynamicTexts[this.wordIndex].length) {
          this.dynamicText += this.listOfDynamicTexts[this.wordIndex].charAt(this.characterIndex);
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
          this.dynamicColor = this.listOfDynamicColors[this.wordIndex];
          this.isFunctionWriting = true;
        }
      }
    },
    isVideoLoaded() {
      if (this.$refs.video) {
        if (this.$refs.video.readyState === 4) {
          return "visible";
        } else {
          return "";
          setTimeout(this, 2000);
        }
      } else {
        return "";
        setTimeout(this, 2000);
      }
    },
  },
  created() {
    this.writedynamicText();
    this.dynamicColor = this.listOfDynamicColors[this.wordIndex];
    this.isVideoLoaded();
  },
});
</script>

<style lang="scss">
.index--content {
  @include content--base--layout;

  justify-content: flex-end;

  position: relative;

  p {
    max-width: 400px;
  }

  #animation--container {
    width: 35vh;
    height: 35vh;

    @media (max-width: 500px) {
      max-width: 70vw;
      max-height: 70vw;
    }

    position: relative;

    align-self: flex-end;
    margin-bottom: auto;

    display: flex;

    z-index: -1;

    visibility: hidden;

    &.visible {
      visibility: visible;
    }

    @media (max-height: 750px) {
      visibility: hidden !important ;
    }

    &--content {
      width: 100%;
      height: 100%;
      position: absolute;

      display: flex;
      justify-content: center;

      h5 {
        margin: 0;
        color: $secondary--color;
      }

      border: 3px dashed $secondary--color;
    }

    &--background {
      width: 100%;
      height: 100%;
      z-index: -1;
      .background--video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      pointer-events: none;
    }
  }
}

.home-enter-active,
.home-leave-active {
  transition: 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
  transform: translate(0, -50px);
}
</style>
