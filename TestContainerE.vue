<script>
import MTabs from './src/components/MTabs.vue'
import MTab from './src/components/MTab.vue'

export default {
  components: { MTabs, MTab },

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
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
      fruit: '',
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
    <MTab :list="tabs"
      >Введите фрукт,подвердите фрукт,текущий фрукт
      <template #input>
        <input type="text" />
      </template>
      <template #confirm>
        <button>button</button>
      </template>
      <template #chosen>
        <h1>hello</h1>
      </template>
    </MTab>
  </article>
</template>

Введите фрукт - инпут текст подвердите фрукт кнопка текущий фркут h1
