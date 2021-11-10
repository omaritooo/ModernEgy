<template>
  <!-- <div class="z-30 flex flex-col px-32 py-10 mb-16">
      <div class="flex justify-center h-full my-2" style="height: fit-content"  >
          <div class="text-white bg-site-secondary rounded-t-md ">
              <div class="px-10 py-2 text-center ">
                  Projects
              </div>
              <hr class="text-gray-100" >
              <div class="flex flex-col py-4 space-y-5 text-left " v-for="(city) in cities" :key="city.index">
                  
                    <button @click="cityCenter(city)" class="px-4 py-2 text-left clicker" :ref="`b${city.id}`" :slot="{'active' : city.id == 24 }">
                        NEW Capital  {{city.title}}
                    
                    
                    </button>
                 
                  
              </div>
          </div>
          </div>
          <div class="flex flex-col h-full px-2 mx-2 " style="width: 100%; height: fit-content;">
             
               <div class="flex justify-center p-2 space-x-3 bg-site-secondary rounded-t-md">
                       <div class="rounded-md shadow-lg">
                          <Drop class="z-40 " Name="Developers" :devs="dev"/> 
                           <div
    class="relative inline-block text-left text-white "
   
  >
 
    <div>
      <span class="rounded-md shadow-sm">
        <button
          @click="menu1()"
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
        v-if="menus.Menu1"
        class="absolute right-0 z-20 w-56 mt-2 overflow-hidden text-sm origin-top-right rounded-md shadow-lg bg-site-secondary"
      >
        <div
          class="rounded-md shadow-xs bg-site-secondary"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          
       
          <div class="py-1" v-for="nee in nc " :key="nee.index">
           
 <nuxt-link  to="/" class="flex items-center p-4 space-x-2">
              
                {{nee.partner.company_name}} 
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
          @click="menu2()"
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
        v-if="menus.Menu2"
        class="absolute right-0 z-20 w-56 mt-2 overflow-hidden text-sm origin-top-right rounded-md shadow-lg bg-site-secondary"
      >
        <div
          class="rounded-md shadow-xs bg-site-secondary"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          
       
          <div class="py-1" v-for="n in nc " :key="n.index">
           
 <nuxt-link  to="/" class="flex items-center p-4 space-x-2">
              
                <div v-if="n.type == 'commercial' || 'commercial and residential'">{{n.district.title}} </div>
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
          @click="menu3()"
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
        v-if="menus.Menu3"
        class="absolute right-0 z-20 w-56 mt-2 overflow-hidden text-sm origin-top-right rounded-md shadow-lg bg-site-secondary"
      >
        <div
          class="rounded-md shadow-xs bg-site-secondary"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          
       
           <div class="py-1" v-for="ne in nc " :key="ne.index">
           
 <nuxt-link v-if="ne.type =='commercial and residential'"  to="/" class="flex items-center p-4 space-x-2">
              
                <div >{{ne.district.title}} </div>
            </nuxt-link>  
           
           
            
          </div>
         
        </div>
      </div>
    </transition>
   
  </div> -->
                      <!-- </div>
       
                  </div>
      
                  <div class="text-sm bg-site-secondary rounded-t-md text-site-primary">
      
      <div class="!h-full" >
          
      <div class="relative overflow-auto ">
       <div class="absolute z-50 top-32">
         <div id="mySidenav" class="fixed z-50 rounded-lg sidenav">
           <a href="javascript:void(0)" class="closebtn" @click="closeNav()"><font-awesome-icon class="rotate-180" :icon="['fas', 'arrow-right']"/></a>
           <div class="flex flex-col">
              <a>{{cit.title}}</a>
             <iframe  width="300" height="255" :src="cit.video_path" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
         </div>
         <span class="py-4 pr-4 transform rounded-r-full opener bg-site-secondary" style="font-size:30px;cursor:pointer" @click="openNav()"> <font-awesome-icon :icon="['fas', 'arrow-right']"/> </span>
       </div>
        <Test :toggles="toggles" :center="cent" class="z-10"/>
      </div>

     
    

      </div>
      
                  </div>
      
          </div>
          <div class="w-1/4 h-full my-auto space-y-10">
            <div class="flex flex-col justify-end w-full h-1/2 " v-for="ad in ads" :key="ad.index">
              <div class="rounded-lg " v-if="ad.status == 'active'">
                  <img  class="px-2 py-4 bg-gray-200 rounded-lg" :src="ad.image_path" alt="">
              </div>
            </div>
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
  </div> -->
  <div class="z-30 flex flex-col px-32 py-10 mb-16">
      <div class="flex justify-center h-full my-2" style="height: fit-content"  >
          <div class="text-white bg-site-secondary rounded-t-md ">
              <div class="px-10 py-2 text-center ">
                  Districts
              </div>
              <hr class="text-gray-100" >
              <div class="flex flex-col py-4 space-y-5 text-left" v-for="city in cities" :key="city.index">
                  <button @click="cityCenter(city)" class="px-4 py-2 text-left clicker " :id="city.id" :class="{'active' : city.id == 24}">
                      <!-- NEW Capital --> {{city.title}}
                      

                  </button>
                  
              </div>
          </div>
          <div class="flex flex-col h-full px-2 mx-2 " style="width: 100%; height: fit-content;">
            <Test :center="cent" :toggles="toggles" :proj="nc"/>
          </div>
         <div class="w-1/4 h-full my-auto space-y-10">
            <div class="flex flex-col justify-end w-full h-1/2 " v-for="ad in ads" :key="ad.index">
              <div class="rounded-lg " v-if="ad.status == 'active'">
                  <img  class="px-2 py-4 bg-gray-200 rounded-lg" :src="ad.image_path" alt="">
              </div>
            </div>
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
import axios from 'axios'

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
mounted(){
           console.log(this.$refs['b24'])

      axios.get('https://modernegy.adgroup.tech/api/v1/advertisement').then( (response) => (this.ads = response.data.data));
this.$nextTick(() => {
          console.log(this.$refs['b24'])
          
      });
      axios.get('https://modernegy.adgroup.tech/api/v1/projects').then( (response) => (this.nc = response.data.data));
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
  setFocus() {
    // I can access the DOM object directly here without any query.
    this.$refs.focusableDiv.focus()
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
  menu1()
  {
    this.menus.Menu1 = !this.menus.Menu1
    // this.toggles.at = !this.toggles.rt
    // this.toggles.ct = !this.toggles.rt
    this.$set(this.menus, 'Menu2' , false)
    this.$set(this.menus, 'Menu3' , false)

   
  },
  menu2()
  {
    this.menus.Menu2 = !this.menus.Menu2
    // this.toggles.at = !this.toggles.rt
    // this.toggles.ct = !this.toggles.rt
    this.$set(this.menus, 'Menu1' , false)
    this.$set(this.menus, 'Menu3' , false)

   
  },
  menu3()
  {
    this.menus.Menu3 = !this.menus.Menu3
    // this.toggles.at = !this.toggles.rt
    // this.toggles.ct = !this.toggles.rt
    this.$set(this.menus, 'Menu2' , false)
    this.$set(this.menus, 'Menu1' , false)

   
  },
cityCenter(param)
{ console.log(this.cent)
  this.$set(this.cent,0,param.latitude)
  this.$set(this.cent,1,param.longitude)
  this.$set(this.toggles, 'cap', true )
  console.log(this.cit)
  console.log(param.id)
  
}, openNav() {
  document.getElementById("mySidenav").style.width = "350px";
},

 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
},
 data() {
    return {
      nc: [],
      ads: [],
      menus: {
       Menu1:false,
      Menu2:false,
      Menu3:false,
      },
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
      cent: [29.9871591, 31.7182112],
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