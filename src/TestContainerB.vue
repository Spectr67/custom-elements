<script>
import MCheckBox from './components/MCheckBox.vue'
import MCheckBoxes from './components/MCheckBoxes.vue'

export default {
  components: { MCheckBoxes, MCheckBox },

  data() {
    return {
      availableFoodMeals: ['breakfast', 'lunch', 'dinner'],

      selectedFoodMeals: [],

      isConfirmed: false,
    }
  },
}
</script>

<template>
  {{ selectedFoodMeals }}
  <section>
    <!-- <article>
      <h1>{{ selectedFoodMeals }}</h1>
      <input type="checkbox" v-model="selectedFoodMeals" value="aaa" />
      <input type="checkbox" v-model="selectedFoodMeals" value="bbb" />
      <input type="checkbox" v-model="selectedFoodMeals" value="ccc" />
    </article> -->

    <article>
      <!-- <h1>{{ isConfirmed }}</h1> -->
    </article>
    <article>
      <!-- <MCheckBox v-model="isConfirmed" caption="Я согласен" /> -->
    </article>
    <article>
      <MCheckBoxes
        :list-availables="availableFoodMeals"
        v-model="selectedFoodMeals"
      />
    </article>
    <article>
      <MCheckBoxes
        :list-availables="availableFoodMeals"
        v-model="selectedFoodMeals"
      />
    </article>
  </section>
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
