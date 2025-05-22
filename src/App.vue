<script>
import MButton from './components/MButton.vue'
import MSwitch from './components/MSwitch.vue'
import MFAB from './components/MFAB.vue'

export default {
  components: { MButton, MSwitch, MFAB },

  data() {
    return {
      // isPulsingFAB: false,
      // isShowFAB: false,
      isDarkMode: true,
    }
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
      <!-- <MFAB icon="home" :is-pulsing="isPulsingFAB" :is-show="isShowFAB" /> -->
    </article>
    <article></article>
  </section>
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
