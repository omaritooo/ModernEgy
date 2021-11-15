<template>
 
  <div class="z-30 flex flex-col px-6 py-10 mb-16 ml-16 overflow-hidden">
      <div class="flex justify-center h-full my-2" style="height: fit-content"  >
          <div class="text-white h-inherit bg-site-secondary rounded-t-md ">
              <div class="px-10 py-2 text-center ">
                  Districts
                  
              </div>
              <hr class="text-gray-100" >
              <div class="flex flex-col py-4 space-y-5 text-lg text-left" >
                  <button @click="cityCenter(capital)" class="px-4 py-2 text-left clicker " ref="b1" >
                      New Capital
                      

                  </button>
                  <div v-for="ci in cit.slice(1)" :key="ci.index" class="w-max">
                    <button @click="cityCenter(ci)" class="w-full px-4 py-2 text-left clicker " :ref="`b-${ci.id}`" :class="{'active' : ci.id == 24}">
                        <!-- NEW Capital --> {{ci.title}}
                    
                    </button>
                  </div>
                  
              </div>
          </div>
          <div class="flex flex-col h-full px-2 mx-2 " style="width: 100%; height: fit-content;">
            <div>
              <!-- Dropdowns -->
              <div class="flex justify-center py-2 mx-auto space-x-2 bg-site-secondary rounded-t-md">
                <div
                    class="relative z-50 inline-block text-left text-white shadow-lg"
                   
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
                          
                       
                          <div class="py-1" v-for="set in setter " :key="set.index">
                           
                 <div v-for="district in set.district" :key="district.id">
                    
                   <div v-for="partner in district.project" :key="partner.id" class="flex items-center p-4 space-x-2">
                     {{partner.partner.company_name}}
                   <!-- <div v-if="partner !== null || partner !== 'undefined'">
                     <div v-for="part in partner.partner" :key="part.id">
                       {{part.id}}
                     </div>
                   </div> -->
                </div>
                 </div>
                           
                           
                            
                          </div>
                         
                        </div>
                      </div>
                    </transition>
                   
                  </div>
                          <div
                    class="relative z-50 inline-block text-left text-white rounded-lg shadow-lg"
                   
                  >
                 
                    <div>
                      <span class="rounded-lg shadow-sm">
                        <button
                          @click="menu2()"
                          type="button"
                          class="inline-flex items-center justify-between w-full h-10 px-4 py-4 text-sm font-medium leading-5 text-gray-100 transition duration-150 ease-in-out border-none rounded-md bg-site-secondary focus:outline-none focus:border-blue-300 focus:shadow-outline-blue btn-focus"
                          id="options-menu"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          <span> Commercial </span>
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
                          
                       
                          <div class="py-1" v-for="set in setter " :key="set.index">
                           
                 <div v-for="district in set.district" :key="district.id">
                    
                   <div v-for="partner in district.project" :key="partner.id" class="flex items-center p-4 space-x-2">
                     <div v-if="partner.type == 'commercial' || partner.type == 'commercial and residential'">
                        {{partner.title}}
                     </div>
                  
                </div>
                 </div>
                           
                           
                            
                          </div>
                         
                        </div>
                      </div>
                    </transition>
                   
                  </div>
                          <div
                    class="relative z-50 inline-block text-left text-white rounded-lg shadow-lg"
                   
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
                          
                       
                          <div class="py-1" v-for="set in setter " :key="set.index">
                           
                 <div v-for="district in set.district" :key="district.id">
                    
                   <div v-for="partner in district.project" :key="partner.id" >

                     <div v-if="partner.type !== 'commercial'"  class="flex items-center p-4 space-x-2" >
                       {{partner.title}}
                        <!-- <div v-if="partner.title">{{partner.title}}</div> -->
                     </div>
                  
                </div>
                 </div>
                           
                           
                            
                          </div>
                         
                        </div>
                      </div>
                    </transition>
                   
                  </div>
              </div>
  <!-- End Dropdown -->
            </div>
            <div class="absolute py-2 z-60 top-48">

         <div id="mySidenav" class=" sidenav">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
  <div v-for="set in setter" :key="set.id">
    <h2 class="text-lg text-center text-white">
      {{set.title}}
    </h2>

    <div v-if="testtog" class="flex mx-2 mt-4 "><iframe id="ifram" class="border-2 border-gray-200 rounded-lg" width="360" height="260" :src="set.video_path" :title="set.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <p class="p-4 font-thin text-white ">
{{set.description}}

    </p>
  </div>
</div>
  

<span class="absolute p-4 bg-gray-800 rounded-r-full z-70 top-72" style="font-size:30px;cursor:pointer" @click="openNav()"> <font-awesome-icon :icon="['fas', 'arrow-right']"/> </span>
  </div>
            <Test class="w-full h-full" :toggles="toggles" />
          </div>
         <div style="height: 500px;" class="w-4/5 ">
            <div class="flex flex-col w-full gap-y-5 " v-for="ad in ads" :key="ad.index">
              <div class="flex flex-col rounded-lg gap-y-5" v-if="ad.status == 'active'">
                  <div class="flex flex-col mb-10 gap-y-10 "><img style="height: 305px; width: 350px;"  class="px-4 py-6 bg-gray-200 rounded-lg" :src="ad.image_path" alt=""></div>
              </div>
            </div>
          </div>
      
      </div>
       <div class="flex pl-44 ml-96 gap-x-8">
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
  
},

created(){

},
mounted(){


  
      this.$refs['b1'].click()
       this.$refs['b1'].focus()
    this.$store.dispatch('getID')
    // this.cityCenter(this.capital)
     this.$store.dispatch("getData");

      axios.get('https://modernegy.adgroup.tech/api/v1/advertisement').then( (response) => (this.ads = response.data.data));

            

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
  this.$store.commit('SET_ID', param.id)
  this.$store.commit('SET_CENTER', [param.latitude, param.longitude])
    console.log(this.$store.state.center)
  console.log(this.$store.state.id)
      this.$store.dispatch("getCity", this.$store.state.id)

  
}, openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  this.testtog = !this.testtog
},

 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("ifram")
  this.testtog = !this.testtog
}
},

computed: {
 cit() {
   return this.$store.state.data
 },

 iden()
  {
    return this.$store.getters.getID
  },
  setter(){
  return this.$store.getters.cityGetter
},
},
watch: {

},
 data() {
    return {
      nc: [],
      testtog: false,
      capital: 
      {
        "id": 24,
            "title": "New Capital",
            "longitude": "31.7182112",
            "latitude": "29.9871591",
            "deleted_at": null,
            "created_at": "2021-11-07T05:56:36.000000Z",
            "updated_at": "2021-11-07T05:56:36.000000Z",
            "image_path": "https://modernegy.adgroup.tech/partners/cities/49f107acfbc3cdc1bfda3a48352448a81636264596.png",
            "video_path": "https://www.youtube.com/watch?v=jujW0w-i_6Q",
                        "description": null,


      },
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
outline: none;

}
.clicker:focus{
    background: rgb(236,219,183);
background: linear-gradient(90deg, rgba(236,219,183,1) 0%, rgba(227,186,100,1) 100%);
color: black;
outline: none;

}
 .height-adjuster 
{
  height: 1000px !important; 

}
.sidenav {
  height: 60vh;
  width: 0;
  position: absolute;
  z-index: 200;
  top: 400;
  
  background-color: #4B618F;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 20px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  
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
  top: 0;
  right: 0;
  font-size: 36px;
  margin-left: 50px;
}
.opener {
  top:150px;
  position: absolute;
}

</style>