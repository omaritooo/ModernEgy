<template>

  
  <div id="map-wrap" class="relative z-20"  style="">
    
 <client-only>
   
  <div class="relative" >
    <!-- <div class="fixed inset-0 z-40 flex">
			
			<div
				class="absolute top-0 z-20 flex h-screen"
				:class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
			>
				
				<button
					@click.prevent="toggler()"
					class="w-12 h-48 p-1 my-auto text-center text-white duration-300 bg-gray-600 rounded focus:outline-none hover:bg-gray-500 transition-color"
				>
					<span
						:class="[right ? '-rotate-90' : 'rotate-90']"
						class="block font-bold origin-center transform"
					>
						Drawer
					</span>
				</button>

			
				<div
					ref="content"
					class="flex items-center justify-center overflow-hidden transition-all duration-700 bg-yellow-200"
					:class="[open ? 'max-w-lg' : 'max-w-0']"
				>
					<div class="w-48 text-xl font-bold text-center">Sidebar</div>
					<slot></slot>
				</div>
			</div>

		
		</div> -->
    
    
    <l-map 
        :minZoom="zoom"
        :zoom="zoom"
        :center="center"
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
    </div>
         
        <div class="relative z-10" v-if="toggles.at" >
          <!-- <l-polygon  @click="mapT= !mapT" class="containo"
            :lat-lngs="polygon.latlngs"
            :color="polygon.color"
          >
         
         
          
            
            
          </l-polygon>
            <l-polyline :lat-lngs="polygon.latlngs">
            
          </l-polyline> -->
         
          <l-feature-group ref="features">
<l-popup > {{name}} </l-popup>
</l-feature-group>
          
          <l-geo-json @click="openPopUpG(r7c, 'r7' )"  :geojson="r7" :options-style="{color: '#EA9CA5' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">

          </l-geo-json>
          <l-geo-json @click="openPopUpG(r8c, 'downtown')" :geojson="r8" :options-style="{color: '#EA9CA5' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
            
          </l-geo-json>
        
            <l-geo-json @click="openPopUpG(gvc, 'tr')" :geojson="govt" :options-style="{color: '#8AC9B2' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
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
          <l-geo-json @click="openPopUpG(r8c, 'downtown')" :geojson="r8" :options-style="{color: '#EA9CA5' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
            
          </l-geo-json>
        
            <l-geo-json @click="openPopUpG(gvc, 'tr')" :geojson="govt" :options-style="{color: '#8AC9B2' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
            </l-geo-json>
            <l-geo-json @click="openPopUpG(mu23c, 'mu23')" :geojson="mu23" :options-style="{color: '#8AC9B2', weight: 0.1, fillOpacity:0.7 , opacity: 0.9 }">
            
            </l-geo-json>
            <l-geo-json @click="openPopUpG(dtc, 'downtown')"  :geojson="downtown" :options-style="{color: '#8AC9B2' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
            </l-geo-json>
          </div>
          <div v-if="toggles.rt">
              <l-feature-group ref="features">
<l-popup > <span> {{name}} </span></l-popup>
</l-feature-group>
            <l-geo-json @click="openPopUpG(r7c, 'r7' )"  :geojson="r7" :options-style="{color: '#EA9CA5' , weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">

          </l-geo-json>
          

        
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
       <button class="absolute top-4 right-4" @click="toggle= !toggle"> <font-awesome-icon :icon="['fas', 'times']" size="lg" class="text-black"/></button>
     </div>
   </div>
 </transition>
</div>
</template>

<script>
// import {
//   LMap,
//   LTileLayer,
//   LCircle,
//   LRectangle,
//   LPolygon,
//   LPolyline,
//   LPopup,
//   LTooltip,
// } from "vue2-leaflet";
// import { latLng } from "leaflet";
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
    center: Array
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
     
      
      url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib21hcmFzaDI3IiwiYSI6ImNrdmNiOGZmYjRqYTQzMXF3Mzk0MXJjNTUifQ.qBSRkgV-kxRHHwr0ZuOchg',
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
