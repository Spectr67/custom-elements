<script>
export default {
  props: ['links', 'modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      selectedLink: this.modelValue || null,
    }
  },

  watch: {
    selectedLink(newValue) {
      this.$emit('update:modelValue', { ...newValue })
    },
  },
}
</script>

<template>
  <div class="collection">
    <a
      v-for="link in links"
      :key="link.id"
      :href="link.url"
      class="collection-item"
      :class="{ active: selectedLink?.id === link.id }"
      @click.prevent="selectedLink = link"
    >
      {{ link.title }}
    </a>
  </div>
</template>

<style scoped>
div {
  width: 50%;
}
</style>
