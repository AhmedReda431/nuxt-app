<template>
  <div :class="$i18n.locale">
    <SharedNavNavbar />
    <transition name="slide-fade">
      <Nuxt class="hold-view" />
    </transition>
    <SharedContactUsModal />
    <div class="scrollToTop" v-show="scrolled">
      <b-button variant="outline-info backToTop" @click="backToTop"
        ><font-awesome-icon icon="fa-solid fa-up-long"
      /></b-button>
    </div>
    <SharedFooter />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
        {
          icon: "mdi-car",
          title: "About",
          to: "/about",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      scrolled: false,
    };
  },
  head() {
    return {
      link: [{ rel: "icon", type: "image/x-icon", href: "/ico/favicon.png" }],
    };
  },
  meta: {
    scrollPos: {
      x: 0,
      y: 0,
    },
  },
  watch: {
    $route() {
      if (process.client) {
        window.scrollTo(0, 0);
      }
    },
  },
  methods: {
    backToTop() {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
      this.scrolled = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.top-btn {
  position: fixed;
  right: 20px;
  bottom: 50px;
  padding: 0;
  background: transparent;
  color: #fff;
  border: none;
  margin: 0;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border-radius: 50%;
  border: 1px solid #d4d5d8;
}
.view {
  min-height: 50vh;
}
.hold-view {
  margin-top: 85px;
}
.backToTop {
  padding: 15px;
  position: fixed;
  right: 80px;
  bottom: 50px;
  z-index: 99;
}
</style>
