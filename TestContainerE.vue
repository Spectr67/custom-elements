<script>
import MTabs from './src/components/MTabs.vue'
import MTab from './src/components/MTab.vue'

export default {
  components: { MTabs, MTab },
  methods: {
    confirm() {
      this.confirmedFruit = this.fruit
    },
  },

  data() {
    return {
      posts: [
        {
          headerIcon: 'filter_drama',
          id: 1,
          title: 'First',
          text: 'First Lorem ipsum dolor sit amet!!!',
        },
        {
          headerIcon: 'place',
          id: 2,
          title: 'Second',
          text: 'Second Lorem ipsum dolor sit amet!!!',
        },
        {
          headerIcon: 'whatshot',
          id: 3,
          title: 'Third',
          text: 'Third Lorem ipsum dolor sit amet!!!',
        },
      ],
      tabs: [
        {
          id: 1,
          title: 'addFruit',
        },
        {
          title: 'confirmFruit',
          id: 2,
        },
        {
          title: 'currentFruit',
          id: 3,
        },
      ],
      fruit: '',
      confirmedFruit: '',
    }
  },
}
</script>
<template>
  <article>
    <!-- <MTabs :list="posts">
      <template #header="{ item }">
        <span>{{ item.title }}</span>
      </template>
      <template #body="{ item }">
        <h1>Новость!</h1>
        <h2>{{ item.text }}</h2>
      </template>
    </MTabs> -->
  </article>
  <article>
    {{ fruit }}
    <MTab :list="tabs">
      <template #addFruit>
        <input v-model="fruit" placeholder="Введите фрукт" type="text" />
      </template>

      <template #confirmFruit>
        <button @click="confirm">Подтвердить</button>
      </template>

      <template #currentFruit>
        <h1>Текущий фрукт: {{ confirmedFruit }}</h1>
      </template>
    </MTab>
  </article>
</template>

Введите фрукт - инпут текст подвердите фрукт кнопка текущий фркут h1
