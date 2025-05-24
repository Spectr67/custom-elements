<script>
export default {
  props: ['name', 'value', 'selectedValue'],

  computed: {
    isChecked() {
      return this.selectedValue === this.value
    },

    capitalCasedValue() {
      return this.value[0].toUpperCase() + this.value.slice(1)
    },
  },
}
</script>

<template>
  {{ isChecked }}
  <div>
    <label>
      <input class="with-gap" type="radio" :name :value :checked="isChecked" />
      <span>{{ capitalCasedValue }}</span>
    </label>
  </div>
</template>
