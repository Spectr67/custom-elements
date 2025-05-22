<script>
import MButton from './MButton.vue'

export default {
  components: {
    MButton,
  },
  props: ['caption', 'icon'],
  emits: ['newMessageRecived'],
}
</script>

<template>
  <div class="input-field col s12">
    <MButton icon="heart_broken" @click="$emit('newMessageRecived')" />
    <!-- <select></select>
    <label>Materialize Select</label> -->
  </div>
</template>
