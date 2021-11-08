<template>
 <div class="overflow-x-hidden bg-site-primary">
   <Tutorial id="header"  />
    <Header :cities="cities" :dev="projects"/>
    <Partner :partners="info"/>

   
    <ContactFrom id="contact"/>
    <Contactus id="about"/>
    <Newsletter id="newsfeed"/>
    <MapFooter/>
     
      
    <Footer/>
  </div>
</template>

<script>
import Contactus from "~/components/Contactus.vue";
import Partner from "~/components/Partners.vue"
import Newsletter from "~/components/Newsletter.vue"
import Header from "~/components/Header.vue"
import ContactFrom from "~/components/ContactForm.vue"
import MapFooter from "~/components/MapFooter.vue"
import Test from "~/components/Test.vue"
import axios from "axios";
const URL = 'https://modernegy.adgroup.tech/api/v1/cities';
export default {
  
  components:
  {
    Contactus,
    Partner,
    Newsletter,
    Header,
    ContactFrom,
    MapFooter,
    Test,
    

  },
  data(){
    return{
      info: [],
      cities: [],
      projects: []
      
    }
  },
  props:
  {
    
  },
  mounted()
  {
    axios.get('https://modernegy.adgroup.tech/api/v1/partners').then( (response) => (this.info = response.data.data));
    axios.get('https://modernegy.adgroup.tech/api/v1/cities').then( (response) => (this.cities = response.data.data));
    axios.get('https://modernegy.adgroup.tech/api/v1/projects').then(response => (this.projects = response.data.data));
    console.log(this.projects)
    
  }
}
  
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');html
{
    font-family: "Poppins", sans-serif;

}
</style>


