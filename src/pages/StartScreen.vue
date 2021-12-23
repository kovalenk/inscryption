<template lang="pug">
.intro
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
  data: () => ({
    showLogo: true,
  }),
  mounted() {
    document.addEventListener('keypress', this.keypressEvent);
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
.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: #000;

  h2 {
    position: relative;
    margin-bottom: 7vh;

    font-family: 'Fredericka the Great';
    font-size: 140px;
    letter-spacing: 8px;
    text-transform: uppercase;

    color: #00ffa2;
    text-shadow: 0 0 30px rgba(255, 255, 255, 75%);

    animation-name: h1_presenting;
    animation-duration: 1s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;

    @keyframes h1_presenting {
      0% {
        color: #00ffa2;
        text-shadow: 0 0 30px rgba(255, 255, 255, 75%);
      }
      100% {
        color: #ffe3cb;
        text-shadow: 0 3px 1px #442000,
        0 4px 1px #442000,
        0 5px 1px #442000,
        0 6px 1px #442000,
        0 7px 1px #442000;
      }
    }

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

      @keyframes lazy-loading {
        0% {
          left: -5%;
          width: 110%;
        }
        100% {
          left: 49%;
          width: 0;
        }
      }
    }

    span {
      position: relative;
      top: -400px;

      margin: 0 12px;
      font-size: 145px;

      animation-name: span-droping;
      animation-duration: .4s;
      animation-delay: 1.2s;
      animation-fill-mode: forwards;

      @keyframes span-droping {
        0% {
          top: -400px;
        }
        100% {
          top: 12px;
        }
      }
    }
  }

  h3 {
    margin-bottom: 28vh;

    font-family: 'Press Start 2P';
    font-size: 28px;
    text-transform: uppercase;
    opacity: 0;
    color: black;

    animation-name: opacity_looping;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-delay: 2.8s;

    @keyframes opacity_looping {
      0%, 25%, 50% {
        opacity: 1;
      }
      51%, 75%, 100% {
        opacity: .3;
      }
    }
  }

  animation-name: background_presenting;
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;

  @keyframes background_presenting {
    0% {
      background-color: #000000;
    }
    100% {
      background-color: #a26939;
    }
  }
}
</style>
