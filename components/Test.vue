<template>

  
  <div id="map-wrap" class=""  style="">
      <div v-if="tester">
        <transition name="slide-fade">
             <div class="absolute top-0 left-0 w-full h-full p-6 z-555 " v-if="toggle " >
         <div class="relative w-full h-full rounded-lg">
           <div class="absolute top-0 w-full">
             <Model :namer="name" class="mb-10 rounded-lg -0"/>
           </div>
           <div class="absolute top-4 left-48 right-48">
             <div class="flex">
               <div class="text-lg">Projects:</div>
               <div class="flex flex-row text-lg">
                 <div class="" v-for="data in project" :key="data.index" >
                   <div v-for="dist in data.district" :key="dist.index"  >
                     <div v-if="dist.title == 'R7 District'">
                       <div v-for="proje in dist.project" :key="proje.index">
                         <div v-if="name == 'r7'" class="flex px-2 mx-2 space-x-3 text-white rounded-lg clicker text-md bg-site-secondary" ><a href="http://compound.adgrouptech.com/"  target="_blank">{{proje.title}}</a></div>
                       </div>
                     </div>
                     <div v-if="dist.title == 'Mu 23'" class="flex flex-row">
                         <div v-for="proje in dist.project" :key="proje.index" class="flex">
                          <div v-if="name == 'mu23'" class="flex flex-row px-2 mx-2 space-x-3 text-white rounded-lg clicker text-md bg-site-secondary" >{{proje.title}}</div>
                         </div>
                     </div>
                     </div>
                 </div>
                 </div>
             </div>
           </div>
           <div class="absolute top-4 right-4">
             <div class="flex space-x-3">
               <button  @click="tester= !tester">                           <font-awesome-icon :icon="['fas', 'expand-arrows-alt']" size="md" class="text-white transition duration-500 ease-in-out transform text-md hover:-translate-y-1 hover:shadow-xl"/>
               </button>
               <button  @click="screenToggle"> <font-awesome-icon :icon="['fas', 'times']" size="lg" class="text-white transition duration-500 ease-in-out transform text-md hover:-translate-y-1 hover:shadow-xl"/></button>
             </div>
             </div>
         </div>
             </div>
           </transition>
      </div>
 <div class="relative">
   <client-only>
    
   
    <div class="relative" >
   
   
   
      <l-map
          :minZoom="zoom"
          :zoom="zoom"
          :center="this.$store.state.center"
          class="z-0"
          style="height: 64vh; width: 65vw;"
        >
          <l-tile-layer
            :url="url"
            :attribution="attribution"
          />
   
      <div v-if="!toggles.cap">
         <l-geo-json :geojson="test" :options-style="{color: '#D1CEEC',  weight: 0.1, fillOpacity:0.7 , opacity: 0.9  }">
            </l-geo-json>
             <div class="relative z-10" v-if="toggles.at" >
   
   
            <l-feature-group ref="features">
   <!-- <l-popup > {{name}} </l-popup> -->
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
              <l-geo-json @click="openPopUpG(r7c, 'r7' )"  :geojson="r7" :options-style="{color: '#EA9CA5' , weight: 1.5, fillOpacity:0.7 , fillColor: '#E7A2A5', opacity: 1  }">
            </l-geo-json>
            <l-geo-json @click="openPopUpG(r8c, 'r8' )"  :geojson="r8" :options-style="{color: '#EA9CA5' , weight: 1.5,  fillOpacity:0.7 , fillColor: '#E7A2A5', opacity: 1  }">
            </l-geo-json>
   
   
            </div>
      </div>
   
   
   
        </l-map>
   
    </div>
   </client-only>
   
   <div v-if="!tester">
     <transition name="slide-fade">
       <div class="absolute top-0 left-0 z-40 w-full h-full " v-if="toggle" >
         <div class="relative w-full h-full rounded-lg">
     
           <div class="absolute top-0 w-full">
             <Model :namer="name" class="mb-10 rounded-lg -0"/>
           </div>
           <div class="absolute top-4 left-48 right-48">
             <div class="flex">
               <div class="text-lg">Projects:</div>
     
               <div class="flex flex-row text-lg">
                 <div class="" v-for="data in project" :key="data.index" >
                   <div v-for="dist in data.district" :key="dist.index"  >
                     <div v-if="dist.title == 'R7 District'">
                       <div v-for="proje in dist.project" :key="proje.index">
     
                         <div v-if="name == 'r7'" class="flex px-2 mx-2 space-x-3 text-white rounded-lg clicker text-md bg-site-secondary" ><a href="http://compound.adgrouptech.com/"  target="_blank">{{proje.title}}</a></div>
     
                       </div>
                     </div>
                     <div v-if="dist.title == 'Mu 23'" class="flex flex-row">
     
                         <div v-for="proje in dist.project" :key="proje.index" class="flex">
     
                          <div v-if="name == 'mu23'" class="flex flex-row px-2 mx-2 space-x-3 text-white rounded-lg clicker text-md bg-site-secondary" >{{proje.title}}</div>
     
                         </div>
     
                     </div>
     
                     </div>
                 </div>
                 </div>
             </div>
           </div>
           <div class="absolute top-4 right-4">
             <div class="flex space-x-3">
               <button @click="tester= !tester">                         <font-awesome-icon :icon="['fas', 'expand-arrows-alt']" size="md" class="text-white transition duration-500 ease-in-out transform text-md hover:-translate-y-1 hover:shadow-xl"/>
               </button>
               <button  @click="screenToggle"> <font-awesome-icon :icon="['fas', 'times']" size="lg" class="text-white transition duration-500 ease-in-out transform text-md hover:-translate-y-1 hover:shadow-xl"/></button>
             </div>
             </div>
         </div>
      </div>
       </transition>
   </div>
   </div>

 <!-- <div>
   <ModelFull/>
 </div> -->
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
    ModelObj,
    
  },
  props:
  {
    toggles: Object,
  
  },
    data() {
    return {
      tester: false,
      geoj: {},
      scre: false,
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
      test:{
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [31.784203648567214, 30.070523839301327],
          [31.784088313579577, 30.070563299840583],
          [31.783951520919814, 30.070581869500696],
          [31.783828139305133, 30.070584190707972],
          [31.783699393272414, 30.070570263463566],
          [31.783466041088122, 30.070495984793503],
          [31.783401668071765, 30.07046580906789],
          [31.783329248428366, 30.070428669700622],
          [31.783203184604663, 30.070328857582105],
          [31.783090531826037, 30.07018029982388],
          [31.78298592567446, 30.069959783990296],
          [31.782975196838393, 30.069630169933397],
          [31.78276598453524, 30.06940268916932],
          [31.78254067897798, 30.069230917633657],
          [31.78131222724916, 30.068567041057698],
          [31.77912354469301, 30.06747140284309],
          [31.774789094924948, 30.065168666044425],
          [31.766077280044577, 30.060897318849232],
          [31.748758256435437, 30.052774286564304],
          [31.74051851034168, 30.047870893413727],
          [31.73884481191639, 30.045939187034488],
          [31.73764318227772, 30.04471327690843],
          [31.736741960048718, 30.044601829781005],
          [31.733823716640515, 30.044676127879853],
          [31.728974282741593, 30.044638978837337],
          [31.712537705898324, 30.044750425922928],
          [31.67614549398426, 30.044601829781005],
          [31.60696059465411, 30.043361972032212],
          [31.60421401262286, 30.041430177725243],
          [31.601386964321183, 30.036280090097367],
          [31.600528657436417, 30.032713416276472],
          [31.599670350551648, 30.027883340876677],
          [31.5978625416756, 30.02389370688511],
          [31.593227684497865, 30.018840249670856],
          [31.58585160970692, 30.013466024101486],
          [31.58138841390614, 30.009526908063677],
          [31.57838433980946, 30.00543898075021],
          [31.572129428386738, 29.99713253693035],
          [31.581313312053727, 29.995980357825786],
          [31.5904757380486, 29.99486533305442],
          [31.6085216403008, 29.99274675148081],
          [31.629560887813604, 29.99236112760224],
          [31.630054414272344, 29.992282144213302],
          [31.630226075649297, 29.9921706381456],
          [31.630370914936098, 29.99203125538468],
          [31.630778610706358, 29.991775719814957],
          [31.631159484386483, 29.991738550950025],
          [31.631502807140382, 29.99183611919078],
          [31.63181394338611, 29.992156699878276],
          [31.632194817066225, 29.992291436379933],
          [31.633385717868837, 29.99227749812958],
          [31.644758284091978, 29.99237041976139],
          [31.656774580478704, 29.99209165460509],
          [31.657085716724424, 29.992045193669533],
          [31.656881868839296, 29.991534121944046],
          [31.65701061487201, 29.99101375530192],
          [31.65752559900287, 29.99071640171034],
          [31.658298075199163, 29.99071640171034],
          [31.658705770969423, 29.990827909411554],
          [31.663860976696064, 29.987543025882434],
          [31.66890352964406, 29.984086114538762],
          [31.67889744043355, 29.977232339082537],
          [31.68383806943898, 29.97380759747115],
          [31.6889020800591, 29.970405973330738],
          [31.69419139623647, 29.967125061574595],
          [31.696787774562885, 29.965479917735344],
          [31.69835418462758, 29.96447144039211],
          [31.698866486549374, 29.964120562234793],
          [31.699073016643524, 29.96397649269885],
          [31.699215173721313, 29.963830099246763],
          [31.699314415454865, 29.963704618973352],
          [31.699381470680237, 29.963590757106683],
          [31.69941633939743, 29.963528016838698],
          [31.699410974979404, 29.963451334235128],
          [31.699424386024475, 29.963332824640542],
          [31.699472665786743, 29.96318410651796],
          [31.699569225311276, 29.96304933052715],
          [31.699652373790745, 29.962961028916837],
          [31.6996818780899, 29.962800691581766],
          [31.69970601797104, 29.962552052014367],
          [31.69968456029892, 29.962322001767156],
          [31.69947803020477, 29.961313492379528],
          [31.69931977987289, 29.960274763487988],
          [31.699228584766384, 29.958931603548688],
          [31.699207127094265, 29.958143824828948],
          [31.699207127094265, 29.95760236857848],
          [31.699258089065548, 29.956675146948267],
          [31.69936805963516, 29.955845520264248],
          [31.699504852294922, 29.95511581488113],
          [31.69966846704483, 29.954397723781884],
          [31.699845492839813, 29.953737726093905],
          [31.700070798397075, 29.953093991734008],
          [31.70035243034364, 29.952368914106497],
          [31.700596511364, 29.95173214285497],
          [31.7008486390114, 29.951095367525433],
          [31.701140999794024, 29.950512040560834],
          [31.702321171760573, 29.948136865157466],
          [31.70261621475222, 29.947544224486478],
          [31.702889800071734, 29.947002710511104],
          [31.703436970710772, 29.945901080705323],
          [31.70396804809572, 29.94482268021572],
          [31.70425504446031, 29.94425093728222],
          [31.70436501502992, 29.944002251322054],
          [31.70443743467333, 29.943748916386866],
          [31.704453527927416, 29.943535091902742],
          [31.704421341419238, 29.94347698734394],
          [31.704332828521746, 29.943409586013193],
          [31.704276502132437, 29.943332887891625],
          [31.70420676469805, 29.943179491471035],
          [31.704166531562826, 29.943023770620325],
          [31.704190671443957, 29.94276810899341],
          [31.70426845550539, 29.942600766481792],
          [31.704378426075003, 29.942463638380467],
          [31.70448571443559, 29.94236602165076],
          [31.704694926738757, 29.942268404825256],
          [31.704917550086993, 29.942212623739128],
          [31.705236732959765, 29.942214947951648],
          [31.705400347709674, 29.942266080613955],
          [31.705526411533377, 29.942333482719537],
          [31.705681979656237, 29.942438072103343],
          [31.705791950225848, 29.942563579218728],
          [31.705920696258563, 29.94276346059409],
          [31.706392765045187, 29.942898264085557],
          [31.708023548126242, 29.94312138670448],
          [31.70964360237123, 29.9433259153322],
          [31.715136766433734, 29.944013872175177],
          [31.719181537628188, 29.944618154665857],
          [31.723344326019305, 29.945241026621403],
          [31.731562614440936, 29.946709873399026],
          [31.73492074012758, 29.947360621365974],
          [31.738246679306044, 29.94802066138266],
          [31.744769811630267, 29.9493965053623],
          [31.75789117813112, 29.952733777547927],
          [31.760916709899917, 29.95360758518759],
          [31.764028072357195, 29.954518567954445],
          [31.77029371261598, 29.95641487265544],
          [31.776419878006003, 29.95848775258943],
          [31.782481670379653, 29.960634950350915],
          [31.785442829132094, 29.96169458929564],
          [31.788328886032122, 29.9627635118729],
          [31.793768405914324, 29.964957090897176],
          [31.799712181091326, 29.967448045655367],
          [31.805607676506064, 29.97007370461988],
          [31.80575519800188, 29.970108558033346],
          [31.805967092514052, 29.970120175835092],
          [31.806208491325396, 29.96998540925109],
          [31.806503534317038, 29.96993893797288],
          [31.806693971157088, 29.969950555794476],
          [31.80687904357912, 29.970006321319218],
          [31.807080209255236, 29.970101587351618],
          [31.80723041296007, 29.970254942236302],
          [31.807313561439532, 29.970412943991118],
          [31.807369887828848, 29.970573269044312],
          [31.807332336902636, 29.97093574212404],
          [31.80709362030031, 29.971228507876862],
          [31.806911230087298, 29.971330743333347],
          [31.80667251348497, 29.971384184552825],
          [31.80644184350969, 29.97140741985669],
          [31.80610656738283, 29.9716815960318],
          [31.80574446916582, 29.97230197492317],
          [31.783331930637384, 30.009466519454058],
          [31.778868734836603, 30.017641873693563],
          [31.776894629001642, 30.02633673814161],
          [31.780070364475275, 30.03904324523585],
          [31.783629655838027, 30.05016242412238],
          [31.78526043891908, 30.055734314056558],
          [31.78616166114809, 30.058631572919417],
          [31.78657203912738, 30.061345354680054],
          [31.78651839494708, 30.06258963008251],
          [31.786378920078306, 30.063429971412628],
          [31.78530067205432, 30.06661020412224],
          [31.784699857234987, 30.06820724594756],
          [31.784415543079405, 30.069075394499382],
          [31.784431636333494, 30.069228596394524],
          [31.78455501794818, 30.06934930075087],
          [31.784710586071046, 30.06957213917583],
          [31.784726679325132, 30.069748552572964],
          [31.784742772579225, 30.06984140160319],
          [31.784702539444, 30.069985317427683],
          [31.784689128398927, 30.070029420622276],
          [31.78468108177187, 30.070082808673845],
          [31.784603297710444, 30.07024297265533],
          [31.78441822528841, 30.0704170636455],
          [31.784203648567214, 30.070523839301327]
        ]
      ]
    }
  }]
},
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
         console.log(this.mu23)
        this.$store.commit("getData")
        this.$store.commit('getScreen')
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
    screenToggle()
    {
      this.toggle = !this.toggle
      if (this.tester == true)
      {
        this.tester == false
      }
     
      console.log(this.$store.state.screen)
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
    },
    screenT()
    {
      return this.$store.getters.getScreen
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
