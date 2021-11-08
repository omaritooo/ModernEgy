<template>
  <div class="" style="">
    <client-only>
      <nuxt-link to="">
        <div  class="bg-white">
          <ModelGltf  class="rounded-full" backgroundAlpha="0"
          backgroundColor="#FFF" :src="`/${namer}.glb`"  />
        </div>
      </nuxt-link>
    </client-only>
  </div>
</template>
<script>
import { ModelGltf  } from "vue-3d-model";
export default {
  data(){
    return{
     
    }
  },
  props: {
    namer: String
  },
  
  components: { ModelGltf  },
};
</script>