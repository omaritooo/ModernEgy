<template>
  <div
    class="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-white"
    style="z-index: 999"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  /*
   ** programmatically start the loader so we force the page to take x2seconds to load
   */
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
}
</script>