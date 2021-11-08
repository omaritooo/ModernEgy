<template>
  <div class="flex flex-col justify-center py-10 bg-gray-100" >
      <h1 class="py-10 text-3xl text-center">
          Our Partners
      </h1>
       <div class="flex flex-col justify-center p-4">
           <client-only>
                 <div class="w-1/3 mx-auto ">
              <carousel :scrollPerPage="false" paginationEnabled="false" autoplay="true" perPage="3" autoplayHoverPause="true" paginationSize="0" loop="true">
                  <slide v-for="part in partners" :key="part.index">
                     <!-- {{part.company_name}} -->
                     <div v-if="part.image_path != ''"><img :src="part.image_path" alt=""></div>
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
                        <form v-on:submit.prevent="submit()" class="flex flex-col justify-center w-1/2 mx-auto space-y-2">
                            <label>Company</label>
                            <input class="h-8 rounded-sm bg-site-secondary" type="text" name="" id="" v-model="form.name">
                            <label>Email</label>
                            <input class="h-8 rounded-sm bg-site-secondary" type="text" name="" id="" v-model="form.email">
                            <label>Phone</label>
                            <input class="h-8 rounded-sm bg-site-secondary" type="phone" name="" id="" v-model="form.phone">
                            <label>Message</label>
                            <textarea class="rounded-sm bg-site-secondary" type="" name="" id="" v-model="form.message"></textarea>
                            <input type="submit" @click.prevent="submit()" class="w-1/4 mx-auto rounded-md bg-site-secondary" name="" id="">
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
import axios from 'axios'
export default {
    data() {
          return {
            headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'},
            
            part: false,
             form: {
email: '',
name: '',
phone: '',
message: ''
    }
          };
      },
      props:
      {
          partners: Array,
          id: Number,
          company_name: String,
          image_path: String
      
      },
      mounted()
      {
          console.log(this.partners)
      },
      methods: {
 submit(){
            axios.post('http://127.0.0.1:8000/api/v1/contacts', this.form)
                 .then((res) => {
                   console.log(res)
})
                 .catch((error) => {
                     console.log(error)
                 }).finally(() => {
                     this.email = ''
                 });
        }
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