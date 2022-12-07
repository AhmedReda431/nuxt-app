<template>
  <div class="chatModal text-center">
    <b-button id="show-btn" @click="showModal"
      ><font-awesome-icon icon="fa-solid fa-phone"
    /></b-button>

    <b-modal
      ref="my-modal"
      class="text-center"
      hide-footer
      centered
      title="Send Us A Message"
    >

      <form >
        <div class="form-group">
          <input
            type="text"
            placeholder="Full Name"
            class="form-control"
            v-model="form.name"
          />
        </div>
        <div class="form-group">
            <input
              type="email"
              placeholder="Your Email"
              class="form-control"
              v-model="form.email"
            />
          </div>
        <div class="form-group">
          <input
            type="number"
            placeholder="Your Phone"
            class="form-control"
            min="0"
            v-model="form.phone"
          />
        </div>
        

        <div class="form-group">
          <textarea
            class="form-control"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Write your message ..."
            v-model="form.message"
          ></textarea>
        </div>

        <button class="more-btn btn-block w-100 submit-btn"><b>Submit</b></button>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        message: null,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
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
  border-bottom: 2px solid #fff !important;
  color: #fff;
  margin: 20px 0;
  &:focus {
    box-shadow: none;
    background: transparent;
    color: #fff;
  }
}
.submit-btn{
    background: #fff;
    color: #516C6A;
    border-radius: 5px;
    padding: 10px;
    font-size: 18px;
}


</style>
