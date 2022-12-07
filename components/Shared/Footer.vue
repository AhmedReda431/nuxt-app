<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <!-- end col-10 -->
          <div class="col-md-3 col-sm-12">
            <div class="work-with-us mb-5">
              <nuxt-link to="/">
                <img src="@/static/images/fonders-logo.png" alt="logo" />
              </nuxt-link>
            </div>

            <p>
              <font-awesome-icon icon="fa-solid fa-phone" class="icon" /> <span><b>+ (202) 16466</b></span>
            </p>
            <p class="text-gray">
              Follow Us
            </p>

            <div class="social">


              <span class="icon">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </span>

              <span class="mx-3 icon">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </span>

              <span class="mx-3 icon">
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
              </span>

              <span class="mx-3 icon">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </span>
            </div>

          </div>
          <!-- end col-4 -->
          <div class="col-md-3 col-sm-12">
            <address>
              <small>E-Mail</small>
              <p>hello@royadevelopments.com</p>
            </address>
            <address>
              <small>Address</small>
              <p>66 Ahmed Fakhry St.,</p>
              <p>Mohandseen Buildings,</p>
              <p>Cairo, Egypt</p>
            </address>
          </div>
          <!-- end col-4 -->
          <div class="col-md-3 col-sm-12">
            <ul class="nav-items footer-links">
              <li>
                <nuxt-link to="/" class="text-gray">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about" class="text-gray">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/projects" class="text-gray">Projects</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/careers" class="text-gray">Media center</nuxt-link>
              </li>
            </ul>
          </div>
          <!-- end col-4 -->
          <!-- <div class="col-12"></div> -->
          <!-- end col-12 -->
          <div class="col-md-3 col-sm-12 form-holder">

            <div class="form-data">
              <p class="text-thin">Subscribe to our Newsletter Sign up for our Latest news & articles</p>
              <div class="email">
                <form class="d-flex">
                  <div class="form-group d-flex w-100">
                    <input class="form-control emil-input" type="email" placeholder="enter your mail" />
                    <button role="button">submit</button>
                  </div>
                </form>
              </div>
            </div>

            <!-- end footer-bottom -->
          </div>
          <!-- end col-12 -->
        </div>
        <div class="my-5">
          <hr>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <p class="text-gray">© 2021 Founders Developments | All Rights Reseved</p>
          </div>
          <div class="col-md-6 col-sm-12">
            <ul class="nav-items d-flex justify-content-between align-items-center p-0"> 
              <li>
                <nuxt-link to="/careers" class="text-gray">Careers</nuxt-link>
              </li>
              <li class="mx-2">
                <nuxt-link to="/about" class="text-gray">Sitemap</nuxt-link>
              </li>
              <li class="mx-2">
                <nuxt-link to="/projects" class="text-gray">Privacy Policy</nuxt-link>
              </li>
              <li>
                <a  class="text-gray">Made With By Fabrica Dev</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- new change -->
        <!-- end row -->
      </div>
      <!-- end container -->
    </footer>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
footer {
  background: url('~/static/images/footer.jpg') no-repeat 50% -3%;
  padding: 5% 0 2%;

  .form-holder {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    .emil-input {
      background: #D2EBEA;
      color: #333;
      padding: 26px 10px;
      border: none;
      box-shadow: none;
      outline: none;
    }

    button {
      background: $main-color;
      color: #fff;
      border: none;
      outline: none;
      box-shadow: none;
      border-radius: 0 5px 5px 0;
      font-size: 14px;
      padding: 10px;
    }
  }
}

.footer-links li {
  line-height: 45px !important;
}
.footer-links{
  @media(max-width:992px) {
    padding: 0 !important;
  }
}

.icon {
  color: $social-color;
}
</style>
