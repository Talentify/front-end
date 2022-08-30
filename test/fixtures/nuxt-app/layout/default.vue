<template>
  <div class="MainLayout">
    <component
      :is="wrapperTagName"
      v-if="isWrapperVisible"
      key="wrapper"
      data="MainLayout__wrapper"
      @click="onWrapperClick"
    >
      <span>{{ theNumber }}</span>
    </component>

    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class MainLayout extends Vue {
  get wrapperTagName(): string {
    return 'div';
  }

  get isWrapperVisible(): boolean {
    return true;
  }

  get theNumber(): number {
    return 1;
  }

  onWrapperClick() {
    console.log('poiajsdf');
  }
}
</script>

<style lang="scss">
.Mainlayout {
  display: flex;
  background-color: #aaaaaa;
}
</style>
