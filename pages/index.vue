<template>
  <div>
    <div class="homePage wrapper">
      <SharedCover data-aos="fade-down" data-aos-delay="300" />
      <b-container>
        <section class="large-padding" data-aos="fade-down" data-aos-delay="300">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <h1 class="title">ABOUT FOUNDERS</h1>
              <p>
                founders Group, founded in 2007 as an offshoot of TIBA for R.E.
                Development; founded by lorem ipsmi in 1997, is one of the
                country’s fastest growing holding companies in the fields of
                Tourism & Real Estate Development, Investment & Contracting, as
                well as Consultancy; with investments of more than US$ 3
                billion.
              </p>
              <p>
                In a recent development in March of 2015, Pioneer bought 60% of
                Roya and in June 2015 two funds joined Roya namely EgyCap
                Investment Ltd. and Castle Property Company Ltd.
              </p>
              <button class="more-btn">More</button>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="image-holder">
                <img
                  src="~/static/images/home/Mask Group 232.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="achivments large-padding" data-aos="fade-left" data-aos-delay="500">
          <div class="w-75">
            <h2 class="title">our achivments</h2>
            <span class="thin-text">we build for the future</span>
            <p>
              Morbi Mattis Ex Non Urna Condimentum, Eget Eleif End Diam
              Molestie. Curabitur Lorem Enim, Maximus Non Nulla Sed, Egestas
              Venenatis Felis.
            </p>
          </div>
          <div class="row justify-content-center align-items-center mt-5 pt-5">
            <div class="col-md-6 col-sm-12">
              <img
                src="~/static/images/home/Mask Group 232.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <h2 class="sub-title">GARDENIA CITY</h2>
              <p>
                Morbi Mattis Ex Non Urna Condimentum, Eget Eleif End Diam
                Molestie. Curabitur Lorem Enim, Maximus Non Nulla Sed, Egestas
                Venenatis Felis.
              </p>
              <div class="d-flex justify-content-start align-items-center">
                <button class="more-btn mx-3">Visit</button>
                <font-awesome-icon
                  icon="fa-regular fa-circle-play"
                  class="fa-3x"
                />
              </div>
            </div>
          </div>
          <div class="row justify-content-center align-items-center mt-5 pt-5">
            <div class="col-md-6 col-sm-12">
              <h2 class="sub-title">GARDENIA CITY</h2>
              <p>
                Morbi Mattis Ex Non Urna Condimentum, Eget Eleif End Diam
                Molestie. Curabitur Lorem Enim, Maximus Non Nulla Sed, Egestas
                Venenatis Felis.
              </p>
              <div class="d-flex justify-content-start align-items-center">
                <button class="more-btn mx-3">Visit</button>
                <font-awesome-icon
                  icon="fa-regular fa-circle-play"
                  class="fa-3x"
                />
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <img
                src="~/static/images/home/Mask Group 232.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </section>
        <section class="facts large-padding" @mouseover="animationEffect" data-aos="fade-right" data-aos-delay="700">
          <img
            src="~/static/images/home/Group_56983.png"
            alt=""
            class="absolute-image"
          />
          <div class="row justify-content-center align-items-center">
            <div class="col-md-6 col-sm-12 hold-side">
              <h3 class="facts-thin-title some">Some</h3>
              <h2 class="title colored-title">Intresting Facts</h2>
              <p class="facts-thin-title">
                Morbi Mattis Ex Non Urna Condimentum, Eget Eleif End Diam
                Molestie. Curabitur Lorem Enim, Maximus Non Nulla Sed, Egestas
                Venenatis Felis.
              </p>
            </div>
            <div class="col-md-6 col-sm-12 counters-holder">
              <div class="row">
                <div class="col-md-4 col-sm-12">
                  <div class="counter" data-target="512">0</div>
                  <p class="colored-title">Happy Clients</p>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="counter" data-target="20">0</div>
                  <p class="colored-title">Finished Projects</p>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="counter" data-target="155">0</div>
                  <p class="colored-title">Working Days</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </b-container>
      <section class="news large-padding" data-aos="fade-up" data-aos-delay="900">
        <b-container>
          <span>Keep Updated</span>
          <h2 class="title">RECENT NEWS</h2>
        </b-container>
        <div class="slider-holder">
          <hooper :infiniteScroll="true" :settings="hooperSettings">
            <slide
              v-for="(x, index) in 10"
              :key="index"
              class="news-slider text-center mx-2"
            >
              <nuxt-link
              :to="`/news/${index}`"
              >
                <img
                  src="~/static/images/home/Mask Group 251.png"
                  alt=""
                  class="img-fluid"
                  draggable="false"
                />
                <div class="slider-data">
                  <h5>Lorem ipsm {{ index }}</h5>
                  <p>
                    Morbi Mattis Ex Non Urna Condimentum, Eget Eleif End Diam…
                    Molestie. Curabitur Lorem Enim, Maximus Non Nulla Sed,
                    Egestas Venenatis Felis.
                  </p>
                </div>
              </nuxt-link>
            </slide>
          </hooper>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "IndexPage",
  mounted() {},
  methods: {
    animationEffect() {
      const counters = document.querySelectorAll(".counter");
      const speed = 5000;

      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const inc = target / speed;
          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    },
  },
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      hooperSettings: {
        centerMode: true,
        autoPlay: true,
        hoverPause: true,
        playSpeed: 3000,
        transition: 1500,
        infiniteScroll: true,
        breakpoints: {
          2400: {
            itemsToShow: 5,
          },
          1800: {
            itemsToShow: 5,
          },
          1500: {
            itemsToShow: 3,
          },
          1100: {
            itemsToShow: 2.5,
          },
          0: {
            itemsToShow: 1.5,
          },
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.homePage {
  .image-holder {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      background: #20303d;
      right: 0;
      top: -2rem;
      width: 80%;
      height: 100%;
      z-index: -1;

      @media (max-width: 992px) {
        top: 0;
      }
    }

    img {
      transition: all 0.3s ease-in-out;
      margin-left: 2rem;

      @media (max-width: 992px) {
        margin-left: 0rem;
        margin-bottom: -2rem;
      }

      &:hover {
        margin-left: 0rem;

        @media (max-width: 992px) {
          margin-left: -2rem;
          margin-bottom: 0rem;
        }
      }
    }
  }

  .achivments {
    img {
      width: 80%;
      object-fit: contain;
      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }

  .facts {
    position: relative;

    .absolute-image {
      position: absolute;
      left: -3rem;
      top: 0;
      display: inline;
      z-index: -1;
      height: 70%;
      width: 19%;
      @media (max-width: 992px) {
        display: none;
      }
    }

    .facts-thin-title {
      color: $green-thin;
      font-weight: 300;
    }

    .colored-title {
      color: $green-thin;
    }

    .counters-holder {
      text-align: center;

      .counter {
        font-size: 3rem;
        // border-bottom: 2px solid #000;
        font-weight: bold;
        position: relative;

        &::after {
          @include absoluteElement;
        }
      }
    }

    .some {
      font-size: 3rem;
    }
  }

  .news {
    @media (max-width: 992px) {
      margin-bottom: 5%;
    }

    .news-slider {
      position: relative;

      &:hover {
        .slider-data {
          opacity: 1;
          bottom: -30%;
          z-index: 9;

          @media (max-width: 992px) {
            bottom: -2%;
            overflow-y: scroll;
          }
        }
      }
    }

    .slider-data {
      position: absolute;
      padding: 20px;
      background: #fff;
      color: #000;
      transition: all 0.3s ease-in-out;
      opacity: 0;
      bottom: -50%;
      width: 90%;
      left: 5%;
      height: 90%;
      box-shadow: 0px 13px 25px #3a3a3a1a;
      word-break: break-all;

      @media (max-width: 992px) {
        overflow-y: scroll;
        bottom: -2%;
      }
    }
  }
}
</style>
