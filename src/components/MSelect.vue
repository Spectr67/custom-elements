<script>
export default {
  mounted() {
    const elems = this.$refs.select
    M.FormSelect.init(elems, {})
  },
  props: ['cars'],

  emits: ['choisen-car'],

  data() {
    return {
      choisedCar: [],
    }
  },
  methods: {
    onChange(event) {
      this.choisedCar = Array.from(event.target.selectedOptions).map(
        o => o.value
      )
      this.$emit('choisen-car', this.choisedCar)
    },
  },
}
</script>

<template>
  <span>Selected: {{ choisedCar.join(', ') }}</span>
  <div class="input-field col s12">
    <select multiple ref="select" @change="onChange">
      <option value="" disabled selected>Choose your option</option>
      <option value="BMW">BMW</option>
      <option value="Mercedess">Mercedess</option>
      <option value="Audi">Audi</option>
    </select>
    <label>Select your car</label>
  </div>
</template>

<style scoped>
div {
  width: 35%;
}
</style>
