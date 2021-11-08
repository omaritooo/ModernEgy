<template>
  <div class="z-30 flex flex-col px-32 py-10 my-16">
      <div class="flex justify-center h-full my-2" style="height: fit-content"  >
          <div class="text-white bg-site-secondary rounded-t-md ">
              <div class="px-10 py-2 text-center ">
                  Projects
              </div>
              <hr class="text-gray-100" >
              <div class="flex flex-col py-4 space-y-5 text-left" v-for="city in cities" :key="city.index">
                  <button @click="cityCenter(city)" class="px-4 py-2 text-left clicker">
                      <!-- NEW Capital --> {{city.title}}

                  </button>
                  
              </div>
          </div>
          <div class="flex flex-col h-full px-2 mx-2 " style="width: 100%; height: fit-content;">
             
               <div class="flex justify-center p-2 space-x-3 bg-site-secondary rounded-t-md">
                       <div class="rounded-md shadow-lg">
                           <!-- <Drop class="z-40 " Name="Developers" :devs="dev"/> -->
                           <div
    class="relative inline-block text-left text-white "
   
  >
 
    <div>
      <span class="rounded-md shadow-sm">
        <button
          @click="isMenuOpen1 = !isMenuOpen1"
          type="button"
          class="inline-flex items-center justify-between w-full h-10 px-4 py-4 text-sm font-medium leading-5 text-gray-100 transition duration-150 ease-in-out border-none rounded-md bg-site-secondary focus:outline-none focus:border-blue-300 focus:shadow-outline-blue btn-focus"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span> Developers </span>
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
        v-if="isMenuOpen1"
        class="absolute right-0 z-20 w-56 mt-2 overflow-hidden text-sm origin-top-right rounded-md shadow-lg bg-site-secondary"
      >
        <div
          class="rounded-md shadow-xs bg-site-secondary"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          
       
          <div class="py-1" v-for="de in dev " :key="de.index">
           
 <nuxt-link  to="/" class="flex items-center p-4 space-x-2">
              
                {{de.partner.company_name}} 
            </nuxt-link>  
           
           
            
          </div>
         
        </div>
      </div>
    </transition>
   
  </div>
                       </div>
                      <div class="rounded-md shadow-lg ">
<div
    class="relative inline-block text-left text-white "
   
  >
 
    <div>
      <span class="rounded-md shadow-sm">
        <button
          @click="isMenuOpen2 = !isMenuOpen2"
          type="button"
          class="inline-flex items-center justify-between w-full h-10 px-4 py-4 text-sm font-medium leading-5 text-gray-100 transition duration-150 ease-in-out border-none rounded-md bg-site-secondary focus:outline-none focus:border-blue-300 focus:shadow-outline-blue btn-focus"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span> Commerical  </span>
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
        v-if="isMenuOpen2"
        class="absolute right-0 z-20 w-56 mt-2 overflow-hidden text-sm origin-top-right rounded-md shadow-lg bg-site-secondary"
      >
        <div
          class="rounded-md shadow-xs bg-site-secondary"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          
       
          <div class="py-1" v-for="de in dev " :key="de.index">
           
 <nuxt-link  to="/" class="flex items-center p-4 space-x-2">
              
                {{de.district.title}} 
            </nuxt-link>  
           
           
            
          </div>
         
        </div>
      </div>
    </transition>
   
  </div>
                      </div>
                      <div class="rounded-md shadow-lg">
                         <div
    class="relative inline-block text-left text-white "
   
  >
 
    <div>
      <span class="rounded-md shadow-sm">
        <button
          @click="isMenuOpen3 = !isMenuOpen3"
          type="button"
          class="inline-flex items-center justify-between w-full h-10 px-4 py-4 text-sm font-medium leading-5 text-gray-100 transition duration-150 ease-in-out border-none rounded-md bg-site-secondary focus:outline-none focus:border-blue-300 focus:shadow-outline-blue btn-focus"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span> Residential </span>
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
        v-if="isMenuOpen3"
        class="absolute right-0 z-20 w-56 mt-2 overflow-hidden text-sm origin-top-right rounded-md shadow-lg bg-site-secondary"
      >
        <div
          class="rounded-md shadow-xs bg-site-secondary"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          
       
          <div class="py-1" v-for="de in dev " :key="de.index">
           
 <nuxt-link  to="/" class="flex items-center p-4 space-x-2">
              
                {{de.partner.company_name}} 
            </nuxt-link>  
           
           
            
          </div>
         
        </div>
      </div>
    </transition>
   
  </div>
                      </div>
       
                  </div>
      
                  <div class="text-sm bg-site-secondary rounded-t-md text-site-primary">
      
      <div class="!h-full" >
          
      <div class="relative overflow-auto ">
       <div class="absolute z-50 top-32">
         <div id="mySidenav" class="fixed z-50 rounded-lg sidenav">
           <a href="javascript:void(0)" class="closebtn" @click="closeNav()"><font-awesome-icon class="rotate-180" :icon="['fas', 'arrow-right']"/></a>
           <div class="flex flex-col">
             <!-- <a>{{cit.title}}</a> -->
             <iframe  width="300" height="255" :src="cit.video_path" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
         </div>
         <span class="py-2 pr-2 transform rounded-r-full opener bg-site-secondary" style="font-size:30px;cursor:pointer" @click="openNav()"> <font-awesome-icon :icon="['fas', 'arrow-right']"/> </span>
       </div>
        <Test :toggles="toggles" :center="cent" class="z-10"/>
      </div>

     
    

      </div>
      
                  </div>
      
          </div>
          <div class="w-1/6 h-full space-y-2 ">
              <div class="h-1/2" > <img class="h-full px-2 bg-gray-200 rounded-md py-14 " src="https://ad-venture.org.uk/wp-content/uploads/2020/07/image-placeholder-1200x800-1.jpg"> </div>
                         <div class="h-1/2"> <img class="h-full px-2 bg-gray-200 rounded-md py-14 " src="https://ad-venture.org.uk/wp-content/uploads/2020/07/image-placeholder-1200x800-1.jpg"> </div>
          </div>
     
      </div>
       <div class="flex justify-center space-x-8">
                          <button @click="comm()" class="flex px-4 py-2 space-x-2 bg-gray-200 rounded-md ">
                              <img class="w-6 pr-2" src="@/assets/bulding.svg">
                              Commercial
                          </button>
                           <button @click="res()" class="flex px-4 py-2 space-x-2 bg-gray-200 rounded-md ">
                              <img class="w-6 pr-2" src="@/assets/apartment.svg">
                              Residential

                              
                          </button>
                          <button @click="all()" class="px-4 py-2 bg-gray-200 rounded-md ">
                              Show All
                          </button>
                      </div>
  </div>
