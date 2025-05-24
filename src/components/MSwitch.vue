<script>
import MButton from './MButton.vue'
import MSelect from './MSelect.vue'

export default {
  components: { MButton, MSelect },

  props: ['modelValue'],

  emits: ['update:model-value'],
}
</script>

<template>
  <div class="switch">
    <label>
      <input
        type="checkbox"
        v-bind:checked="modelValue"
        @change="$emit('update:model-value', $event.target.checked)"
      />
      <span class="lever"></span>
    </label>
  </div>
</template>

<style scoped>
.switch {
  display: inline-block;
  padding: 0 5px;
}
</style>

кнопка состояние пульса свитч + селект
