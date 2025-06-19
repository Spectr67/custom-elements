<script>
export default {
  props: ['list'],
  mounted() {
    const el = this.$refs.tabs
    const swipeable = { sw: true }
    requestAnimationFrame(() => M.Tabs.init(el, swipeable))
  },
}
</script>

<template>
  <div class="row">
    <div class="col s12">
      <ul class="tabs" ref="tabs">
        <li class="tab col s3" v-for="item in list" :key="item.id">
          <a :href="'#tab-' + item.id" class="active"> </a>
        </li>
      </ul>
    </div>

    <div v-for="name in names" :key="name" id="test-swipe-1" class="col s12">
      <slot :name="name"></slot>
    </div>
  </div>
</template>
