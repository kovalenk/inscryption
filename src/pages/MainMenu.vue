<template lang="pug">
.nav-menu
  router-link(:to="`/${path}`" :class="{'show-element': path}") Продолжить
  .selected-option
    .card(
      ref="cardBlock"
      @click="applyCard")
  .items-list
    .item(v-for="(option, i) in navItems"
      :key="'option_' + i"
      :ref="setItemRef"
      :class="{'active': activeItem === i}"
      @click="toggleItem(i)")
</template>

<script lang="ts">
import {defineComponent} from 'vue';

interface NavOption {
  type: string;
  path: string;
  status: boolean;
  icon: string;
}

type RefInterface = HTMLDivElement | undefined;

export default defineComponent({
  name: 'main-menu',
  data: () => ({
    navItems: [] as NavOption[],
    activeItem: -1,
    itemRefs: [] as HTMLDivElement[],
    path: '',
  }),
  mounted() {
    this.initMenuOptions();
  },
  methods: {
    setItemRef(el: HTMLDivElement): void {
      if (el) {
        this.itemRefs.push(el);
      }
    },
    applyCard(): void {
      if (this.activeItem > -1) {
        const cardRef: RefInterface = this.$refs.cardBlock as HTMLDivElement;
        if(cardRef) {
          const activeCard: RefInterface = this.itemRefs[this.activeItem!];
          if(activeCard) {
            this.path = this.navItems[this.activeItem].path;
            const calculateTopPosition: number = -29 - (activeCard.offsetTop - cardRef.offsetTop);
            const calculateLeftPosition: number = -11 + activeCard.offsetLeft - cardRef.offsetLeft;
            activeCard.style.top = calculateTopPosition + 'px';
            activeCard.style.left = -calculateLeftPosition + 'px';
          }
        }
      }
    },
    toggleItem(index: number): void {
      if(this.activeItem === index) {
        this.activeItem = -1;
        const activeCard: RefInterface = this.itemRefs[index];
        if(activeCard) {
          activeCard.style.top = 0 + 'px';
          activeCard.style.left = 0 + 'px';
        }
      } else {
        this.activeItem = index;
      }
    },
    initMenuOptions(): void {
      const keys: string[] = ['new-game', 'continue', 'settings', 'about', 'exit'];
      this.navItems = keys.map((key: string) => ({
        type: key,
        path: 'game/first-fight',
        status: false,
        icon: key + '.svg',
      }));
    },
  },
});
</script>

<style scoped lang="scss">
  .nav-menu {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #2e2e2e;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;

      /*content: '';*/

      background-image: radial-gradient(#2e2e2e 65%, #000000 150%);
    }

    a {
      position: relative;
      top: -120px;
      opacity: 0;
      pointer-events: none;

      font-size: 55px;
      color: #ff9c4b;

      transition: all .4s ease-in;

      &.show-element {
        opacity: 1;
        cursor: pointer;
        pointer-events: auto;
      }
    }

    .selected-option {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 370px;
      margin-bottom: 95px;

      border-style: solid;
      border-color: black;
      border-width: 4px 0;

      background-color: #955a2f;

      .card {
        cursor: pointer;

        width: 180px;
        height: 265px;

        border: 6px solid #686868;
        outline: 5px solid black;

        background-image: radial-gradient(#565656, #282828 60%, #000000 90%);
      }
    }

    .items-list {
      display: flex;
      justify-content: center;

      width: 100%;
      height: 255px;
      margin-bottom: 40px;

      .item {
        position: relative;
        top: 0;
        left: 0;
        cursor: pointer;

        width: 152px;
        height: auto;
        margin: 0 10px;

        background-color: #77a763;
        border: 4px solid white;

        transition: all .4s linear;

        &.active, &:hover {
          outline: 5px solid #ff9c4b;
        }

        &.active {
          top: -40px;
          width: 162px;
        }
      }
    }
  }
</style>
