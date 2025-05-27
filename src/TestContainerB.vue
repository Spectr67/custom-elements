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
      <MRadio
        v-for="color in colors"
        :key="color"
        name="color"
        :value="color"
        :selectedValue="selectedColor"
        @update:selectedValue="selectedColor = $event"
      />
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
