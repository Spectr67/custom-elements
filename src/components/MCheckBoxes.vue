<script>
import MCheckBox from './MCheckBox.vue'

export default {
  components: { MCheckBox },
  props: ['name', 'values', 'modelValue'],
  emits: ['update:modelValue'],
}
</script>

<template>
  <div>
    <MCheckBox
      v-for="value of modelValue"
      :key="value"
      :name="value"
      :value="value"
      :selected="modelValue[value]"
      @update:selected="
        $emit('update:modelValue', { ...modelValue, [value]: $event })
      "
    />
  </div>
</template>
