<script>
import MAccordion from './components/MAccordion.vue'

export default {
  components: { MAccordion },

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
      users: [
        {
          headerIcon: 'person',
          id: 1,
          nick: 'Alex',
          email: 'alex@google.com',
          passwd: 'qwerty',
          balance: 333,
          isBanned: false,
        },
        {
          headerIcon: 'person',
          id: 2,
          nick: 'Xela',
          email: 'xela@google.com',
          passwd: 'ytrewq ',
          balance: 222,
          isBanned: false,
        },
      ],
    }
  },

  methods: {
    foo(e) {
      console.log('>>', e)
    },
  },
}
</script>

<template>
  <section>
    <article>
      <MAccordion :list="users">
        <template #header="{ item }">
          <span v-on:click="item += {}">{{ item.nick }}</span>
        </template>
        <template #body="{ item, o }">
          {{ o }}
          <h1 @click="o += '!'">Пользователь!</h1>
          <h2>{{ item.email }}</h2>
          <input
            :value="item.passwd"
            @input="item.passwd = $event.target.value"
          />
          <input type="range" v-model="item.balance" />
          <input type="checkbox" v-model="item.isBanned" />
        </template>
      </MAccordion>
    </article>
    <article>
      <MAccordion :list="users">
        <template #header="{ item }">
          <span>{{ item.nick }}</span>
        </template>
        <template #body="{ item }">
          <h1>Пользователь!</h1>
          <h2>{{ item.email }}</h2>
          <input v-model="item.passwd" />
          <input type="range" v-model="item.balance" />
          <input type="checkbox" v-model="item.isBanned" />
        </template>
      </MAccordion>
    </article>

    {{ users }}

    <article>
      <MAccordion :list="posts">
        <template #header="{ item }">
          <span>{{ item.title }}</span>
        </template>
        <template #body="{ item }">
          <h1>Новость!</h1>
          <h2>{{ item.text }}</h2>
        </template>
      </MAccordion>
    </article>
  </section>
</template>

<style scoped>
article {
  padding: 25px;
}
</style>
