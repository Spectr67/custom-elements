<script>
export default {
  mounted() {
    const elems = this.$refs.select
    M.FormSelect.init(elems, {})
  },

  data() {
    return {
      YourCarBrand: [],
    }
  },
}
</script>

<template>
  <span>Selected: {{ YourCarBrand.join(', ') }}</span>
  <div class="input-field col s12">
    <select
      multiple
      ref="select"
      @change="
        YourCarBrand = Array.from($event.target.selectedOptions).map(
          o => o.value
        )
      "
    >
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
