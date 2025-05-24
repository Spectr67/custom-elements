<script>
import MButton from './components/MButton.vue'
import MSwitch from './components/MSwitch.vue'
import MFAB from './components/MFAB.vue'
import MSelect from './components/MSelect.vue'

export default {
  components: { MButton, MSwitch, MFAB, MSelect },

  data() {
    return {
      // isPulsingFAB: false,
      // isShowFAB: false,
      isDarkMode: true,
      applesCounter: 0,
    }
  },
  computed: {
    isWhiteMode() {
      return !this.isDarkMode
    },

    isApplesMorethan() {
      return this.applesCounter >= 3
    },
  },
}
</script>

<template>
  <!-- 
  <MButton @click="isShowFAB = !isShowFAB" caption="toggleFAB" /> -->
  <section>
    <article>
      <MButton @click="isDarkMode = !isDarkMode" caption="isDarkMode" />
    </article>
    <article>
      <span>DarkMode:</span>
      <!-- <MSwitch :is-checked="isDarkMode" @toggle="isDarkMode = $event" /> -->
      <!-- <MSwitch
        :model-value="isDarkMode"
        @update:model-value="isDarkMode = $event"
      /> -->
      <MSwitch v-model="isDarkMode" :is-disabled="false" />
    </article>
    <article>{{ isDarkMode }}</article>
    <article>
      <MFAB icon="home" :is-pulsing="isPulsingFAB" :is-show="isDarkMode" />
    </article>
    <article>
      <MSelect />
    </article>
  </section>
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
