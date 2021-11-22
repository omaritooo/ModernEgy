<template>
  <div class="px-4 text-white md:px-10 marginer" >
    

  <nav class="relative flex flex-wrap items-center justify-between px-2 bg-blueGray-500">
    <div class="container flex flex-wrap items-center justify-between px-4 ">
      <div class="relative flex justify-between w-full px-4 lg:w-auto lg:static lg:block lg:justify-start">
        <a class="inline-block mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap" >
 <img class="w-16 h-16 md:w-20 md:h-20" src="../assets/logo.svg" alt="" >
        </a>
        <button class="block px-3 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none" type="button" >
            
            <button class="relative w-10 h-10 text-gray-500 focus:outline-none" @click="showMenu = !showMenu">
                <span class="sr-only">Open main menu</span>
                <div class="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': showMenu,' -translate-y-1.5': !showMenu }"></span>
                    <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': showMenu } "></span>
                    <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': showMenu, ' translate-y-1.5': !showMenu}"></span>
                </div>
            </button>
        
                        <!-- <font-awesome-icon  :icon="['fab', 'facebook']" size="lg" class="text-white transition duration-500 ease-in-out transform text-md hover:-translate-y-1 hover:shadow-xl"/> -->
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="items-center lg:flex lg:flex-grow">
        <transition  enter-active-class="transition duration-100 ease-out"
                      enter-class="transform scale-95 opacity-0"
                      enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-75 ease-in"
                      leave-class="transform scale-100 opacity-100"
                      leave-to-class="transform scale-95 opacity-0">
          <ul class="flex flex-col ml-auto list-none gap-y-4 md:justify-end lg:flex-row">
            <li class="nav-item">
                          <nuxt-link to="" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Home</nuxt-link>

            </li>
            <li class="nav-item">
                          <nuxt-link to="#about" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">About Us</nuxt-link>

            </li>
            <li class="nav-item">
                          <nuxt-link to="#contact" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Contact Us</nuxt-link>

            </li>
            <li class="nav-item" >
                           <nuxt-link to="#newsfeed" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"   >News</nuxt-link>

            </li>
             <li class="nav-item" >
                           <nuxt-link to="#pfor" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:text-yellow-300 dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"   >Become a Partner</nuxt-link>

            </li>
          </ul>
        </transition>
      </div>
    </div>
  </nav>

    
  </div>
</template>

<script>
export default {
  
  data(){
    return{
      map: {},
      showMenu: false

    }
  },
  props:{
    city: Object
  },
  mounted() {
    this.$store.dispatch('getPT')
      },
  method:
{
  meth(){
    console.log('Test')
    // if (this.$store.state.partnerT == false)
    // {
    //   this.$store.commit('partnerT')
    // }
    // else if(this.$store.state.partnerT == true)
    // {
    //   this.$store.commit('partnerF')
    // }
    this.$store.commit('partnerT')
    console.log(this.$store.state.partnerT)
  },
  toggleNavbar(){
      this.showMenu = !this.showMenu;
    }
}

}
</script>

<style>

</style>