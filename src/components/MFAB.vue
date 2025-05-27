<script>
export default {
  props: ['icon', 'isPulsing', 'isShow'],

  data() {
    return {
      isHidden: !this.isShow,
    }
  },

  watch: {
    isShow(newVal) {
      if (newVal) {
        this.isHidden = false
      } else {
        setTimeout(() => (this.isHidden = true), 200)
      }
    },
  },

  mounted() {
    if (!this.isShow) this.isHidden = true
  },
}
</script>
<template>
  <a
    class="btn-floating btn-large waves-effect waves-light scale-transition"
    :class="{
      pulse: isPulsing,
      'scale-out': !isShow,
      'scale-in': isShow,
      'scale-hide': isHidden,
    }"
  >
    <i class="material-icons">{{ icon }}</i>
  </a>
</template>
