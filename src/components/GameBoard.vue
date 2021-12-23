<template lang="pug">
.main-board
  .table
    .card-fight-section
      section.enemy
        .preview-line
          .preview-item(v-for="(item, i) in ['','','','']"
            @mouseover="hoveredCard = 'frs_'+ i"
            @mouseleave="hoveredCard = ''")
            fight-card-place(:color="hoveredCard === ('frs_'+i) ? '#fff' : color")
        .fight-line
          .fight-item(v-for="(item, i) in ['','','','']"
            @mouseover="hoveredCard = 'scn_'+ i"
            @mouseleave="hoveredCard = ''")
            fight-card-place(:color="hoveredCard === ('scn_'+i) ? '#fff' : color")
      section.my-cards
        .fight-line
          .fight-item(v-for="(item, i) in ['','','','']"
            @mouseover="hoveredCard = 'thr_'+ i"
            @mouseleave="hoveredCard = ''")
            fight-card-place(:color="hoveredCard === ('thr_'+i) ? '#fff' : color")
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import FightCardPlace from "@/components/FightCardPlace.vue";

export default defineComponent({
  name: 'game-board',
  components: {
    FightCardPlace
  },
  data: () => ({
    color: '',
    hoveredCard: '',
  }),
  mounted() {
    this.color = '#f6690b';
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-board {
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  .table {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    height: 100%;

    background-image: url("~@/assets/table.png");
    transform: perspective(90px) rotateX(15deg);
    /*transition: all 0.3s linear;*/

    &::after, &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.4);
      pointer-events: none;
    }

    &::before {
      background-image: radial-gradient(rgba(0, 0, 0, 0), #000000 56%, #000000 90%);
    }

    .card-fight-section {
      position: relative;
      top: 120px;
      display: flex;
      flex-direction: column;
      width: auto;
      height: auto;

      section {
        &.enemy {
          .svg-card {
            transform: rotate(180deg);
          }
        }

        .preview-line, .fight-line {
          display: flex;
        }

        .preview-item, .fight-item {
          width: 120px;
          height: 150px;
          margin: 8px;
        }
      }
    }
  }
}
</style>
