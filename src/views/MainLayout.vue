<template lang="pug">
.page-container
  router-view
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'main-layout',
});
</script>

<style scoped lang="scss">
.page-container {
  width: 100%;
  height: 100vh;
}
</style>
