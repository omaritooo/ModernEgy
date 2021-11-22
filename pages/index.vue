<template>
  <div class="overflow-x-hidden bg-site-primary">
    <transition name="fade-loader">
      <Loading v-if="this.$store.state.loading">
        <div class="flex flex-col w-1/2 mx-auto"><img class="" src="../assets/logo.webp" alt="">
          <span class="mx-auto text-3xl font-thin text-center text-white">ModernEgy</span>
        </div>
      </Loading>
    </transition>
    <Tutorial id="header" v-lazy-load />
    <Header :cit="distro" />
    <Partner id="partnerForm" />
    <ContactFrom id="contact" />
    <Contactus id="about" />
    <Newsletter id="newsfeed" />
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
  import Loading from "~/components/Loading.vue"
  export default {
    loading: true,
    components: {
      Contactus,
      Partner,
      Newsletter,
      Header,
      ContactFrom,
      MapFooter,
      Test,
      Loading
    },
    data() {
      return {
      }
    },
    props: {
    },
    mounted() {
      this.$store.commit("getData")
      this.$store.commit("loaderOFF")
    },
    computed: {
      distro() {
        return this.$store.state.data
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  html {
    font-family: "Poppins", sans-serif;
  }
  .fade-loader-leave-active {
    @apply duration-5000 transition;
  }
  .fade-loader-enter-active {
    @apply duration-7000 transition;
    @apply delay-1000 transition;
  }
  .fade-loader-enter {
    @apply opacity-0;
  }
  .fade-loader-enter-to {
    @apply opacity-100;
  }
  .fade-loader-leave-to {
    @apply opacity-0;
  }
</style>


