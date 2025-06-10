<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
}
</script>

<template>
  <p v-for="(checked, meal) in modelValue" :key="meal">
    <label>
      <input
        type="checkbox"
        class="filled-in"
        :checked="checked"
        @change="
          $emit('update:modelValue', { ...modelValue, [meal]: !checked })
        "
      />
      <span>{{ meal }}</span>
    </label>
  </p>
</template>
