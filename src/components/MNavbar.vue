<script>
import MButton from './MButton.vue'
export default {
  components: {
    MButton,
  },
  props: {
    caption: '',
    link: '',
  },
}
</script>

<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><MButton caption="link1" link="https://google.com" /></li>
        <li><MButton caption="link2" link="https://google.com" /></li>
        <li><MButton caption="link3" link="https://google.com" /></li>
      </ul>
    </div>
  </nav>
</template>
