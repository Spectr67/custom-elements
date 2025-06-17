<script>
export default {
  props: ['list'],

  mounted() {
    const el = this.$refs.elUl
    const options = { accordion: true }
    M.Collapsible.init(el, options)
  },

  data() {
    return {
      o: 1500,
    }
  },

  watch: {
    o: {
      deep: true,
      handler(newValue) {
        console.log('>>>>', newValue)
      },
    },
  },

  methods: {
    doSomething(x) {
      this.o = x()
    },
  },
}
</script>

<template>
  <ul ref="elUl" class="collapsible">
    <li v-for="item of list" :key="item.id">
      <div class="collapsible-header">
        <i class="material-icons">{{ item.headerIcon }}</i>
        <slot name="header" :item="item"></slot>
      </div>
      <div class="collapsible-body">
        <slot name="body" :item="item" :o="o" :doSomething="doSomething"></slot>
      </div>
    </li>
  </ul>
</template>

<style scoped>
[type='checkbox'] {
  position: static !important;
  opacity: 1 !important;
  pointer-events: all !important;
}
</style>
