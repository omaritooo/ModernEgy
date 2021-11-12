<template>
  <div class="flex flex-col justify-center pt-10 bg-gray-100" >
      <h1 class="py-10 text-3xl text-center">
          Our Partners
      
      </h1>
       <div class="flex flex-col justify-center p-4">
           <client-only>
                 <div v-for="part in partner" class="w-1/3 mx-auto ">
              <div v-for="pa in part.district">

                <carousel :scrollPerPage="false" paginationEnabled="false" autoplay="true" perPage="1" autoplayHoverPause="true" paginationSize="0" loop="true">
                    <slide v-for="proj in pa.project" >
                      <div v-if="proj.partner.image_path"><img :src="proj.partner.image_path"></div>
                    </slide>
                
                </carousel>
              </div>
                 </div>
               
                 
               </client-only>
               <button @click="part= !part" class="justify-center px-4 py-2 mx-auto text-white rounded-md bg-site-secondary">
                  Become a Partner 
              </button>
             
       </div>
          

          <transition name="slide-fade" >
              <div v-if="part" class="flex pl-4 text-white bg-site-primary">
                  <div class="flex flex-col justify-center w-1/2 p-10">
                        <form v-on:submit.prevent="postForm()" class="flex flex-col justify-center w-1/2 mx-auto space-y-2">
                            <label>Company</label>
                            <input class="h-8 rounded-sm bg-site-secondary" type="text" name="" id="" v-model="form.company">
                            <label>Email</label>
                            <input class="h-8 rounded-sm bg-site-secondary" type="text" name="" id="" v-model="form.email">
                            <label>name</label>
                            <input class="h-8 rounded-sm bg-site-secondary" type="text" name="" id="" v-model="form.name">
                            <label>Phone</label>
                            <input class="h-8 rounded-sm bg-site-secondary" type="phone" name="" id="" v-model="form.phone">
                            <label>Message</label>
                            <textarea class="rounded-sm bg-site-secondary" type="" name="" id="" v-model="form.message"></textarea>
                            <input type="submit"  class="w-1/4 px-4 py-2 mx-auto mt-6 rounded-md clicker bg-site-secondary" name="" id="">
                        </form>
                  </div>
                  <div class="float-left w-1/2 p-10 bg-site-secondary">
                        <div class="w-1/2 p-10 space-y-2 text-3xl">
                            <div class="text-4xl font-bold">
                                            Modern Egy
                                          </div>
                                          <div class="text-lg font-thin">
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
           
            
            part: false,
             form: {
            email: '',
name: '',
phone: '',
message: '',
company: ''
    }
          }
      },
      props:
      {
         
          partners: Object,
      },
     
      methods: {
          postForm(){
             let dataa = new FormData();
    dataa.append("email", this.form.email);
    dataa.append("contact_person", this.form.name);
    dataa.append("phone", this.form.phone);
    dataa.append("note", this.form.message);
        dataa.append("company_name", this.form.company);


   
    axios.post("https://modernegy.adgroup.tech/api/v1/partners", dataa).then((res) => console.log(res))
      .catch((err) => console.log(err));
      console.log(dataa)
      this.form.name = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.message = ''
      this.form.company = ''
          },
         
         
        },
        mounted() {
          this.$store.dispatch("getData");
        },
        computed: {
 partner(){
            return this.$store.state.data;
          },
         
        }
    }

      
      

</script>

<style scoped>
.clicker{
cursor: pointer;
transition-duration: 0.9s;
transition: ease-in-out;

}


.clicker:hover{
    background: rgb(236,219,183);
background: linear-gradient(90deg, rgba(236,219,183,1) 0%, rgba(227,186,100,1) 100%);
color: black;

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
</style>