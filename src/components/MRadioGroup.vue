<script>
import MRadio from './MRadio.vue'

export default {
  components: { MRadio },

  props: ['name', 'values', 'modelValue'],

  emits: ['update:model-value'],
}
</script>

<template>
  <div>
    <MRadio
      v-for="value of values"
      :key="value"
      :name
      :value
      :selected="selected"
      @update:selected="$emit('update:model-value', $event)"
    />
  </div>
</template>
