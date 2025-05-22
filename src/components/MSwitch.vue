<script>
import MButton from './MButton.vue'
import MSelect from './MSelect.vue'

export default {
  components: { MButton, MSelect },
  data() {
    return {
      isDisabled: true,
      isChecked: false,
    }
  },
}
</script>

<template>
  <div class="switch" :class="{ 'z-depth-5': !isDisabled }">
    <div>
      <span>Are you ready?</span>
      <MButton
        caption="Start"
        icon="rocket_launch"
        @click="isDisabled = !isDisabled"
      />
    </div>
    <label>
      NO
      <input type="checkbox" :disabled="isDisabled" v-model="isChecked" />
      <span class="lever"></span>
      YES
    </label>
  </div>
  <MSelect v-if="isChecked" @click="newMessageRecived" />
</template>

<style scoped>
.switch {
  padding: 20px;
}
</style>
