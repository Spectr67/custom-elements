<script>
export default {
  props: ['icon', 'isPulsing'],

  data() {
    return {
      isHidden: true,
    }
  },

  mounted() {
    requestAnimationFrame(() => (this.isHidden = false))
  },
}
</script>

<template>
  <a
    class="btn-floating btn-large waves-effect waves-light scale-transition"
    :class="{ pulse: isPulsing, 'scale-out': isHidden }"
  >
    <i class="material-icons">{{ icon }}</i>
  </a>
</template>
