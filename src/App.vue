<script>
import MButton from './components/MyButton.vue'

export default {
  components: {
    MButton,
  },
}
</script>

<template>
  <section>
    <article>
      <MButton caption="Логин" class="disabled yo" />
    </article>
  </section>
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
