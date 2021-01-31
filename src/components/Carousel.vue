<template>
  <b-carousel ref="myCarousel" .... >
    <!-- slides go here -->
  </b-carousel>
</template>

<script>
  export default {
    // ...
    methods: {
      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      }
    }
  }
</script>