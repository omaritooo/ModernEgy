<template>
  <div class="flex justify-center p-20 bg-gray-200 "  >
      <div class="flex flex-col justify-center w-1/2 p-10 space-y-2">
        <div class="">
          <h2 class="float-left text-4xl font-semibold text-gray-600 ">
            Subscribe to our newsletter
          </h2>
        </div>
        <form v-on:submit.prevent="submitForm()">
          <div class="flex flex-col float-left space-y-1">
            <label>Email</label>
            <div class="space-x-2"><input class="p-2 rounded-md" type="email" v-model="data.email" placeholder="Enter your email address...">
            <button @click.prevent="submitForm()" class="px-4 py-2 bg-transparent border-2 border-gray-300 rounded-md">Click me</button>
            </div>
            </div>
        </form>
      </div>
      <div class="flex flex-col justify-center w-1/2 p-16 space-y-2 border-l-4 border-site-primary">
        <h2 class="text-3xl font-bold">
          Latest News
        </h2>
        <p class="w-3/4 flex-nowrap">
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