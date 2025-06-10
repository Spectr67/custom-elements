<script>
import MCheckBoxes from './components/MCheckBoxes.vue'

export default {
  components: { MCheckBoxes },

  data() {
    return {
      foodMeals: {
        breakfast: false,
        lunch: false,
        dinner: false,
      },
    }
  },
}
</script>

<template>
  <section>
    <article>
      {{ foodMeals }}
    </article>
    <article>
      <MCheckBoxes v-model="foodMeals" />
    </article>
  </section>
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
