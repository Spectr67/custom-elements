<script>
export default {
  props: ['caption', 'icon'],
}
</script>

<template>
  <a class="waves-effect waves-light btn">
    <i v-if="icon" class="material-icons left">{{ icon }}</i>
    <span>{{ caption }}</span>
  </a>
</template>

<style scoped>
a {
  margin: 0 5px;
}
</style>
