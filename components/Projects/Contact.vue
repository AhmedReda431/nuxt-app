<template>
  <div>
    <div class="vision-mission">
      <div class="col-container vission">
        <div class="col" data-aos="fade-left" data-aos-delay="300">
          <div class="img-holder">
            <img
              src="~/static/images/projects/Group 57922.png"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
        <div class="col" data-aos="fade-left" data-aos-delay="800">
          <div class="col-holder text-holder">
            <div class="text-center">
              <h2 class="text-uppercase">GET IN TOUCH</h2>
              <p>
                Our Team Is Happy To Answer Your Sales Questions, Fill Out The
                Form And We’ll Be In Touch As Soon As Possible.
              </p>
            </div>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Full Name">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Your Email">
                </div>
                <div class="form-group">
                    <input type="number" min="0" class="form-control" placeholder="Your Phone">
                </div>
                <div class="form-group">
                    <textarea class="form-control" name="" id="" cols="30" rows="5" placeholder="Write your message ..."></textarea>
                </div>
                <button class="btn-block">Submit</button>
            </form> 
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
      padding: 10% 10% 3% 10%;
    }
  }
  input , textarea{
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 0;
    border-bottom: 2px solid #fff !important;
    color: #fff;
    resize: none;

  }
  button{
    padding: 15px;
    border-radius: 5px;
    font-size: 18px;
    color: #20303d;
  }
}
</style>
