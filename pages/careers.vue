<template>
  <div>
    <div class="wrapper"> 
      <SharedMiniCover :passedImage="image" data-aos="fade-down" data-aos-delay="300" />
      <section class="careers-contact-holder p-5">
        <b-container class="text-center">
          <div class="data-wrapper">
            <h5 class="bold" data-aos="fade-down" data-aos-delay="300">
              To Apply For A Job, Please Fill Out The Form And Submit It.
            </h5>
            <p class="thin-text" data-aos="fade-down" data-aos-delay="300">
              We Will Be Contacted When The Opportunity Becomes Available
            </p>
            <form action="">
              <div class="row">
                <div class="col-md-6 col-sm-12" data-aos="fade-down" data-aos-delay="300">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      class="form-control"
                      v-model="form.name"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-sm-12" data-aos="fade-down" data-aos-delay="300">
                  <div class="form-group">
                    <input
                      type="number"
                      placeholder="Your Phone"
                      class="form-control"
                      v-model="form.phone"
                      min="0"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-sm-12" data-aos="fade-down" data-aos-delay="300">
                  <div class="form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      class="form-control"
                      v-model="form.email"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-sm-12" data-aos="fade-down" data-aos-delay="300">
                  <div class="form-group">
                    <b-form-select
                      v-model="form.position"
                      class="mb-3 form-control"
                    >
                      <b-form-select-option :value="null"
                        >Please select an option</b-form-select-option
                      >
                      <b-form-select-option value="a"
                        >Option A</b-form-select-option
                      >
                      <b-form-select-option value="b"
                        >Option B</b-form-select-option
                      >
                      <b-form-select-option value="c"
                        >Option C</b-form-select-option
                      >
                    </b-form-select>
                  </div>
                </div>
                <div class="col-12 fil-upload-holder" data-aos="fade-down" data-aos-delay="300">
                  <div class="main-wrapper">
                    <div class="upload-main-wrapper">
                      <div class="upload-wrapper">
                        <input
                          type="file"
                          id="upload-file"
                          @change="chooseFile"
                        />
                        <span class="file-upload-text text-underline"
                          > Upload Your Cv Here</span
                        >
                        <div class="file-success-text" v-if="fileSelected">
                          <font-awesome-icon icon="fa-solid fa-circle-check" />
                          <span>Successfully</span>
                        </div>
                      </div>
                      <p id="file-upload-name"></p>
                    </div>
                  </div>
                </div>
              </div>
              <button class="more-btn w-25" data-aos="fade-down" data-aos-delay="300"><b>Submit</b></button>
            </form>
          </div>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "images/careers/careers.png",
      form: {
        name: null,
        email: null,
        phone: null,
        position: null,
        file: null,
      },
      fileSelected:false
    };
  },
  methods: {
    chooseFile(event) {
      this.fileSelected = true
      this.form.file = event.target.files[0];
      var filename = "file selected";
      document.querySelector("#file-upload-name").textContent = filename;
      if (filename != "") {
        setTimeout(function () {
          document.querySelector(".upload-wrapper").classList.add("uploaded");
        }, 600);
        setTimeout(function () {
          document
            .querySelector(".upload-wrapper")
            .classList.remove("uploaded");
          document.querySelector(".upload-wrapper").classList.add("success");
        }, 1600);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input,
select {
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
.data-wrapper{
  padding: 0 5%;
  @media (max-width:992px) {
    padding: 0px;
  }
}
.fil-upload-holder {
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");
  svg:not(:root) {
    overflow: hidden;
  }
  .main-wrapper {
    max-width: 1170px;
    margin: 0 auto;
    text-align: center;
  }
  .upload-main-wrapper {
    width: 100%;
    margin: 0 auto;
  }
  #file-upload-name {
    margin: 4px 0 0 0;
    font-size: 12px;
  }
  .upload-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto 0;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.2s linear all;
    color: #516c6a;
    border: 2px solid #516c6a;
    border-radius: 0;
    padding: 50px;
  }
  .upload-wrapper input[type="file"] {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
    z-index: 1;
  }
  .upload-wrapper > svg {
    width: 50px;
    height: auto;
    cursor: pointer;
  }
  .upload-wrapper.success > svg {
    transform: translateX(-200px);
  }
  .upload-wrapper.uploaded {
    transition: 0.2s linear all;
    width: 60px;
    border-radius: 50%;
    height: 60px;
    text-align: center;
  }
  .upload-wrapper .file-upload-text {
   /* position: absolute;
    left: 80px; */
    opacity: 1;
    visibility: visible;
    transition: 0.2s linear all;
  }
  .upload-wrapper.uploaded .file-upload-text {
    text-indent: -999px;
    margin: 0;
  }
  .file-success-text {
    opacity: 0;
    transition: 0.2s linear all;
    visibility: hidden;
    transform: translateX(200px);
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .file-success-text svg {
    width: 25px;
    height: auto;
  }
  .file-success-text span {
    margin-left: 15px;
  }
  .upload-wrapper.success .file-success-text {
    opacity: 1;
    visibility: visible;
    transform: none;
  }
  .upload-wrapper.success.uploaded .file-success-text {
    opacity: 1;
    visibility: visible;
    transform: none;
  }
  .upload-wrapper.success.uploaded .file-success-text span {
    display: none;
  }
  .upload-wrapper .file-success-text circle {
    stroke-dasharray: 380;
    stroke-dashoffset: 380;
    transition: 1s linear all;
    transition-delay: 1.4s;
  }
  .upload-wrapper.success .file-success-text circle {
    stroke-dashoffset: 0;
  }
  .upload-wrapper .file-success-text polyline {
    stroke-dasharray: 380;
    stroke-dashoffset: 380;
    transition: 1s linear all;
    transition-delay: 2s;
  }
  .upload-wrapper.success .file-success-text polyline {
    stroke-dashoffset: 0;
  }
  .upload-wrapper.success .file-upload-text {
    -webkit-animation-name: bounceOutLeft;
    animation-name: bounceOutLeft;
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes bounceOutLeft {
    20% {
      opacity: 1;
      -webkit-transform: translate3d(20px, 0, 0);
      transform: translate3d(20px, 0, 0);
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  }

  @keyframes bounceOutLeft {
    20% {
      opacity: 1;
      -webkit-transform: translate3d(20px, 0, 0);
      transform: translate3d(20px, 0, 0);
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  }
}
</style>
