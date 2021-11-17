<template>
  <div class="flex flex-col justify-center p-4 bg-gray-200 md:p-20 md:flex-row "  >
      <div class="flex flex-col justify-center p-4 space-y-2 md:w-1/2 md:p-10">
        <div class="">
          <h2 class="float-left text-4xl font-semibold text-gray-600 ">
            Subscribe to our newsletter
          </h2>
        </div>
        <form v-on:submit.prevent="submitForm()">
          <div class="flex flex-col float-left gap-y-4">
            <label class="hidden md:flex">Email</label>
            <div class="flex mt-2 gap-x-2 md:block md:gap-x-2 gap-y-3"><input class="px-1 py-2 rounded-md md:p-2" type="email" v-model="data.email" placeholder="Enter your email address...">
            <button @click.prevent="submitForm()" class="w-full px-2 transition duration-150 ease-in-out bg-transparent border-2 border-gray-300 rounded-md md:px-4 md:py-2 md:mt-2 hover:bg-site-secondary hover:border-transparent hover:text-gray-100 md:w-1/3 ">Click me</button>
            </div>
            </div>
        </form>
      </div>
      <div class="flex flex-col justify-center p-4 space-y-2 md:w-1/2 md:p-16 md:border-l-4 border-site-primary">
        <h2 class="text-3xl font-bold">
          Latest News
        </h2>
        <p class="md:w-3/4 flex-nowrap">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        </p>
      </div>

        
        
  </div>
</template>

<script>
import axios from 'axios'
export default {
data() {
  return {
    data:{
      email: ''
    }
  }
},
methods: {
  submitForm(){
            axios.post('http://modernegy.adgroup.tech/api/v1/contacts', this.data)
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
</style>