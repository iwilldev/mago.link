<template>
  <div id="default--template">
    <ul id="background--animation">
      <li :key="icon.id" v-for="icon in backgroundIcons" :style="{ left: icon.left, width: icon.width, height: icon.height, animationDelay: icon.animationDelay, animationDuration: icon.animationDuration, background: `url(${require(`~/assets/images/icons/background/0${icon.id}.svg`)})` }"></li>
    </ul>
    <NavigationTopBar />
    <Nuxt id="content--container" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      backgroundIcons: [
        { left: "15%", animationDelay: "0s", animationDuration: "16s", id: 0 },
        { left: "35%", animationDelay: "2s", animationDuration: "14s", id: 1 },
        { left: "25%", animationDelay: "3s", animationDuration: "19s", id: 2 },
        { left: "45%", animationDelay: "1s", animationDuration: "17s", id: 3 },
        { left: "55%", animationDelay: "6s", animationDuration: "13s", id: 4 },
        { left: "65%", animationDelay: "4s", animationDuration: "18s", id: 5 },
        { left: "75%", animationDelay: "0s", animationDuration: "15s", id: 6 },
        { left: "85%", animationDelay: "5s", animationDuration: "12s", id: 7 },
      ],
    };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500;700&family=Montserrat&display=swap");

html {
  font-size: 16px;
  font-size: clamp(14px, 5px + 1vw, 22px);
}

#default--template {
  min-height: 100vh;

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
  background: url("~assets/images/global/background.jpg") no-repeat;
  background-size: cover;
}

#background--animation li {
  position: absolute;
  display: block;
  list-style: none;
  animation: animate 25s linear infinite;
  bottom: -150px;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -98;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.5;
  }

  100% {
    transform: translateY(-100vh) rotate(720deg);
    opacity: 0;
  }
}
</style>
