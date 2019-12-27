<template>
  <div class="wrapper" id="app">
    <CardForm
      :form-data="formData"
      @input-card-number="updateCardNumber"
      @input-card-name="updateCardName"
      @input-card-month="updateCardMonth"
      @input-card-year="updateCardYear"
      @input-card-cvv="updateCardCvv"
    />
  </div>
</template>

<script>
import CardForm from "@/components/Payment/CardForm";
export default {
  name: "app",
  components: {
    CardForm
  },
  data() {
    return {
      formData: {
        cardName: "",
        cardNumber: "",
        cardMonth: "",
        cardYear: "",
        cardCvv: ""
      }
    };
  },
  methods: {
    updateCardNumber() {},
    updateCardName() {},
    updateCardMonth() {},
    updateCardYear() {},
    updateCardCvv() {}
  }
};
</script>

<style lang="scss">
@import "@/assets/payment/style.scss";
</style>