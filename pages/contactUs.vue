<template>
  <div>
    <div class="wrapper">
      <SharedSolidMiniCover data-aos="fade-down" data-aos-delay="100" />
      <b-container>
        <section class="contact-info p-5">
          <div class="row">
            <div class="col-md-5 col-sm-12">
              <div class="phone my-4 info" >
                <div class="row">
                  <div class="col-1" data-aos="fade-left" data-aos-delay="200">
                    <span class="icon blue-a"
                      ><font-awesome-icon icon="fa-solid fa-phone"
                    /></span>
                  </div>
                  <div class="col-10" data-aos="fade-left" data-aos-delay="250"><span>+ (202) 22684500</span></div>
                </div>
              </div>
              <div class="location my-4 info" >
                <div class="row">
                  <div class="col-1" data-aos="fade-left" data-aos-delay="300">
                    <span class="icon blue-a"
                      ><font-awesome-icon icon="fa-solid fa-location-dot"
                    /></span>
                  </div>
                  <div class="col-10" data-aos="fade-left" data-aos-delay="350">
                    <span
                      >1150/3 Lerem Ipsum Danul St., Mohansen Buildings, Cairo,
                      Egypt</span
                    >
                  </div>
                </div>
              </div>
              <div class="email my-4 info" >
                <div class="row">
                  <div class="col-1" data-aos="fade-left" data-aos-delay="400">
                    <span class="icon blue-a"
                      ><font-awesome-icon icon="fa-solid fa-envelope"
                    /></span>
                  </div>
                  <div class="col-10" data-aos="fade-left" data-aos-delay="450"><span>Info@Example.Com</span></div>
                </div>
              </div>
              <div class="support my-4 info" >
                <div class="row">
                  <div class="col-1" data-aos="fade-left" data-aos-delay="500">
                    <span class="icon blue-a"
                      ><font-awesome-icon icon="fa-solid fa-headphones"
                    /></span>
                  </div>
                  <div class="col-10" data-aos="fade-left" data-aos-delay="550">
                    <span>16466 <span class="text-thin">(Hotline)</span></span>
                  </div>
                </div>
              </div>
              <div class="social mt-3" data-aos="fade-left" data-aos-delay="600">
                <span class="mx-3 info">
                  <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </span>
                <span class="mx-3 info">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </span>

                <span class="mx-3 info">
                  <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </span>
                <span class="mx-3 info">
                  <font-awesome-icon icon="fa-brands fa-instagram" />
                </span>
              </div>
            </div>
            <div class="col-md-7 col-sm-12">
              <form>
                <div class="row">
                  <div class="col-md-6 col-sm-12" data-aos="zoom-in-left" data-aos-delay="650">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Full Name"
                        class="form-control"
                        v-model="form.name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12" data-aos="zoom-in-left" data-aos-delay="660">
                    <div class="form-group">
                      <input
                        type="number"
                        placeholder="Your Phone"
                        class="form-control"
                        min="0"
                        v-model="form.phone"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12" data-aos="zoom-in-left" data-aos-delay="670">
                    <div class="form-group">
                      <input
                        type="email"
                        placeholder="Your Email"
                        class="form-control"
                        v-model="form.email"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12" data-aos="zoom-in-left" data-aos-delay="680">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        class="form-control"
                        v-model="form.subject"
                      />
                    </div>
                  </div>
                  <div class="col-12" data-aos="zoom-in-left" data-aos-delay="690">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        placeholder="Write your message ..."
                        v-model="form.message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12 text-center" data-aos="zoom-in" data-aos-delay="600">
                    <button class="more-btn"><b>Send Message</b></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section class="large-padding" data-aos="zoom-in-left" data-aos-delay="300" data-aos-offset="300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3454.7180599430917!2d31.449208000000002!3d30.016251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12c9bc30494efc89!2sFabrica%20Creative%20Studio!5e0!3m2!1sen!2seg!4v1670155690380!5m2!1sen!2seg"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        subject: null,
        message: null,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.info {
  .icon {
    margin: 0 10px;
  }
}
.social {
  .info {
    color: #07a8ca;
  }
}
input,
textarea {
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  border-radius: 0;
  border-bottom: 2px solid #fff !important;
  color: #fff;
  resize: none;
  border-bottom: 2px solid #516c6a !important;
  color: #516c6a;
  margin: 20px 0;
  &:focus {
    box-shadow: none;
  }
}
iframe{
  width: 100%;
}
</style>
