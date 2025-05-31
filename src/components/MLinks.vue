<script>
export default {
  props: ['links'],
}
</script>

<template>
  <div class="collection">
    <a
      v-for="(item, index) in links"
      :key="index"
      :href="item"
      class="collection-item"
    >
      {{ item }}
    </a>
  </div>
</template>

<style scoped>
div {
  width: 50%;
}
</style>
