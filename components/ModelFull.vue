<template>
    <div class="relative ">
      <div class="absolute w-5/6 mx-auto top-4 left-20">
      <!-- <div class="absolute z-50 flex space-x-3 right-4 top-4">
           <button>                         <font-awesome-icon :icon="['fas', 'expand-arrows-alt']" size="md" class="text-black transition duration-500 ease-in-out transform text-md hover:-translate-y-1 hover:shadow-xl"/>
           </button>
           <button  @click="toggle= !toggle"> <font-awesome-icon :icon="['fas', 'times']" size="lg" class="text-black transition duration-500 ease-in-out transform text-md hover:-translate-y-1 hover:shadow-xl"/></button>
         </div> -->
          <client-only><Model :test="r7"/></client-only>
      </div>

      Test
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
    namee: String
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