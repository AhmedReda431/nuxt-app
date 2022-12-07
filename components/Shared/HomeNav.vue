<template>
  <div>
    <!-- end page-transition -->
    <div class="site-navigation">
      <ul>
        <li>
          <b>
            <nuxt-link :to="localePath('/')" :data-text="$t('nav.home')">{{
            $t("nav.home")
            }}</nuxt-link>
          </b>
        </li>
        <li>
          <b>
            <nuxt-link :to="localePath('/about')" :data-text="$t('nav.about')">{{ $t("nav.about") }}</nuxt-link>
          </b>
        </li>
        <li class="dropdown">
          <span>+</span><b>
            <nuxt-link :to="localePath('/projects')" :data-text="$t('nav.projects')">{{ $t("nav.projects") }}
            </nuxt-link>
          </b>
          <ul class="subLinks">
            <li v-for="(project , index) in projects" :key="index">
              <nuxt-link :to="
                localePath({
                  name: project.name,
                  params: { slug: project.id },
                })
              ">Telal Sokhna
              </nuxt-link>
            </li>
          </ul>
        </li>
        <!-- <li class="dropdown">
            <span>+</span
            ><b>
              <nuxt-link
                data-text="Media Center"
                :to="localePath('/mediaCenter')"
                >{{ $t("media center") }}</nuxt-link
              >
            </b>
            <ul>
              <li>
                <nuxt-link :to="localePath('/')">Press Releases</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/')"
                  >Construction Updates</nuxt-link
                >
              </li>
              <li><nuxt-link :to="localePath('/')">Gallery</nuxt-link></li>
              <li><nuxt-link :to="localePath('/')">Events</nuxt-link></li>
            </ul>
          </li> -->
        <!-- <li>
          <b
            ><nuxt-link
              :to="localePath('/partners')"
              :data-text="$t('nav.Partners')"
              >{{ $t("nav.Partners") }}</nuxt-link
            ></b
          >
        </li> -->
        <!-- <li>
            <b
              ><nuxt-link :to="localePath('/mediaCenter')" data-text="CSR"
                >CSR</nuxt-link
              ></b
            >
          </li>
          <li>
            <b
              ><nuxt-link
                :to="localePath('/mediaCenter')"
                :data-text="$t('nav.Events')"
                >{{ $t("nav.Events") }}</nuxt-link
              ></b
            >
          </li> -->
        <li>
          <b>
            <nuxt-link :to="localePath('/careers')" data-text="Careers">Careers</nuxt-link>
          </b>
        </li>
        <li>
          <b>
            <nuxt-link :to="localePath('/contactUs')" data-text="Contact us">Contact us</nuxt-link>
          </b>
        </li>
      </ul>
    </div>
    <!-- edn site-navigation -->
    <nav class="navbar">
      <div class="logo">
        <nuxt-link to="/"><img src="images/logo.png" srcset="images/logo@2x.png" alt="Image" />
        </nuxt-link>
      </div>
      <!-- end logo -->
      <ul class="languages">
        <li>
          <!-- <a class="ara" href="#" data-text="English">العربية</a> -->
          <!-- <nuxt-link
            :to="switchLocalePath('en')"
            class="en"
            data-text="English"
            v-if="$i18n.locale == 'ar'"
            >العربية</nuxt-link
          >
          <nuxt-link
            :to="switchLocalePath('ar')"
            class="ar"
            data-text="العربية"
            v-if="$i18n.locale == 'en'"
            >English</nuxt-link
          > -->
          <SharedThemeButton />
        </li>
        <li>
          <a href="#" class="ara" tel="+20216466" data-text="Call Us">16466 <i class="fa fa-phone"
              aria-hidden="true"></i></a>
        </li>
      </ul>
      <!-- end languages -->

      <span class="menu-text mx-2"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
      <span class="menu-text mx-2"><i class="fa fa-instagram" aria-hidden="true"></i>
      </span>
      <span class="menu-text mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span>
      <span class="menu-text mx-2"><i class="fa fa-facebook" aria-hidden="true"></i>
      </span>
      <!-- <span class="menu-text ml-4">{{ $t("nav.menu") }}</span> -->
      <div class="sandwich-menu">
        <div class="sandwich" @click="toggleNav">
          <div class="sand">
            <span class="first-span"></span> <span class="second-span"></span>
          </div>
          <!-- end sand -->
          <div class="closed">
            <span class="first-span"></span> <span class="second-span"></span>
          </div>
          <!-- end closed -->
        </div>
        <!-- end sandwich -->
      </div>
      <!-- end sandwich-menu -->
    </nav>
    <!-- end navbar -->
  </div>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      let body = document.body;
      if (body.classList.contains("display-nav")) {
        document.querySelector(
          ".sandwich .sand span:nth-child(1)"
        ).style.transitionDelay = "0.6s";
        document.querySelector(
          ".sandwich .sand span:nth-child(2)"
        ).style.transitionDelay = "0.75s";
        window.setTimeout(() => {
          document.querySelector(
            ".sandwich .sand span:nth-child(1)"
          ).style.transitionDelay = "0s";
          document.querySelector(
            ".sandwich .sand span:nth-child(2)"
          ).style.transitionDelay = "0s";
        }, 1000);
      } else {
        document.querySelector(
          ".sandwich .sand span:nth-child(1)"
        ).style.transitionDelay = "0s";
        document.querySelector(
          ".sandwich .sand span:nth-child(2)"
        ).style.transitionDelay = "0.15s";
      }
      body.classList.toggle("display-nav");
    },
    getProjectsData() {
      this.$store.dispatch('getProjectsData')
    },
    getContacts(){
      this.$store.dispatch('getContacts')
    }
  },
  computed: {
    projects() {
      return this.$store.state.allProjects
    },
    contactsData(){
      return this.$store.state.contacts
    }
  },
  mounted(){
    this.getContacts()
  }
};
</script>

<style lang="scss" scoped>
.dropdown .subLinks {
  li {
    a {
      font-size: 27px;
    }
  }
}
</style>
