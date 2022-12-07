<template>
  <div>
    <!-- <div class="cover" v-lazy:background-image="`${image}`"> -->
    <div
      class="cover text-center"
      :style="`background-image: url('${passedImage}');`"
      v-if="passedImage"
    >
      <div class="text-holder">
        <h2 class="title text-white">FOUNDERS DEVELOPMENT CAREERS</h2>
      </div>
      <!-- <img :src="image" class="img-fluid w-100" alt="cover-image" height="500" /> -->
    </div>
    <div class="cover" :style="`background-image: url('${image}');`" v-else>
      <div class="text-holder">
        <h2 class="title text-white">FOUNDERS DEVELOPMENT CAREERS</h2>
      </div>
      <!-- <img :src="image" class="img-fluid w-100" alt="cover-image" height="500" /> -->
    </div>
  </div>
</template>

<script>
export default {
  // props: ["image"],
  data() {
    return {
      image: "images/home/Mask Group 251.png",
    };
  },
  props: ["passedImage"],
};
</script>

<style lang="scss" scoped>
.cover {
  // min-height: 450px;
  // max-height: 400px;
  min-height: 65vh;
  overflow: hidden;
  background-attachment: local;
  background-position: 50% 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  img {
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 992px) {
      object-fit: cover;
    }
  }
}
</style>
