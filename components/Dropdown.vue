<template>
  <div
    class="relative inline-block text-left text-white "
   
  >
 
    <div>
      <span class="rounded-md shadow-sm">
        <button
          @click="isMenuOpen = !isMenuOpen"
          type="button"
          class="inline-flex items-center justify-between w-full h-10 px-4 py-4 text-sm font-medium leading-5 text-gray-100 transition duration-150 ease-in-out border-none rounded-md bg-site-secondary focus:outline-none focus:border-blue-300 focus:shadow-outline-blue btn-focus"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span> {{ Name }} </span>
          <img
            src="https://s.svgbox.net/hero-solid.svg?ic=chevron-down&fill=grey-800"
            class="w-5 h-5 ml-2 -mr-1"
          />
        </button>
      </span>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="absolute right-0 z-20 w-56 mt-2 overflow-hidden text-sm origin-top-right rounded-md shadow-lg bg-site-secondary"
      >
        <div
          class="rounded-md shadow-xs bg-site-secondary"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          
       
          <div class="py-1" v-for="dev in devs " :key="dev.index">
           
 <nuxt-link  to="/" class="flex items-center p-4 space-x-2">
              
                {{dev.partner.company_name}} 
            </nuxt-link>  
           
           
            
          </div>
         
        </div>
      </div>
    </transition>
   
  </div>
</template>

<script>
export default {
  props: {
    Name: String,
    devs: Array
  },
  data(){
    return {
      isMenuOpen: false,
      dat: ['one', 'two', 'there']
    }
  }

}
</script>

<style>
cart-enter-active, .cart-leave-active {
  /* transition: opacity .5s; */
  @apply transition ease-out duration-100;
}
.cart-enter, .cart-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /* opacity: 0; */
  @apply transform opacity-0 scale-95;
}
</style>