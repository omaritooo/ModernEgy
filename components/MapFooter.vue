<template>
  <div class="w-full h-full" data-aos="fade-left">
    
       <div class="">
        <no-ssr>
  <div class="pointer-events-none" >
    <l-map class="z-20"
    :minZoom="zoom" :maxZoom="zoom"
    
        :zoom="zoom"
        :center="center"
        :options="{zoomControl: false}"
        style="height: 400px; width: 100%"
      >
        <l-tile-layer
          :url="url"
          
        />
    
     
        <div class="relative z-10" >
          <!-- <l-polygon  @click="mapT= !mapT" class="containo"
            :lat-lngs="polygon.latlngs"
            :color="polygon.color"
          >
         
         
           
            
            
          </l-polygon>
            <l-polyline :lat-lngs="polygon.latlngs">
            
          </l-polyline> -->
        <l-marker :lat-lng="center" ></l-marker>
        </div>
    <l-footer disableScrollPropagation="true">

    </l-footer>
      </l-map>
    
  </div>
 </no-ssr>
       </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      json: {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#0fa5d7",
        "marker-size": "medium",
        "marker-symbol": "circle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          30.0313,
          31.6816
        ]
      }
    }
  ]
},
      zoom: 16,
      center: [30.019617, 31.485779],
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
     url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib21hcmFzaDI3IiwiYSI6ImNrdmNiOGZmYjRqYTQzMXF3Mzk0MXJjNTUifQ.qBSRkgV-kxRHHwr0ZuOchg',
    };
  },
mounted()
{
  
},
methods:{}
}


</script>

<style>

</style>