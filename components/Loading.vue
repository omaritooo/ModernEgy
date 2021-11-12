<template>
  <!-- <div v-if="loading" class="flex justify-center bg-site-primary loading-page">
    <div class="flex flex-col w-1/2 mx-auto" ><img class="" src="../assets/MODERN_EGY_LOGO.gif" alt="">
    <span class="mx-auto text-3xl font-thin text-center text-white">ModernEgy</span>
    </div>
  </div> -->

  <div
    class="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-site-primary"
    style="z-index: 999"
  >
    <slot></slot>
  </div>

</template>
<script>
  export default {
    data: () => ({
      loading: false,
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');html
{
    font-family: "Poppins", sans-serif;

}
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    z-index: 60;
    padding-top: 100px;
    
    
    
  }
</style>


