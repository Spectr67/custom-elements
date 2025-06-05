<script>
export default {
  props: ['links'],
  data() {
    return {
      activeIndex: null,
    }
  },
}
</script>

<template>
  <div class="collection">
    <a
      v-for="(item, index) in links"
      :key="index"
      :href="item.url"
      class="collection-item"
      :class="{ active: activeIndex === index }"
      @click.prevent=";(activeIndex = index), $emit('link-selected', item)"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<style scoped>
div {
  width: 50%;
}
</style>
