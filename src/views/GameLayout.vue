<template lang="pug">
.main-game-container
  router-view
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'game-layout',
});
</script>

<style scoped lang="scss">
.main-game-container {
  width: 100%;
  height: 100vh;
}
</style>
