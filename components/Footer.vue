<template>
  <div data-aos="fade-left">
    <div class="px-10 bg-site-primary">
      <div
        class="flex flex-col p-4 space-y-2 md:p-10 md:flex-row justify-evenly"
      >
        <div class="flex flex-col space-y-2 md:space-y-5">
          <div class="flex justify-center">
            <img class="w-1/3 md:w-1/2" src="../assets/logo.svg" alt="" />
          </div>
          <div class="flex justify-around py-4 space-x-2 sm:py-0 text-md">
            <a
              href="https://www.facebook.com/Modern-Egypt-111241064684239"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                size="lg"
                class="text-white transition duration-500 ease-in-out transform  text-md hover:-translate-y-1 hover:shadow-xl"
              />
            </a>
            <!-- <a href="">
                             <font-awesome-icon :icon="['fab', 'instagram']" size="lg" class="text-white transition duration-500 ease-in-out transform text-md hover:-translate-y-1 hover:shadow-xl"/>
                         </a> -->
            <a href="https://twitter.com/egypt_modern" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                size="lg"
                class="text-white transition duration-500 ease-in-out transform  text-md hover:-translate-y-1 hover:shadow-xl"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/modern-egypt/"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                size="lg"
                class="text-white transition duration-500 ease-in-out transform  text-md hover:-translate-y-1 hover:shadow-xl"
              />
            </a>
          </div>
        </div>
        <div class="flex flex-col text-white">
          <h2 class="font-bold">Fast Links</h2>
          <div class="flex flex-col my-4 space-y-5 font-thin text-gray-100">
            <nuxt-link to="#header">Home</nuxt-link>
            <nuxt-link to="#about">ِAbout Us</nuxt-link>
            <nuxt-link to="#contact">Contact Us</nuxt-link>

            <nuxt-link to="#newsfeed">News</nuxt-link>
          </div>
        </div>
        <div class="flex flex-col text-white">
          <h2 class="font-bold">Contact Details</h2>
          <div class="flex flex-col my-4 space-y-5">
            <!-- <a class="flex space-x-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg>  <div class="text-sm">+2 123 532 678 | +2 123 532 678</div>
</a> -->
            <a class="flex space-x-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <div class="text-sm">
                <a href="mailto:info@modernegy.com">info@modernegy.com</a>
              </div></a
            >
            <a class="flex space-x-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="text-sm">
                <a href="https://eg.linkedin.com/company/ad-group-technology"
                  >Fifth Settlement Copond Retaj (AD Group)</a
                >
              </div></a
            >
            <a class="flex space-x-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <div class="text-sm">
                <a href="https://eg.linkedin.com/company/ad-group-technology"
                  >support@modernegy.com</a
                >
              </div></a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center p-4 font-thin text-center text-white bg-gray-600  gap-y-2 md:gap-y-0 md:flex-row md:justify-evenly md:text-md"
    >
      <nuxt-link to="/" class="">
        © 2021 <span class="font-bold">Modern Egypt</span> (Ad Group Co.) All
        Rights Reserved.
      </nuxt-link>
      <nuxt-link to="/terms-and-conditions">Terms and Conditions</nuxt-link>
      <nuxt-link to="">Privacy & Poilics </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
