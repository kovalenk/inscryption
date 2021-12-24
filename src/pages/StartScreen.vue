<template lang="pug">
.intro
  .background-effect
  h2
    | Inscr
    span Y
    | ption
  h3 {{$t('main_menu.press_any_key')}}
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'start-screen',
  mounted() {
    setTimeout(() => {
      document.addEventListener('keypress', this.keypressEvent);
    }, 3000);
  },
  beforeUnmount() {
    document.removeEventListener('keypress', this.keypressEvent);
  },
  methods: {
    keypressEvent(): void {
      this.$router.push({path: '/main-menu'});
    },
  },
});
</script>

<style scoped lang="scss">
  @import "~@/scss/animations/start-screen.scss";

  .intro {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #000;

    animation-name: background_presenting;
    animation-duration: .4s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;

    &::before, &::after {
      position: absolute;
      top: 31vh;
      left: -400px;
      content: '';

      width: 420px;
      height: 70px;

      background-image: url('~@/assets/left-title-arrow.svg');
      background-repeat: no-repeat;
      background-size: 393px 35px;

      animation-duration: .4s;
      animation-delay: 1.2s;
      animation-fill-mode: forwards;
      animation-name: show-left-arrow;
    }

    &::after {
      left: unset;
      right: -370px;
      transform: scale(-1, 1);
      animation-name: show-right-arrow;
    }

    .background-effect {
      position: absolute;
      opacity: 0.3;
      z-index: -4;

      width: 100%;
      height: 100%;

      background-image: url("~@/assets/monitor_pattern.png");
      animation-name: add-background-effect;
      animation-duration: .4s;
      animation-delay: 1.5s;
      animation-fill-mode: forwards;
    }

    h2 {
      position: relative;
      margin-bottom: 7vh;

      font-family: $font_family_fredericka;
      font-size: 140px;
      letter-spacing: 8px;
      text-transform: uppercase;

      color: #00ffa2;
      text-shadow: 0 0 30px rgba(255, 255, 255, 75%);

      animation-name: h1_presenting;
      animation-duration: 1s;
      animation-delay: 1.5s;
      animation-fill-mode: forwards;

      &::before {
        content: '';
        position: absolute;
        left: -5%;
        top: -10px;
        width: 110%;
        height: 180px;
        background-color: black;
        animation-name: lazy-loading;
        animation-fill-mode: forwards;
        animation-duration: 1.5s;
      }

      span {
        position: relative;
        top: -400px;

        margin: 0 12px;
        font-size: 145px;

        animation-name: span-dropping;
        animation-duration: .4s;
        animation-delay: 1.2s;
        animation-fill-mode: forwards;
      }
    }

    h3 {
      margin-bottom: 28vh;

      font-family: $font_family_press_start;
      font-size: 28px;
      text-transform: uppercase;
      opacity: 0;
      color: black;

      animation-name: opacity_looping;
      animation-iteration-count: infinite;
      animation-duration: 2s;
      animation-delay: 2.8s;
    }
  }
</style>
