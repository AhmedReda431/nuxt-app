<template>
  <div class="projects-wrpper wrapper">
    <SharedCover data-aos="fade-down" data-aos-delay="100" />
    <section class="about-projects" >
      <div class="about-projects-holder">
        <b-container>
          <section class="">
            <div class="row">
              <div class="col-md-6 col-sm-12 py-5 my-5" data-aos="fade-left" data-aos-delay="200">
                <h1 class="title">ABOUT PROJECT</h1>
                <p>
                  Morbi Mattis Ex Non Urna Condimentum, Eget Eleif End Diam
                  Molestie. Curabitur Lorem Enim, Maximus Non Nulla Sed, Egestas
                  Venenatis Felis.
                </p>
                <b-button class="more-btn">
                  <span>Download brochur</span>
                  <span><font-awesome-icon icon="fa-solid fa-download" /></span>
                </b-button>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="img-holder py-5 my-5" data-aos-delay="500">
                  <img
                    src="~/static/images/about/one.png"
                    alt=""
                    class="img-fluid"
                    data-aos="fade-left" 
                  />
                </div>
                <!-- edit  -->
              </div>
            </div>
          </section>
        </b-container>
      </div>
    </section>
    <section class="large-padding">
      <ProjectsImagesGallery />
    </section>
    <section>
      <ProjectsContact />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-projects-holder {
  position: relative;
  overflow: hidden;
  &::after {
    position: absolute;
    content: "";
    width: 40%;
    height: 70%;
    background: $green-thin;
    right: 0;
    top: 0;
    z-index: -1;
    @media (max-width: 992px) {
      display: none;
    }
  }
  .img-holder {
    position: relative;

    img {
      position: absolute;
      top: 0%;
      left: 12%;
      transition: all 0.3s ease-in-out;
      &:hover {
        left: 25%;
      }
      @media (max-width: 992px) {
        left: 0%;
      }
    }
  }
}
</style>
