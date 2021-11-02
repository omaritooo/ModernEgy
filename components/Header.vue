<template>
  <div class="flex flex-col px-32 py-10 my-16">
      <div class="flex justify-center h-full my-2" style="height: fit-content">
          <div class="text-white bg-site-secondary rounded-t-md ">
              <div class="px-10 py-2 text-center ">
                  Projects
              </div>
              <hr class="text-gray-100" >
              <div class="flex flex-col py-4 space-y-5 text-left">
                  <button class="px-4 py-2 text-left clicker">
                      NEW Capital
                  </button>
                  <button class="px-4 py-2 text-left clicker">
                      Mostakbal City
                  </button>
                  <button class="px-4 py-2 text-left clicker">
                      New Alamein
                  </button>
                  <button class="px-4 py-2 text-left clicker">
                      5th Settlement
                  </button>
                  <button class="px-4 py-2 text-left clicker">
                      6th October & Zayed
                  </button>
      
      
                  <button class="px-4 py-2 text-left clicker" >
                      North Coast
                  </button>
                  <button class="px-4 py-2 text-left clicker" >
                      Ain Sokhna
                  </button>
              </div>
          </div>
          <div class="flex flex-col h-full px-2 mx-2 " style="width: 100%; height: fit-content;">
             
               <div class="flex justify-center p-2 space-x-3 bg-site-secondary rounded-t-md">
                       <div class="rounded-md shadow-lg">
                           <Drop Name="Developers"/>
                       </div>
                      <div class="rounded-md shadow-lg ">
                          <Drop Name="Commercial"/>
                      </div>
                      <div class="rounded-md shadow-lg">
                          <Drop Name="Residential"/>
                      </div>
      
                  </div>
      
                  <div class="text-sm bg-site-secondary rounded-t-md text-site-primary">
      
      <div class="h-full" >
           <GMap
        :cluster="{options: {styles: clusterStyle}}"
        :center="{lat: locations[0].lat, lng: locations[0].lng}"
        :options="{fullscreenControl: false, streetViewControl: false, overviewMapControl:false, mapTypeControl: false, zoomControl: false, gestureHandling: 'cooperative', styles: mapStyle}"
        :zoom="15"
        style="width: 100%; height: 100%;"
      >
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{lat: location.lat, lng: location.lng}"
          :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
          @click="currentLocation = location"
          
        >
          <GMapInfoWindow class="" >
            <code>
              
            </code>
          </GMapInfoWindow>
        </GMapMarker>
      </GMap>
      </div>
                <!-- <img class="w-full" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" alt=""> -->
      
                  </div>
      
          </div>
          <div class="w-1/6 h-full space-y-2 ">
              <div class="" > <img class="h-full px-2 py-24 bg-gray-200 rounded-md " src="../assets/ad.svg"> </div>
                         <div class=""> <img class="h-full px-2 py-24 bg-gray-200 rounded-md " src="../assets/ad.svg"> </div>
          </div>
     
      </div>
       <div class="flex justify-center space-x-8">
                          <button class="flex px-4 py-2 space-x-2 bg-gray-200 rounded-md ">
                              <img class="w-6 pr-2" src="@/assets/bulding.svg">
                              Commercial
                          </button>
                           <button class="flex px-4 py-2 space-x-2 bg-gray-200 rounded-md ">
                              <img class="w-6 pr-2" src="@/assets/apartment.svg">
                              Residential
                          </button>
                          <button class="px-4 py-2 bg-gray-200 rounded-md ">
                              Show All
                          </button>
                      </div>
  </div>
</template>

<script>


import Drop from "./Dropdown.vue"
export default {
components:
{
    Drop,
},
 data() {
    return {
      currentLocation: {},
      locations: [
        {
          lat: 30.019617,
          lng: 31.485779
        },
        {
          lat: 45.815,
          lng: "15.9819"
        },
        {
          lat: "45.12",
          lng: "16.21"
        }
      ],
      pins: {
        selected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAApVBMVEUAAAD/AAD/AADxHCvyGyjzGDHoFy7vGSnwHi3wHSzsGi3uGivuHivrGyvsHCztGyrtHSzuHCvuHSzsHSzsHSvtHCvtHCrtGyvsHCvsHCvtHSztHCvtHCvtHCvuGyvtHCvtHSztGyvtHSvtHCvtHCztHCvsHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCv///8Zo6fZAAAANXRSTlMAAQISExUWHyIjKDs8QVJVV1ppe3x+f4KHiJiZmpuxt7vDxMbHys7R4Ont7u/w8fLz9Pb7/qzXrqoAAAABYktHRDZHv4jRAAAAn0lEQVQYGaXBV5KCQABF0eeooxjGnDFnpc13/1uzi7JoQL/Gc/R/v931fr/u5JXSuBK61JVQe/Dy+FNM/kQkyMnpYRnfN1hdOVsgKEqeATZyzsBI1hg4yTkCQ1kj4CBnBQRFyTPAUs4Ay/i+werLKRFTUsyCyFxxFSJlJcx4mSnJuxG6FpTSJtRS2s8Ua5LRm+wOdll9UL3fq/qo2dQ3nvcVIgrnmsRBAAAAAElFTkSuQmCC",
        notSelected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII="
      },
      clusterStyle: [
        {
          url: "https://googlemaps.github.io/js-marker-clusterer/images/m2.png",
          width: 56,
          height: 56,
          textColor: "#fff"
        }
      ],
     
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

</style>