<template>
  <v-carousel
    cycle

    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in sliderImages"
      :key="i"
      :src="`${storageUrl}/uploads/${item}`"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>

import { mapState } from "vuex";
export default {
    name: 'slider',
    data () {
      return {
       
      }
    },
    computed: {
      ...mapState(['sliderImages', 'storageUrl'])
    }
}
</script>