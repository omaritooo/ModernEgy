<template>

  
  <div id="map-wrap" class="relative z-20"  style="">
    
 <client-only>
   
  <div class="relative" >
   
    
    
    <l-map 
        :minZoom="zoom"
        :zoom="zoom"
        :center="this.$store.state.center"
        class="z-0"
        style="height: 700px; width: 100%"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
    
    <div v-if="toggles.cap">
       <l-geo-json :geojson="nc" :options-style="{color: '#D1CEEC',  weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">

          </l-geo-json>
           <div class="relative z-10" v-if="toggles.at" >
        
         
          <l-feature-group ref="features">
<l-popup > {{name}} </l-popup>
</l-feature-group>
          
          <l-geo-json @click="openPopUpG(r7c, 'r7' )"  :geojson="r7" :options-style="{color: '#EA9CA5' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">

          </l-geo-json>
          <l-geo-json @click="openPopUpG(r8c, 'r8')" :geojson="r8" :options-style="{color: '#EA9CA5' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
            
          </l-geo-json>
        
            <l-geo-json @click="openPopUpG(gvc, 'gov')" :geojson="govt" :options-style="{color: '#8AC9B2' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
            </l-geo-json>
            <l-geo-json @click="openPopUpG(mu23c, 'mu23')" :geojson="mu23" :options-style="{color: '#8AC9B2', weight: 0.1, fillOpacity:0.7 , opacity: 0.9 }">
            
            </l-geo-json>
            <l-geo-json @click="openPopUpG(dtc, 'downtown')"  :geojson="downtown" :options-style="{color: '#8AC9B2' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
            </l-geo-json>
          
        

        </div>
          <div v-if="toggles.ct">
              <l-feature-group ref="features">
<l-popup > <span> <Model/> {{name}}  </span></l-popup>
</l-feature-group>
             <l-geo-json @click="openPopUpG(r7c, 'r7' )"  :geojson="r7" :options-style="{color: '#EA9CA5' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">

          </l-geo-json>
          <l-geo-json @click="openPopUpG(r8c, 'r8')" :geojson="r8" :options-style="{color: '#EA9CA5' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
            
          </l-geo-json>
        
            <l-geo-json @click="openPopUpG(gvc, 'gov')" :geojson="govt" :options-style="{color: '#8AC9B2' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
            </l-geo-json>
            <l-geo-json @click="openPopUpG(mu23c, 'mu23')" :geojson="mu23" :options-style="{color: '#8AC9B2', weight: 0.1, fillOpacity:0.7 , opacity: 0.9 }">
            
            </l-geo-json>
            <l-geo-json @click="openPopUpG(dtc, 'downtown')"  :geojson="downtown" :options-style="{color: '#8AC9B2' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
            </l-geo-json>
          </div>
          <div v-else-if="toggles.rt">
              <l-feature-group ref="features">
