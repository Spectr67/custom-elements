<script>
import MCheckBox from './MCheckBox.vue'

export default {
  components: { MCheckBox },

  props: ['listAvailables'],

  emits: ['update:modelValue'],

  data() {
    return {
      array: [],
    }
  },
}
</script>

<template>
  <h1>{{ array }}</h1>
  <div>
    <MCheckBox
      v-for="item of listAvailables"
      :key="item"
      :caption="item"
      :model-value="array.includes(item)"
      @update:model-value="
        $event ? array.push(item) : (array = array.filter(a => a !== item))
      "
    />
  </div>
</template>
