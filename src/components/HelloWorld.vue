<template lang="pug">
.main-board
  .table
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-board {
  width: 100vw;
  height: 100vh;

  .table {
    width: 100%;
    height: 100%;
    background-color: #660f0f;
    transform: perspective(105px) rotateX(15deg);
    transition: all .3s linear;

    &:hover {
      transform: perspective(105px) rotateX(0deg);
    }
  }
}
</style>
