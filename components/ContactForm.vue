<template>
  <div class="flex justify-start el"  
>
      <div class="w-1/2 h-full " 
>
        <div class="float-right w-1/2 h-full px-24 py-32 text-6xl text-left text-white bg-white test texter">
            <div class="inline-block my-auto space-y-3 align-middle">
              <h2 class="text-3xl font-bold text-left text-white"> Contact us</h2>
                <form v-on:submit.prevent="submitForm()">
                  <div class="flex flex-col space-y-4 text-xl">
                    <div class="flex items-center py-2 border-b border-gray-200 ">
    <input class="w-full px-2 py-1 mr-3 leading-tight text-gray-200 bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="Name" aria-label="Full name" v-model="form.name">
   
  </div>
  <div class="flex items-center py-2 border-b border-gray-200 ">
    <input class="w-full px-2 py-1 mr-3 leading-tight text-gray-200 bg-transparent border-none appearance-none focus:outline-none" type="email" placeholder="Email" aria-label="Email" v-model="form.email">
   
  </div>
  <div class="flex items-center py-2 border-b border-gray-200 ">
    <input class="w-full px-2 py-1 mr-3 leading-tight text-gray-200 bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="Subject" aria-label="Full name" v-model="form.phone">
   
  </div>
  <div class="flex items-center py-2 border-b border-gray-200 ">
    <textarea class="w-full px-2 py-1 mr-3 leading-tight text-gray-200 bg-transparent border-none appearance-none focus:outline-none" cols="4" rows="1" type="text" placeholder="Message" aria-label="Full name" v-model="form.message">
    </textarea>
  </div>
                  </div>
                  
 <div class="flex justify-center mx-auto my-4 rounded-lg "><input type="submit" value="Send Message" class="px-4 py-2 text-xl text-gray-200 transition ease-in-out bg-transparent border-2 border-gray-200 rounded-md cursor-pointer hover:bg-white hover:text-black" ></div>
                </form>
              

              </div>
            </div>
      </div>
          
  </div>
</template>

<script>
import axios from 'axios'
export default {
data() {
  return {
   
form: {name: '',
email: '',
phone: '',
message: ''}
    
    

  }
},
methods: {
  submitForm(){
//            
let data = new FormData();
    data.append("email", this.form.email);
    data.append("name", this.form.name);
    data.append("phone", this.form.phone);
    data.append("message", this.form.message);

    let config = {
      header: {
        "Content-Type": "multipart/form-data;",
      },
    };
    axios.post("http://modernegy.adgroup.tech/api/v1/contacts", data).then((res) => console.log(res))
      .catch((err) => console.log(err));

      this.form.name = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.message = ''
       
}
}
}
</script>

<style scoped>
.el {
  width: 100vw;
  height: 30vw;
   
  background-image: url('../assets/simon-zhu-4hluhoRJokI-unsplash.svg');
  background-size: cover;
  background-position: center;

}

.test
{ background-color: rgba(0, 0, 0, 0.61);

backdrop-filter: blur(10px);
 
}

</style>