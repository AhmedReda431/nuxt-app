<template>
  <div>
    <div class="container-a4 text-center">
      <h2 class="h1" data-aos="fade-down">PHOTO GALLERY</h2>
      <p data-aos="fade-down">Lorem Ipsum Dolor Sit Amet, Conse Tetur Elit</p>
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-md-3 col-sm-12 mx-0 p-1"
            v-for="(x, index) in 20"
            :key="index"
          >
            <div class="data-holder" data-aos="fade-left" :data-aos-delay="`${(index +1) * 100}`">
              <div class="img-holder">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/103389/chaps_1x.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="caption">
                <div class="blur">
                  <span
                    ><font-awesome-icon
                      icon="fa-solid fa-maximize"
                      class="fa-3x"
                  /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* CAPTION 4 */
.data-holder {
  overflow: hidden;
  position: relative;
  transition: all 1s ease-in-out;
  &:hover {
    .blur {
      opacity: 1;
      width: 100%;
      height: 100%;
      inset: 0;
    }
  }
}
.blur {
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0%;
  height: 0%;
  color: #fff;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
</style>
