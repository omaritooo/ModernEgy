<template>
  <div class="flex flex-col justify-center pt-10 bg-gray-100">
    <h1 class="py-10 text-3xl text-center">Become a Partner</h1>
    <div class="flex flex-col justify-center p-4">
      <client-only>
        <div class="w-1/3 mx-auto">
          <carousel
            :scrollPerPage="false"
            paginationEnabled="false"
            autoplay="true"
            perPage="1"
            autoplayHoverPause="true"
            paginationSize="0"
            loop="true"
          >
            <slide v-for="part in partners" :key="part.index">
              <div v-if="part.image_path !== null || part.image_path !== ''">
                <img :alt="part.company_name" :src="part.image_path" />
              </div>
              <div v-if="part.image_path == null || part.image_path == ''">
                {{ part.title }}
              </div>
            </slide>
          </carousel>
        </div>
      </client-only>
      <!-- <button @click="toto" class="justify-center px-4 py-2 mx-auto text-white rounded-md bg-site-secondary">
                  Become a Partner 
              </button> -->
    </div>

    <transition name="slide-fade"> </transition>
    <div id="pfor" class="flex pl-4 text-white bg-site-primary">
      <div class="flex flex-col justify-center w-full p-4 md:w-1/2 md:p-10">
        <form
          v-on:submit.prevent="postForm()"
          class="flex flex-col justify-center w-1/2 mx-auto space-y-2"
        >
          <label for="company">Company name</label>
          <input
            class="h-8 rounded-sm bg-site-secondary"
            type="text"
            name="company"
            id="company"
            v-model="form.company"
          />
          <label for="email">Email</label>
          <input
            class="h-8 rounded-sm bg-site-secondary"
            type="text"
            name="email"
            id="email"
            v-model="form.email"
          />
          <label for="name">Contact name</label>
          <input
            class="h-8 rounded-sm bg-site-secondary"
            type="text"
            name="name"
            id="name"
            v-model="form.name"
          />
          <label for="phone">Contact number</label>
          <input
            class="h-8 rounded-sm bg-site-secondary"
            type="phone"
            name="phone"
            id="phone"
            v-model="form.phone"
          />
          <label for="message">Position title</label>
          <input
             class="h-8 rounded-sm bg-site-secondary"
            type=""
            name="message"
            id="message"
            v-model="form.message"
          ></input>
          <input
            type="submit"
            class="px-4 py-2 mx-auto mt-6 rounded-md md:w-1/4 clicker bg-site-secondary"
            name=""
            id=""
          />
        </form>
      </div>
      <div class="hidden float-left w-1/2 p-10 md:flex bg-site-secondary">
        <div class="w-1/2 p-10 space-y-2 text-3xl">
          <div class="text-4xl font-bold">Modern Egy</div>
          <div class="text-lg font-thin">
            Reach global customers, close more deals/ increase your sales Join
            modern Egy the first real estate market place allows the customers
            to take a live tour of your projects
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      partners: [],
      part: false,
      form: {
        email: "",
        name: "",
        phone: "",
        message: "",
        company: "",
      },
    };
  },
  props: {},

  methods: {
    postForm() {
      let dataa = new FormData();
      dataa.append("email", this.form.email);
      dataa.append("contact_person", this.form.name);
      dataa.append("phone", this.form.phone);
      dataa.append("note", this.form.message);
      dataa.append("company_name", this.form.company);

      axios
        .post("https://modernegy.adgroup.tech/api/v1/partners", dataa)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      console.log(dataa);
      this.form.name = "";
      this.form.email = "";
      this.form.phone = "";
      this.form.message = "";
      this.form.company = "";
    },
    toto() {
      if (this.$store.state.partnerT == true) {
        this.$store.commit("partnerF");
      } else if (this.$store.state.partnerT == false) {
        this.$store.commit("partnerT");
      }
    },
  },
  mounted() {
    // this.$store.dispatch("getData");
    axios
      .get("https://modernegy.adgroup.tech/api/v1/partners")
      .then((response) => (this.partners = response.data.data));
    this.$store.dispatch("getPT");
  },
  computed: {
    partner() {
      return this.$store.state.data;
    },
    tot() {
      return this.$store.state.partnerT;
    },
  },
};
</script>

<style scoped>
.clicker {
  cursor: pointer;
  transition-duration: 0.9s;
  transition: ease-in-out;
}

.clicker:hover {
  background: rgb(236, 219, 183);
  background: linear-gradient(
    90deg,
    rgba(236, 219, 183, 1) 0%,
    rgba(227, 186, 100, 1) 100%
  );
  color: black;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
