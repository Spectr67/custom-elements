<script>
import MCheckBox from './MCheckBox.vue'

export default {
  components: { MCheckBox },

  props: ['listAvailables', 'modelValue'],

  emits: ['update:modelValue'],

  computed: {
    listSelected: {
      get() {
        return this.modelValue
      },
      set(newSelected) {
        this.$emit('update:modelValue', newSelected)
      },
    },
  },
}
</script>

<template>
  <div>
    <MCheckBox
      v-for="item in listAvailables"
      :key="item"
      :caption="item"
      :model-value="listSelected.includes(item)"
      @update:model-value="
        $event
          ? listSelected.push(item)
          : (listSelected = listSelected.filter(a => a !== item))
      "
    />
  </div>
</template>

<!-- :selected="modelValue[value]"
      @update:selected="
        $emit('update:modelValue', { ...modelValue, [value]: $event })
      " -->
