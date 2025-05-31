<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {}
  },
  methods: {
    handleInput(event) {
      const value = event.target.value
      if (value.trim() === '') return
      this.$emit('update:modelValue', value)
    },
  },
}
</script>

<template>
  <div class="row">
    <div class="input-field col s6">
      <input
        :value="modelValue"
        @input="handleInput"
        id="first_name2"
        type="text"
        class="validate"
      />
      <label class="active" for="first_name2">First Name</label>
    </div>
  </div>
</template>

<style scoped>
.row {
  width: 50%;
}
</style>

connections links список
