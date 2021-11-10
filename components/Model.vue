<template>
  <div class="bg-white" style="">
    <client-only>
      <div v-if="namer == 'r7'">
        
          <div  class="">
            
            <ModelGltf  :rotation="rotation"  class="rounded-full" backgroundAlpha="0"
            backgroundColor="#FFF" :src="`/${namer}.glb`"  />
            
          </div>
       
      </div>
       <div class="" v-else>
          <div  class="">
            <ModelGltf :rotation="rotation"  class="rounded-full" backgroundAlpha="0"
            backgroundColor="#FFF" :src="`/${namer}.glb`"  />
          </div>
      </div>
      <!-- <div v-if="namer = !'r7'">
       
          <div  class="bg-white">
            <ModelGltf  class="rounded-full" backgroundAlpha="0"
            backgroundColor="#FFF" :src="`/${namer}.glb`"  />
          </div>
       
      </div> -->
    </client-only>
  </div>
</template>
<script>
import { ModelGltf  } from "vue-3d-model";
export default {
  data(){
    return{
     rotation: {
                x: 7,
                y: 0,
                z: 0
    }
  }}
  ,
  props: {
    namer: String
  },
  methods: {
    test(event)
    {   console.log(event)
      window.open('http://compound.adgrouptech.com/').focus();
    }
  },
  
  components: { ModelGltf  },
};
</script>