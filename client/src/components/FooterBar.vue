<script>
import axios from "axios";
import Swal from "sweetalert2";
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
export default {
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler", "successHandler"]),
    async donate() {
      try {
        const errorHandler = this.errorHandler;
        const access_token = localStorage.access_token;
        const { value: amount } = await Swal.fire({
          title: "Enter amount you want to donate",
          input: "number",
          inputLabel: "Your amount",
          showCancelButton: true,
          icon: "question",
          inputValidator: (value) => {
            if (!value) {
              return "You need to write something!";
            }
          },
        });
        if (!amount) {
          throw { message: "Canceled" };
        }
        const { data } = await axios.post(
          this.baseUrl + "/payment",
          {
            amount,
          },
          {
            headers: {
              access_token,
            },
          }
        );
        window.snap.pay(data.transactionToken, {
          onSuccess() {
            Swal.fire({
              icon: "success",
              title: "Success!!",
              text: "Thanks for your donation",
            });
          },
          onClose() {
            errorHandler("You closed the popup without finishing the payment");
          },
        });
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401)
            return this.errorHandler("Login require");
        }
        this.errorHandler(error.message);
      }
    },
  },
};
</script>

<template>
  <footer>
    <div>
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
      />
    </div>
    <div></div>
    <div>
      <button @click="donate" style="color: white; background-color: aqua;">
        Donate
      </button>
    </div>
  </footer>
</template>

<style>
footer img {
  width: 100px;
}
</style>
