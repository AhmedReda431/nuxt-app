<template>
  <div class="single-new">
    <div class="wrapper"> 
      <SharedSolidMiniCover :title="'RECENT NEWS'" data-aos="fade-down" data-aos-delay="300" />
      <section class="large-padding">
        <div class="container">
          <hooper  :settings="hooperSettings">
            <slide v-for="(x, index) in 5" :key="index">
              <div class="row">
                <div class="col-md-6 col-sm-12" data-aos="fade-left" data-aos-delay="300">
                  <h2><b>SINGLE NEWS HEADLINE {{index}}</b></h2>
                  <p class="text-thin">22 February, 2021</p>
                  <ul class="list-styled">
                    <li class="my-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed aliquam felis nibh, id mattis dolor pellentesque non.
                      Nunc eget nisi massa. Donec maximus ex sed placerat
                      porttitor. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Sed aliquam felis nibh, id mattis dolor
                      pellentesque non. Nunc eget nisi massa. Donec maximus ex
                      sed placerat porttitor. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Sed aliquam felis nibh, id
                      mattis dolor pellentesque non. Nunc eget nisi massa. Donec
                      maximus ex sed placerat porttitor.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed aliquam felis nibh, id mattis dolor pellentesque non.
                      Nunc eget nisi massa. Donec maximus ex sed placerat
                      porttitor. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Sed aliquam felis nibh, id mattis dolor
                      pellentesque non. Nunc eget nisi massa. Donec maximus ex
                      sed placerat porttitor. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Sed aliquam felis nibh, id
                      mattis dolor pellentesque non. Nunc eget nisi massa. Donec
                      maximus ex sed placerat porttitor.
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 col-sm-12" data-aos="fade-right" data-aos-delay="300">
                  <img
                    src="~/static/images/projects/Group 57922.png"
                    alt="new-image"
                    class="img-fluid"
                  />
                </div>
              </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
          </hooper>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        centerMode: true,
        autoPlay: false,
        hoverPause: true,
        playSpeed: 3000,
        transition: 1500,
        infiniteScroll: false,
        itemsToShow: 1
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
