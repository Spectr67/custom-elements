<script>
import TestContainerA from './TestContainerA.vue'
import TestContainerB from './TestContainerB.vue'
import TestContainerC from './TestContainerC.vue'
import TestContainerD from './TestContainerD.vue'

export default {
  components: {
    TestContainerA,
    TestContainerC,
    TestContainerD,
    TestContainerB,
  },
}
</script>

<template>
  <div>
    <TestContainerD />
  </div>
</template>
