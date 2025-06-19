<script>
export default {
  props: ['list'],
  mounted() {
    const el = this.$refs.tabs
    const swipeable = { sw: true }
    if (el) {
      M.Tabs.init(el, swipeable)
    }
  },
}
</script>

<template>
  <div class="row">
    <div class="col s12">
      <ul class="tabs" id="tabs-swipe-demo" ref="tabs">
        <li class="tab col s3" v-for="item in list" :key="item.id">
          <a :href="'#tab-' + item.id" class="active">
            <slot name="header" :item="item"></slot>
          </a>
        </li>
      </ul>
    </div>

    <div
      v-for="item in list"
      :key="'content-' + item.id"
      :id="'tab-' + item.id"
      id="test-swipe-1"
      class="col s12"
    >
      <slot name="body" :item="item"></slot>
    </div>
  </div>
</template>
