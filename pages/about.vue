<template>
  <div class="wrapper aboutPage">
    <b-container>
      <section class="large-padding" data-aos="fade-down" data-aos-delay="300">
        <div class="intro-holder">
          <div class="row aligned-together">
            <div class="col-md-6 col-sm-12">
              <h1 class="title">about founders</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores pariatur qui dolores labore a veniam explicabo nisi
                et reprehenderit totam iusto praesentium, in, error cum
                laboriosam magnam quis fugit dignissimos!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita possimus optio blanditiis, laboriosam, ex id velit
                libero deserunt adipisci modi, magni et! Facilis unde cupiditate
                recusandae voluptatem.
              </p>
            </div>
            <div class="col-md-6 col-sm-12">
              <div>
                <b-carousel
                  id="carousel-no-animation"
                  animation
                  img-width="1024"
                  img-height="480"
                >
                  <b-carousel-slide
                    v-for="(x, index) in 10"
                    :key="index"
                    img-src="~/static/images/home/Mask Group 232.jpg"
                    class="img-fluid carousel-image"
                  ></b-carousel-slide>
                </b-carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </b-container>
    <section class="vision-mission large-padding">
      <div class="col-container mission">
        <div class="col" data-aos="fade-left" data-aos-delay="300">
          <div class="col-holder text-holder">
            <h2 class="text-uppercase">VISION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos sapiente tenetur corrupti rerum aut possimus eveniet,
              fugit voluptatem ab. Necessitatibus vero ipsa excepturi corporis.
              Accusamus, quaerat nisi. Vero, optio delectus.
            </p>
          </div>
        </div>

        <div class="col" data-aos="fade-right" data-aos-delay="300">
          <div class="img-holder">
            <img src="~/static/images/about/one.png" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
      <div class="col-container vission">
        <div class="col" data-aos="fade-left" data-aos-delay="300">
          <div class="img-holder">
            <img src="~/static/images/about/two.png" alt="" class="img-fluid" />
          </div>
        </div>
        <div class="col" data-aos="fade-right" data-aos-delay="300">
          <div class="col-holder text-holder">
            <h2 class="text-uppercase">mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos sapiente tenetur corrupti rerum aut possimus eveniet,
              fugit voluptatem ab. Necessitatibus vero ipsa excepturi corporis.
              Accusamus, quaerat nisi. Vero, optio delectus.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="large-padding" data-aos="fade-up" data-aos-delay="300">
      <b-container>
        <div class="intro">
          <p class="text-gray">Founders in 2010 , Founders group</p>
          <h2 class="title">our people</h2>
          <h3><b>lorem ipsum</b></h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
            incidunt quam non nihil necessitatibus rerum perspiciatis accusamus
            temporibus quidem, unde quisquam. Adipisci dolore officia
            praesentium delectus architecto ex minus quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa
            qui fugiat earum possimus quia. Praesentium quo aperiam similique,
            iure ad nisi.
          </p>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.vision-mission {
  .col-container {
    display: table;
    width: 100%;
  }
  .col {
    display: table-cell;
    vertical-align: middle;
    padding: 0;
    width: 50%;
    text-align: center;
    min-height: 300px;
    background: #20303d;
    color: #fff;
    @media (max-width: 992px) {
      width: 100%;
      display: block;
    }
    .col-holder {
      padding: 10%;
    }
  }
}
</style>
