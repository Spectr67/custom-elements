<script>
import MButton from './components/MButton.vue'
import MSwitch from './components/MSwitch.vue'
import MFAB from './components/MFAB.vue'
import MSelect from './components/MSelect.vue'
import MInput from './components/MInput.vue'
import MLinks from './components/MLinks.vue'

export default {
  components: { MButton, MSwitch, MFAB, MSelect, MInput, MLinks },

  data() {
    return {
      isPulsingFAB: false,
      isShowFAB: true,
      isDisabledSwitch: false,
      cars: ['Ferrari', 'Lamborghini', 'Porsche'],
      selectedCars: [],
      firstName: '',
      selectedLink: '',
      links: [
        { id: 1, title: 'Google', url: 'h' },
        { id: 2, title: 'Google Maps', url: 'h' },
        { id: 3, title: 'Google Images', url: 'h' },
        { id: 4, title: 'Gmail', url: 'h' },
        { id: 5, title: 'Google Drive', url: 'h' },
      ],
    }
  },

  watch: {
    firstName(newValue) {
      console.log(newValue)
    },
  },
}
</script>

<template>
  <section>
    <!-- <article>
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
    </article> -->
    <article>{{ firstName }}</article>
    <article>
      <MInput v-model.trim="firstName" caption="First Name" />
    </article>
    <article>
      <MInput v-model="firstName" caption="First Name" />
    </article>
    <article>
      {{ selectedLink.title }}
    </article>
    <article>
      <MLinks :links="links" v-model="selectedLink" />
    </article>
    <article>
      {{ selectedLink }}
    </article>
  </section>
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
