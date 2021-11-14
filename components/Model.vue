<template>
  <div class="w-full h-full grounder" style="">
    <client-only>
      <div >
        
          <div  class="">
            
            <ModelGltf  :rotation="rotation"  class="w-full h-full rounded-full" backgroundAlpha="0"
            backgroundColor="#FFF" :src="`/${namer}.glb`"  />
            
          </div>
       
      </div>
       <!-- <div class="" v-else>
          <div  class="">
            <ModelGltf :rotation="rotation"  class="rounded-full" backgroundAlpha="0"
            backgroundColor="#FFF" :src="`/${namer}.glb`"  />
          </div>
      </div> -->
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
<style scoped>
  .grounder{
    background-color: rgba(0, 0, 0, 0.21);

backdrop-filter: blur(10px);
 
  }
</style>