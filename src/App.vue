<script>
import TestContainerE from '../TestContainerE.vue'
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
    TestContainerE,
  },
}
</script>

<template>
  <div>
    <!-- <TestContainerD @qwe="console.log('===>>>', $event)" /> -->
    <TestContainerE />
  </div>
</template>