</template>

<script>


import Drop from "./Dropdown.vue"
import Test from "./Test.vue"
import side from "./sidemenu.vue"
export default {
components:
{
    Drop,
    Test,
    side
},
props: {
cities: Array,
dev: Array
},
methods: {
  res()
  {
    this.toggles.rt = !this.toggles.rt
    // this.toggles.at = !this.toggles.rt
    // this.toggles.ct = !this.toggles.rt
    this.$set(this.toggles, 'at' , false)
    this.$set(this.toggles, 'ct' , false)

   
  },
   comm()
  {
    this.toggles.ct = !this.toggles.ct
    this.$set(this.toggles, 'rt' , false)
    this.$set(this.toggles, 'at' , false)
   
  },
   all()
  {
    this.toggles.at = !this.toggles.at
    this.$set(this.toggles, 'rt' , false)
    this.$set(this.toggles, 'ct' , false)

   
  },
cityCenter(param)
{ console.log(this.cent)
  this.$set(this.cent,0,param.latitude)
  this.$set(this.cent,1,param.longitude)
  this.$set(this.toggles, 'cap', true )
  console.log(this.cit)
  
}, openNav() {
  document.getElementById("mySidenav").style.width = "350px";
},

 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
},
 data() {
    return {
      isMenuOpen1:false,
      isMenuOpen2:false,
      isMenuOpen3:false,
      currentLocation: {},
      toggles: 
      {
        rt: false,
        ct: false,
        at: false,
        cap: false
      },
      locations: {lat: 34.019617,lng: 32.485779
       
        
       
      },
      cent: [30.0074, 31.4913],
      cit: {}
     
    };
  },
}
</script>

<style scoped>

input
{
    outline: none;
    color: white;
    width: min-content;
}
.clicker{
background-color: transparent;
transition-duration: 0.5s;
transition: ease-in-out;

}
.clicker:hover{
    background: rgb(236,219,183);
background: linear-gradient(90deg, rgba(236,219,183,1) 0%, rgba(227,186,100,1) 100%);
color: black;

}
.clicker:focus{
    background: rgb(236,219,183);
background: linear-gradient(90deg, rgba(236,219,183,1) 0%, rgba(227,186,100,1) 100%);
color: black;

}
 .height-adjuster 
{
  height: 1000px !important; 

}
.sidenav {
  height: 400px;
  width: 0;
  position: absolute;
  z-index: 10;
  top: 300;
  
  background-color: #4B618F;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 20px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  position: fixed;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 50%;
  right: 0;
  font-size: 36px;
  margin-left: 50px;
}
.opener {
  top:150px;
  position: absolute;
}

</style>