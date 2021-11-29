<template>
  <div class="flex justify-end el" data-aos="fade-left">
    <div class="h-full md:w-1/2">
      <div
        class="h-full px-10 py-32 text-6xl text-left text-white bg-white  md:px-24 md:float-left md:w-1/2 test texter"
      >
        <div class="inline-block my-auto space-y-3 align-middle">
          <h3 class="text-3xl font-bold text-left text-white">About us</h3>
          <div class="text-4xl font-semibold">Modern Egy</div>
          <div class="text-sm font-normal">
            Modern Egy is the first real estate marketplace to use a unique
            technology that allows the property buyers to take a live tour of
            the compounds and the towers to view all the project details without
            leaving their homes. Modern Egy allows the property buyer to reserve
            the units and communicate online with the real estate development
            direct to complete the buying procedure.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el {
  width: 100vw;

  background-image: url("../assets/waleed-rostom-rd-QleoFpKQ-unsplash.png");
  background-size: cover;
  background-position: center;
}
.test {
  background-color: rgba(0, 0, 0, 0.61);

  backdrop-filter: blur(10px);
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .el {
    width: 100vw;
  }
}
</style>
