<script>
import MButton from './components/MButton.vue'
import MSwitch from './components/MSwitch.vue'
import MFAB from './components/MFAB.vue'
import MSelect from './components/MSelect.vue'
import MInput from './components/MInput.vue'

export default {
  components: { MButton, MSwitch, MFAB, MSelect, MInput },

  data() {
    return {
      isPulsingFAB: false,
      isShowFAB: true,
      isDisabledSwitch: false,
      cars: ['Ferrari', 'Lamborghini', 'Porsche'],
      selectedCars: [],
      firstName: '',
    }
  },
}
</script>

<template>
  <section>
    <article>
      <MButton
        @click="isDisabledSwitch = !isDisabledSwitch"
        caption="isDisabledSwitch"
      />
    </article>
    <article>{{ isDisabledSwitch }}</article>
    <article>
      <span>isPulsingFAB:</span>
      <MSwitch v-model="isPulsingFAB" :is-disabled="isDisabledSwitch" />
    </article>
    <article>{{ isPulsingFAB }}</article>
    <article>
      <span>isShowFAB:</span>
      <MSwitch v-model="isShowFAB" :is-disabled="isDisabledSwitch" />
    </article>
    <article>{{ isShowFAB }}</article>
    <article>
      <MFAB icon="home" :is-pulsing="isPulsingFAB" :is-show="isShowFAB" />
    </article>
    <article>{{ selectedCars }}</article>
    <article>
      <MSelect :cars="cars" @choisen-car="selectedCars = $event" />
    </article>
    <article>{{ firstName }}</article>
    <article>
      <MInput @input="firstName = $event.target.value" />
    </article>
  </section>
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
