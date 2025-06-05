<script>
import MAccordion from './components/MAccordion.vue'

export default {
  components: { MAccordion },

  data() {
    return {
      posts: [
        {
          id: 1,
          tille: 'First',
          titleIcon: 'filter_drama',
          text: 'First Lorem ipsum dolor sit amet!!!',
        },
        {
          id: 2,
          tille: 'Second',
          titleIcon: 'place',
          text: 'Second Lorem ipsum dolor sit amet!!!',
        },
        {
          id: 3,
          tille: 'Third',
          titleIcon: 'whatshot',
          text: 'Third Lorem ipsum dolor sit amet!!!',
        },
      ],
    }
  },
}
</script>

<template>
  <section>
    <article>
      <MAccordion :posts="posts">
        <template #default="{ message, age, qqq }">
          <h1>Lorem ipsum dolor sit amet!!!</h1>
          <h2>{{ message }}</h2>
          <h3>{{ age }}</h3>
          <h4>{{ qqq }}</h4>
        </template>
      </MAccordion>
    </article>

    <article>
      <MAccordion v-slot="{ message, age, qqq }" :posts="posts">
        <h1>Lorem ipsum dolor sit amet!!!</h1>
        <h2>{{ message }}</h2>
        <h3>{{ age }}</h3>
        <h4>{{ qqq }}</h4>
      </MAccordion>
    </article>
  </section>
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
