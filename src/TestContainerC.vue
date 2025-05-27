<script>
import MRadioGroup from './components/MRadioGroup.vue'

export default {
  components: { MRadioGroup },

  data() {
    return {
      colors: ['red', 'green', 'blue'],
      colors: ['red', 'green', 'blue'],
      exteriorColor: '',
      interiorColor: '',
      badColors: ['red', 'green', 'blue'],
      goodColors: ['pink', 'magenta', 'crimson'],
      superColor: '',
    }
  },
}
</script>

<template>
  <button @click="colors.push('pink')"></button>
  <section>
    <article>
      <MRadioGroup name="bad" :values="badColors" v-model="superColor" />
    </article>
    <article>
      <MRadioGroup name="good" :values="goodColors" v-model="superColor" />
    </article>
    <article>
      <h1>{{ superColor }}</h1>
    </article>
  </section>

  <!-- <section>
    <article>
      <MRadioGroup name="exterior" :values="colors" v-model="exteriorColor" />
    </article>
    <article>
      <MRadioGroup name="interior" :values="colors" v-model="interiorColor" />
    </article>

    <article>
      <h1>{{ exteriorColor }}</h1>
    </article>
    <article>
      <h1>{{ interiorColor }}</h1>
    </article>
  </section> -->
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