<l-popup > <span> {{name}} </span></l-popup>
</l-feature-group>
            <l-geo-json @click="openPopUpG(r7c, 'r7' )"  :geojson="r7" :options-style="{color: '#EA9CA5' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">

          </l-geo-json>
          <l-geo-json @click="openPopUpG(r8c, 'r8' )"  :geojson="r8" :options-style="{color: '#EA9CA5' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">

          </l-geo-json>
          

        
          </div>
    </div>
         
       
    
      </l-map>
     <!-- <div id="mySidenav" class="z-50 sidenav">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
  <iframe width="200" height="155" src="https://www.youtube.com/embed/3snAHmDJm84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<span style="font-size:30px;cursor:pointer" @click="openNav()"> <font-awesome-icon :icon="['fas', 'arrow-right']"/> </span> -->
  </div>
 </client-only>
 
 <transition name="slide-fade">
   <div class="absolute top-0 left-0 z-40 w-full h-full p-6 " v-if="toggle" >
     <div class="relative rounded-lg">
       
       <Model :namer="name" class="rounded-lg"/>
       <div class="absolute top-4 left-48 right-48">
         <div class="flex">
           <div class="text-lg">Projects:</div> 
           <!-- <div class="flex flex-row text-lg " >
             <div class="" v-for="p in project" :key="p.index" >
               <div v-for="district in p.district" :key="district.index">
                 <div v-if="district.title == 'Mu 23'">
                   <div v-for="proj in district.project" :key="proj.index">
                     {{proj.title}}
                     </div>
                 </div>
                 </div>
             </div>
           </div>
           <div class="flex flex-row text-lg " v-if="name == 'r7' ">
             <div class="" v-for="p in proj" :key="p.index" >
               <div class="flex px-2 mx-2 space-x-3 text-white rounded-lg clicker text-md bg-site-secondary" v-if="p.district.title == 'R7 District'" >
                 <div v-if="p.title == 'The City'">
                   <a href="http://compound.adgrouptech.com/">{{p.title}}</a>

                 </div>
                 <div v-else>
                   {{p.title}}
                 </div>
                 </div>
             </div>
           </div>
           -->
           <div class="flex flex-row text-lg">
             <div class="" v-for="data in project" :key="data.index" >
               <div v-for="dist in data.district" :key="dist.index" class="flex px-2 mx-2 space-x-3 text-white rounded-lg clicker text-md bg-site-secondary"  >
                 <div v-if="dist.title == 'R7 District'">

                   <div v-for="proje in dist.project" :key="proje.index">
                   
                     <div v-if="name == 'r7'"><a href="http://compound.adgrouptech.com/">{{proje.title}}</a></div>
                   
                   </div>
                 </div>
                 <div v-if="name == 'mu23'" class="flex">
                   <div v-if="dist.title == 'Mu 23'" class="flex space-x-2">
                     <div v-for="proje in dist.project" :key="proje.index" class="flex flex-row space-x-2">
                   
                       <div class="">{{proje.title}}</div>
                   
                     </div>
                   </div>
                 </div>
                
                 </div>
             </div>
             </div>
         </div>
       </div>
       <button class="absolute top-4 right-4" @click="toggle= !toggle"> <font-awesome-icon :icon="['fas', 'times']" size="lg" class="text-black"/></button>
     </div>
   </div>
 </transition>
</div>
</template>

<script>

import Model from "../components/Model.vue"
import axios from "axios";

  import { ModelObj } from "vue-3d-model";

export default {
  component:
  {
    Model,
    ModelObj
  },
  props:
  {
    toggles: Object,
  
  },
    data() {
    return {
      geoj: {},
      mapT: false,
      zoom: 12,
      r7: {},
      r8: {},
      govt: {},
      downtown: {},
      mu23: {},
      nc: {},
      name: '',
      toggle: false,
      mu23c: [30.035131,31.6792186],
      dtc: [30.0020826,31.7393625],
      r7c: [29.9590223, 31.7282586],
      r8c: [29.9723809, 31.7662266],
      gvc: [30.0252484, 31.7550177],

      // center: [30.0313, 31.6816],
     
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      // url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib21hcmFzaDI3IiwiYSI6ImNrdmNiOGZmYjRqYTQzMXF3Mzk0MXJjNTUifQ.qBSRkgV-kxRHHwr0ZuOchg',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        
    };
  },
  mounted() {
        axios.get('/r7.geojson').then( response => this.r7 = response.data)
        axios.get('/r88.geojson').then( response => this.r8 = response.data)
        axios.get('/government.geojson').then( response => this.govt = response.data)
        axios.get('/downtown.geojson').then( response => this.downtown = response.data)
        axios.get('/mu23.geojson').then( response => this.mu23 = response.data)
         axios.get('/newcapital.geojson').then( response => this.nc = response.data)
        this.$store.commit("getData")
        // axios.get('/test1.geojson').then( response => this.tester1 = response.data)
  },
 methods: {
		toggler() {
			this.open = !this.open;
		},
    openPopUp (latLng, name) {
      this.name = name;
      this.$refs.features.mapObject.openPopup(latLng);
      console.log(name)
    },
    openPopUpG (latLng, name) {
      this.name = name;
      this.$refs.features.mapObject.openPopup(latLng);
      console.log(name)
      this.toggle= !this.toggle
      console.log(this.toggle)
    },
  
    openNav() {
  document.getElementById("mySidenav").style.width = "350px";
},

 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
	},
  computed:{
   styleFunction() {
      
      return () => {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1
        };
      };
    },
    project()
    {
      return this.$store.getters.myGetter
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease-out;
}
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
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
.containo{
  position: relative;
  display: block;
  
}
.containo-cont
{
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.sidenav {
  height: 50%;
  width: 0;
  position: fixed;
  z-index: 10;
  top: 250;
  left: 2000;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}
.clicker{
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

.sidenav .closebtn {
  position: absolute;
  top: 50%;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.opener {
  top:500px
}
</style>
