<template>
  <div id="default--template">
    <ul id="background--animation">
      <li
        :key="icon.id"
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
    <the-navigation-top-bar />
    <transition name="home">
      <Nuxt id="content--container" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheNavigationTopBar from "~/components/TheNavigationTopBar.vue";
export default Vue.extend({
  components: { TheNavigationTopBar },
  transition: {
    name: "home",
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

#default--template {
  min-height: 100%;

  display: flex;
  flex-direction: column;
}

#background--animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -99;
  background-size: cover;
  will-change: opacity transform;
}

#background--animation li {
  position: absolute;
  display: block;
  list-style: none;
  animation: animate linear infinite alternate-reverse;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -98;
  opacity: 0.05;
}

@keyframes animate {
  0% {
    transform: rotate(0deg) translate(55vw, -55vh);
  }

  100% {
    transform: rotate(360deg) translate(-55vw, 55vh);
  }
}

.home-enter-active {
  transition: 0.5s;
}
.home-enter,
.home-leave {
  opacity: 0;
}
</style>
