<script>
import MButton from './components/MyButton.vue'
import Navbar from './components/Navbar.vue'
import MForm from './components/MForm.vue'

export default {
  components: {
    MButton,
    Navbar,
    MForm,
  },
  data() {
    return {
      showForm: false,
    }
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm
    },
  },
}
</script>

<template>
  <Navbar />
  <section>
    <article>
      <MButton @click="toggleForm" caption="Логин" class="yo" />
    </article>
  </section>

  <MForm v-if="showForm" @close="hideForm" />
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
