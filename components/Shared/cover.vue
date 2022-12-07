<template>
  <!-- <div class="cover" v-lazy:background-image="`${image}`"> -->
  <div class="cover" :style="`background-image: url('${image}');`">
    <!-- <img :src="image" class="img-fluid w-100" alt="cover-image" height="500" /> -->
  </div>
</template>

<script>
export default {
  // props: ["image"],
  data(){
    return {
      image:'images/home/Mask Group 251.png'
    }
  }
};
</script>

<style lang="scss" scoped>
.cover {
  // min-height: 450px;
  // max-height: 400px;
  min-height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50% 50%;
  width: 100%;
  img {
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 992px) {
      object-fit: cover;
    }
  }
}
</style>
