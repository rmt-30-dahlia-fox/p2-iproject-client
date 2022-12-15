<script>
import NavbarVue from "../components/Navbar.vue";
import CaloriesNeed from "../components/CaloriesNeed.vue";
import BMRVue from "../components/BMR.vue";
import BMIVue from "../components/BMI.vue";

export default {
  data() {
    return {
      whatPage: "",
    };
  },
  components: {
    NavbarVue,
    CaloriesNeed,
    BMRVue,
    BMIVue,
  },

  created() {
    if (localStorage.access_token) this.isLogin = true;
  },
};
</script>

<template>
  <NavbarVue />
  <!-- content -->
  <CaloriesNeed v-if="$route.params.feature == 'calories_need'" />
  <BMRVue v-if="$route.params.feature == 'bmr'" />
  <BMIVue v-if="$route.params.feature == 'bmi'" />
</template>
