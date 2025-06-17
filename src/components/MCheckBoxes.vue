<script>
import MCheckBox from './MCheckBox.vue'

export default {
  components: { MCheckBox },

  props: ['listAvailables', 'modelValue'],

  emits: ['update:modelValue'],

  computed: {
    selected: {
      get() {
        return this.modelValue || []
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
      :model-value="selected.includes(item)"
      @update:model-value="
        checked => {
          if (checked && !selected.includes(item)) {
            selected = [...selected, item]
          } else if (!checked) {
            selected = selected.filter(i => i !== item)
          }
        }
      "
    />
  </div>
</template>

<!-- :selected="modelValue[value]"
      @update:selected="
        $emit('update:modelValue', { ...modelValue, [value]: $event })
      " -->
