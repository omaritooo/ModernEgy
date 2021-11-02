<template>
  <div class="flex flex-col justify-center py-10 bg-gray-100">
      <h1 class="py-10 text-3xl text-center">
          Our Partners
      </h1>
       <div class="flex flex-col justify-center p-4">
           <client-only>
                 <div class="w-1/3 mx-auto ">
              <carousel :scrollPerPage="false" paginationEnabled="false" autoplay="true" perPage="5" autoplayHoverPause="true" paginationSize="0" loop="true">
                  <slide>
                      <img src="hhttp://modernegy.com/DynamicImages/Client21585562.png" alt="">
                  </slide>
                   <slide>
                      <img src="http://modernegy.com/DynamicImages/Client21585562.png" alt="">
                  </slide>
                   <slide>
                      <img src="http://modernegy.com/DynamicImages/Client21585562.png" alt="">
                  </slide>
                  <slide>
                      <img src="http://modernegy.com/DynamicImages/Client21585562.png" alt="">
                  </slide>
                   <slide>
                      <img src="http://modernegy.com/DynamicImages/Client21585562.png" alt="">
                  </slide>
                  <slide>
                      <img src="http://modernegy.com/DynamicImages/Client21585562.png" alt="">
                  </slide>
                   <slide>
                      <img src="http://modernegy.com/DynamicImages/Client21585562.png" alt="">
                  </slide>
                  <slide>
                      <img src="http://modernegy.com/DynamicImages/Client21585562.png" alt="">
                  </slide>
           
           
              </carousel>
                 </div>
               
                 
               </client-only>
               <button @click="part= !part" class="justify-center px-4 py-2 mx-auto text-white rounded-md bg-site-secondary">
                  Become a Partner
              </button>
       </div>


          <transition name="slide-fade" >
              <div v-if="part" class="flex pl-4 text-white bg-site-primary">
                  <div class="flex flex-col justify-center w-1/2 p-10">
                        <form class="flex flex-col justify-center w-1/2 mx-auto space-y-2">
                            <label>Company</label>
                            <input class="h-8 rounded-sm bg-site-secondary" type="text" name="" id="">
                            <label>Email</label>
                            <input class="h-8 rounded-sm bg-site-secondary" type="text" name="" id="">
                            <label>Phone</label>
                            <input class="h-8 rounded-sm bg-site-secondary" type="text" name="" id="">
                            <label>Message</label>
                            <textarea class="rounded-sm bg-site-secondary" type="" name="" id=""></textarea>
                            <input type="submit" class="w-1/4 mx-auto rounded-md bg-site-secondary" name="" id="">
                        </form>
                  </div>
                  <div class="float-left w-1/2 p-10 bg-site-secondary">
                        <div class="w-1/2 p-10 space-y-2 text-3xl">
                            <div class="text-4xl font-thin">
                                            Modern Egy
                                          </div>
                                          <div class="text-lg font-normal">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                                          </div>
                        </div>
                  </div>
              </div>
          </transition>
  </div>
</template>

<script>

export default {
    data() {
          return {
            list: 6,
            part: false,
          };
      },
      mounted()
      {
          console.log(this.part)
      }
      
      
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
 {
  transform: translateY(20px);
  opacity: 0;
}
</style>