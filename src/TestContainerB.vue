<script>
import MRadio from './components/MRadio.vue'

export default {
  components: { MRadio },

  data() {
    return {
      colors: ['red', 'green', 'blue'],
      selectedColor: 'red',
    }
  },
}
</script>

<template>
  <section>
    <article>
      <MRadio name="color" value="red" :selectedValue="selectedColor" />
      <MRadio name="color" value="red" :selectedValue="selectedColor" />
      <MRadio name="color" value="red" :selectedValue="selectedColor" />
    </article>
    <article>
      {{ selectedColor }}
    </article>
  </section>
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
