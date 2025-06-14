<script>
import MCheckBox from './components/MCheckBox.vue'
import MCheckBoxes from './components/MCheckBoxes.vue'

export default {
  components: { MCheckBoxes, MCheckBox },

  data() {
    return {
      foodMeals: {
        breakfast: false,
        lunch: false,
        dinner: false,
      },
      isConfirmed: false,
    }
  },
}
</script>

<template>
  <section>
    <article>
      <h1>
        {{ isConfirmed }}
      </h1>
    </article>
    <article>
      <MCheckBox v-model="isConfirmed" caption="Я согласен" />
    </article>
    <article>
      <!-- <MCheckBoxes v-model="foodMeals" /> -->
    </article>
  </section>
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
