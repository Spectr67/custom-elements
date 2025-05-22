<script>
import MButton from './components/MButton.vue'
import MNavbar from './components/MNavbar.vue'
import MForm from './components/MForm.vue'
import MFAB from './components/MFAB.vue'
import MSwitch from './components/MSwitch.vue'

export default {
  components: {
    MButton,
    MNavbar,
    MForm,
    MFAB,
    MSwitch,
  },
  data() {
    return {
      hasNewMessage: false,
      toggleFAB: false,
    }
  },
}
</script>

<template>
  <!-- <MNavbar /> -->
  <section>
    <article>
      <MButton @click="hasNewMessage = !hasNewMessage" caption="New Message" />
      <MButton @click="toggleFAB = !toggleFAB" caption="toggleFAB" />
    </article>
    <article>
      <MFAB icon="home" :is-pulsing="hasNewMessage" :is-show="toggleFAB" />
    </article>
    <article>
      {{ hasNewMessage }}
    </article>
  </section>
  <MSwitch />
  <!-- <MForm v-if="showForm" @close="hideForm" /> -->
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
