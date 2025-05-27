<script>
export default {
  props: ['name', 'value', 'selected'],

  emits: ['update:selected'],

  computed: {
    capitalCasedValue() {
      return this.value[0].toUpperCase() + this.value.slice(1)
    },
  },
}
</script>

<template>
  <div>
    <label>
      <input
        class="with-gap"
        type="radio"
        :name
        :value
        :checked="selected === value"
        @change="$emit('update:selected', $event.target.value)"
      />
      <span>{{ capitalCasedValue }}</span>
    </label>
  </div>
</template>
