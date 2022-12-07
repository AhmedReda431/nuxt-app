<template>
  <div>
    <!-- <div class="cover" v-lazy:background-image="`${image}`"> -->
    <div class=" text-holder" v-if="!passedImage">
      <div class="cover-holder">
        <div class="cover text-center" v-if="!title">
          <h2 class="title text-white">HAVE ANY QUERY, DONT HESITATE</h2>
          <h2 class="title text-white">CONTACT WITH US</h2>
        </div>
        <div class="cover text-center" v-else>
          <h2 class="title text-white">{{title}}</h2>
        </div>
      </div>
      <!-- <img :src="image" class="img-fluid w-100" alt="cover-image" height="500" /> -->
    </div>
    <div class="cover" :style="`background-image: url('${passedImage}');`" v-else>
      <div class="text-holder text-center">
        <h2 class="title text-white">HAVE ANY QUERY, DONT HESITATE CONTACT WITH US</h2>
        <h2 class="title text-white">CONTACT WITH US</h2>
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
  props: ["passedImage" , 'title'],
};
</script>

<style lang="scss" scoped>
.cover {
  // min-height: 450px;
  // max-height: 400px;
  min-height: 50vh;
  overflow: hidden;
  background-attachment: local;
  background-position: 50% 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover !important;
  background: url('~/static/images/contact/contact.png');
  flex-direction: column;
  img {
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 992px) {
      object-fit: cover;
    }
  }
}
.cover-holder{
    
    background: $green-thin no-repeat 50% 50%;
}
</style>
