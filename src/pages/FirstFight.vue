<template lang="pug">
.all-items
  game-board
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import GameBoard from "@/components/GameBoard.vue";

export default defineComponent({
  name: 'first-fight',
  components: {
    GameBoard,
  },
  data: () => ({

  }),
  methods: {
  },
});
</script>

<style scoped lang="scss">
  .all-items {
    width: 100%;
    height: 100%;
    background-color: black;
  }
</style>
