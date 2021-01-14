<template>
  <div class="portfolio">
    <ul class="animation">
      <li
        :key="icon.id"
        class="animation__item"
        v-for="icon in backgroundIcons"
        :style="{
          bottom: '50%',
          left: icon.left,
          animationDuration: icon.animationDuration,
          background: `url(${require('~/assets/images/icons/background/0' +
            icon.id +
            '.svg')})`,
        }"
      ></li>
    </ul>
    <the-navbar />
    <transition name="screen-change">
      <Nuxt class="content" />
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import TheNavbar from "~/components/TheNavbar.vue";
import AOS from "aos";
import "aos/dist/aos.css";
export default Vue.extend({
  components: { TheNavbar },
  transition: {
    name: "screen-change",
    mode: "out-in",
  },
  data() {
    return {
      backgroundIcons: [
        { left: "15%", animationDuration: "22s", id: 0 },
        { left: "25%", animationDuration: "23s", id: 1 },
        { left: "35%", animationDuration: "24s", id: 2 },
        { left: "45%", animationDuration: "25s", id: 3 },
        { left: "55%", animationDuration: "26s", id: 4 },
        { left: "65%", animationDuration: "27s", id: 5 },
        { left: "75%", animationDuration: "28s", id: 6 },
        { left: "85%", animationDuration: "29s", id: 7 },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      AOS.init({
        duration: 500,
        offset: 0,
        easing: "ease-out",
      });
    }, 1000);
  },

  updated() {
    setTimeout(() => {
      AOS.init({
        duration: 500,
        offset: 0,
        easing: "ease-out",
      });
    }, 1000);
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,400;0,500;0,700;1,300;1,500;1,700&display=swap");

html {
  font-size: 16px;
  font-size: clamp(16px, 10px + 1vw, 22px);
}

#__nuxt,
#__layout {
  height: 100%;
}

.screen-change-enter-active {
  transition: 0.5s;
}
.screen-change-enter,
.screen-change-leave {
  opacity: 0;
}
</style>
