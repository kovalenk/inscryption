<template lang="pug">
.intro
  .logo
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

  background-color: #c28b63;

  .logo {
    width: 697px;
    height: 178px;
    margin-bottom: 60px;

    background-color: gray;
  }

  h3 {
    margin-bottom: 120px;

    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;

    color: black;
  }
}
</style>
