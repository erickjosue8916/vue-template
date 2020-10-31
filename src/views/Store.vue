<template>
  <div>
    <StoreCard/>
  </div>
</template>
<script>

  import { mapState } from "vuex";
  import StoreCard from "..//components/store/storeCard"
  export default {
    name: 'store',
    components: {
      StoreCard
    },
    data () {
      return {
        
      }
    },
    computed: {
      ...mapState(['sliderImages', 'storageUrl'])
    }
  }
</script>