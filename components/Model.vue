<template>
  <div class="bg-transparent" style=" background: transparent;">
    <client-only>
      <div  class="w-1/2 bg-transparent">
        <ModelObj  backgroundAlpha="0"
        backgroundColor="0" src="/govArea.obj" mtl="/govArea.mtl" />
      </div>
    </client-only>
  </div>
</template>
<script>
import { ModelObj } from "vue-3d-model";
export default {
  components: { ModelObj },
};
</script>