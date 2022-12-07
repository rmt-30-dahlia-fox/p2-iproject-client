<script>
import { mapActions } from "pinia";
import { useMainStore } from "../stores/main";

// import submitButton from "./button-add-form.vue";
export default {
  data() {
    return {
      formLogin: { email: "", password: "" },
      formRegister: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
      login: true,
      register: false,
    };
  },
  methods: {
    ...mapActions(useMainStore, ["userLogin", "userRegister"]),
    // callback(response) {
    //   const credential = response.credential;
    //   this.$emit("loginGoogle", credential);
    //   // console.log(response.credential)
    // },
    changeForm() {
      if (this.login) {
        this.login = false;
        this.register = true;
      } else {
        this.login = true;
        this.register = false;
      }
    },
  },
};
</script>

<template>
  <div class="container d-flex" style="height: 100vh; align-items: center">
    <div class="row">
      <div class="col-lg d-flex" style="align-items: center">
        <div>
          <img src="../assets/My_diet_logo.png" style="max-width: 500px" />
          <h6 class="mt-5 w-75 text-center fw-bold text-light ps-4">
            Physical fitness is the first requisite of happiness, also Let food
            be thy medicine and medicine be thy food.
          </h6>
        </div>
      </div>
      <div class="col text-light">
        <div class="row w-75 mb-3">
          <div class="col ps-4">
            <h5 class="text-center">Choose your login preference</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="row section-login" style="width: 500px">
              <ul
                style="padding-left: 13px"
                class="nav nav-pills nav-justified mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    :class="{ active: login }"
                    @click="changeForm"
                    id="pills-login-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-login"
                    type="button"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="true"
                  >
                    <strong>Login</strong>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    :class="{ active: register }"
                    @click="changeForm"
                    id="pills-register-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-register"
                    type="button"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected="false"
                  >
                    <strong>Register</strong>
                  </button>
                </li>
              </ul>
              <div class="tab-content">
                <div
                  class="tab-pane fade"
                  :class="{ 'show active': login }"
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="tab-login"
                  v-if="login"
                >
                  <form @submit.prevent="userLogin(formLogin)">
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <label class="form-label">Email</label>
                      <input
                        type="email"
                        v-model="formLogin.email"
                        class="form-control"
                      />
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <label class="form-label">Password</label>
                      <input
                        type="password"
                        v-model="formLogin.password"
                        class="form-control"
                      />
                    </div>

                    <!-- GOOGLE LOGIN OAUTH -->
                    <!-- <p class="text-center">or:</p>

                    <div class="text-center mb-3">
                      <GoogleLogin :callback="callback" />
                    </div> -->

                    <!-- Submit button -->
                    <!-- <submitButton show="Sign in" class="btn-block mb-4" /> -->

                    <button type="submit" class="btn btn-primary w-100">
                      Sign in
                    </button>

                    <!-- Register buttons -->
                    <div class="text-center mt-3">
                      <p>
                        Not a member?
                        <a
                          @click.prevent="changeForm"
                          style="font-color: black; cursor: pointer"
                          ><strong> Register</strong></a
                        >
                      </p>
                    </div>
                  </form>
                </div>

                <div
                  class="tab-pane fade"
                  :class="{ 'show active': register }"
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="tab-register"
                  v-if="register"
                >
                  <form @submit.prevent="userRegister(formRegister)">
                    <!-- Username input -->
                    <div class="form-outline mb-4">
                      <label class="">Username</label>
                      <input
                        type="text"
                        v-model="formRegister.username"
                        class="form-control"
                      />
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <label class="form-label">Email</label>
                      <input
                        type="email"
                        v-model="formRegister.email"
                        class="form-control"
                      />
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <label class="form-label">Password</label>
                      <input
                        type="password"
                        v-model="formRegister.password"
                        class="form-control"
                      />
                    </div>

                    <!-- Phone Num input -->
                    <div class="form-outline mb-4">
                      <label class="form-label">Phone Number</label>
                      <input
                        type="number"
                        v-model="formRegister.phoneNumber"
                        class="form-control"
                      />
                    </div>

                    <!-- Address input -->
                    <div class="form-outline mb-4">
                      <label class="form-label">Address</label>
                      <input
                        type="text"
                        v-model="formRegister.address"
                        class="form-control"
                      />
                    </div>

                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary w-100">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <section class="ms-sm-auto col-lg-10 px-md-4 mt-xl-5 pt-xl-5" >
		<div class="col-12 col-lg-6">
			
		</div>
	</section> -->
</template>
