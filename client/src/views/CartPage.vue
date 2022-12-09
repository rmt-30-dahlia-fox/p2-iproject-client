<script>
import { mapActions, mapWritableState, mapState } from "pinia";
import axios from "axios";
import { useCounterStore } from "../stores/counter";
import DigimonCard from "../components/DigimonCard.vue";
import Loader from "../components/Loader.vue";

export default {
  components: {
    DigimonCard,
    Loader,
  },

  methods: {
    ...mapActions(useCounterStore, [
      "fetchCart",
      "addOrderHandler",
      "convertHandler",
    ]),

    async midtrans() {
      try {
        const { data } = await axios.post(
          this.baseUrl + "/midtrans",
          {
            amount: this.totalPriceIdr,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );

        const cb = this.addOrderHandler;
        await window.snap.pay(data.transactionToken, {
          onSuccess() {
            cb();
          },
          onClose() {
            console.log("Need Payment!");
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapWritableState(useCounterStore, [
      "carts",
      "totalPrice",
      "baseUrl",
      "totalPriceIdr",
      "isLoader",
    ]),
  },
  created() {
    this.totalPrice = 0;
    this.totalPriceIdr = 0;
    this.fetchCart();
  },
};
</script>

<template>
  <!-- <Loader v-if="isLoader" /> -->

  <div class="container px-4 px-lg-5 mt-4">
    <h1 class="text-center mb-4">My Shopping Cart</h1>
    <div
      class="row row-cols-1 row-cols-md-3 justify-content-center gx-4 gx-lg-5"
    >
      <DigimonCard v-for="cart in carts" :key="cart.id" :cart="cart" />
    </div>

    <br />
    <br />
    <h3>Total price (USD): {{ totalPrice }}</h3>
    <div class="d-flex">
      <button
        class="btn btn-info"
        type="button"
        @click="convertHandler()"
        style="height: 50px"
      >
        Convert
      </button>
      <Loader v-if="isLoader" />
    </div>

    <br />
    <h3>Total price (IDR):{{ totalPriceIdr }}</h3>
    <button
      class="btn btn-info"
      type="button"
      @click="midtrans"
      style="height: 50px"
    >
      Pay
    </button>
  </div>
</template>
