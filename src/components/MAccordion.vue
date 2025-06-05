<script>
export default {
  props: ['posts'],

  mounted() {
    const el = this.$refs.elUl
    const options = { accordion: true }
    M.Collapsible.init(el, options)
  },
}
</script>

<template>
  <ul ref="elUl" class="collapsible">
    <li v-for="post of posts" :key="post.id">
      <div class="collapsible-header">
        <i class="material-icons">filter_drama</i>First
      </div>
      <div class="collapsible-body">
        <slot :message="'hello slot'" :age="42" :qqq="'aaa'"></slot>
      </div>
    </li>
  </ul>
</template>
