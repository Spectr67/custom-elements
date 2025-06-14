<script>
export default {
  props: ['name', 'value', 'selected'],
  emits: ['update:selected'],
}
</script>

<template>
  <div>
    <label>
      <input
        type="checkbox"
        class="filled-in"
        :name="name"
        :value="value"
        :checked="selected"
        @change="$emit('update:selected', !selected)"
      />
      <span>{{ value }}</span>
    </label>
  </div>
</template>
