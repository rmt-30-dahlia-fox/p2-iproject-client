<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";

export default {
  data() {
    return {
      params: { height: "", weight: "", gender: "", age: "", activity: "" },
      info: false,
      result: false,
    };
  },
  computed: {
    ...mapState(useMainStore, ["calNeedResult"]),
    ...mapWritableState(useMainStore, ["pageTitle"]),
  },
  methods: {
    ...mapActions(useMainStore, ["Calc_CaloriesNeed"]),
    infobutton() {
      if (this.info) {
        this.info = false;
      } else if (this.result) {
        this.result = false;
        this.info = true;
      } else {
        this.result = false;
        this.info = true;
      }
    },
    calculate() {
      console.log("calculate() ke trigger");
      this.Calc_CaloriesNeed(this.params);
      this.info = false;
      this.result = true;
    },
  },
  created() {
    if (this.$route.params.feature == "calories_need") {
      this.pageTitle = "Calories Need Calculator";
    }
  },
};
</script>

<template>
  <div class="position-relative pt-5">
    <div class="position-absolute top-50 start-50 translate-middle">
      <h3 class="mt-5">{{ pageTitle }}</h3>
    </div>
  </div>
  <div class="bg-dark m-5 p-4 rounded">
    <div class="row">
      <div class="col">
        <button class="btn btn-info" @click="infobutton">info</button>
        <div class="text-light ps-2 pt-2" style="font-size: 14px" v-if="info">
          <p>
            The Calorie Calculator can be used to estimate the number of
            calories a person needs to consume each day. This calculator can
            also provide some simple guidelines for gaining or losing weight.
          </p>
          <p>
            This Calorie Calculator is based on several equations, and the
            results of the calculator are based on an estimated average. The
            Harris-Benedict Equation was one of the earliest equations used to
            calculate basal metabolic rate (BMR), which is the amount of energy
            expended per day at rest. It was revised in 1984 to be more accurate
            and was used up until 1990, when the Mifflin-St Jeor Equation was
            introduced. The Mifflin-St Jeor Equation also calculates BMR, and
            has been shown to be more accurate than the revised Harris-Benedict
            Equation. The Katch-McArdle Formula is slightly different in that it
            calculates resting daily energy expenditure (RDEE), which takes lean
            body mass into account, something that neither the Mifflin-St Jeor
            nor the Harris-Benedict Equation do. Of these equations, the
            Mifflin-St Jeor Equation is considered the most accurate equation
            for calculating BMR with the exception that the Katch-McArdle
            Formula can be more accurate for people who are leaner and know
            their body fat percentage.
          </p>
        </div>
        <div class="position relative" v-if="result">
          <h5
            class="text-light position-relative top-0 start-50 translate-middle-y"
          >
            Your Result:
          </h5>
          <pre></pre>
          <table class="text-light">
            <tr>
              <td>Daily Calories need</td>
              <td>:</td>
              <td class="ps-3">
                <strong class="fs-3">{{ calNeedResult.balance }}</strong>
                Calories/day
              </td>
            </tr>
            <tr>
              <td>Mild Weight Loss</td>
              <td>:</td>
              <td class="ps-3">
                <strong class="fs-3">{{ calNeedResult.mildWeightLoss }}</strong>
                Calories/day
              </td>
            </tr>
            <tr>
              <td>Heavy Weight Loss</td>
              <td>:</td>
              <td class="ps-3">
                <strong class="fs-3">{{
                  calNeedResult.heavyWeightLoss
                }}</strong>
                Calories/day
              </td>
            </tr>
            <tr>
              <td>Mild Weight Gain</td>
              <td>:</td>
              <td class="ps-3">
                <strong class="fs-3">{{ calNeedResult.mildWeightGain }}</strong>
                Calories/day
              </td>
            </tr>
            <tr>
              <td>Heavy Weight Gain</td>
              <td>:</td>
              <td class="ps-3">
                <strong class="fs-3">{{
                  calNeedResult.heavyWeightGain
                }}</strong>
                Calories/day
              </td>
            </tr>
          </table>
          <!-- <ul class="text-light">
            <li>Daily Calories need:</li>
            <li></li>
            <li></li>
            <li></li>
          </ul> -->
        </div>
      </div>
      <div class="col">
        <div class="ps-4">
          <form @submit.prevent="calculate()" class="position-relative">
            <!-- Age & Sex -->
            <div class="row w-100">
              <div class="col">
                <div class="mb-3">
                  <label class="form-label text-light">Age</label>
                  <div class="input-group mb-2">
                    <input
                      v-model="params.age"
                      type="number"
                      class="form-control"
                      aria-describedby="emailHelp"
                    />
                    <div class="input-group-prepend">
                      <div class="input-group-text">y.o.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <div class="form-group">
                    <label class="form-label text-light">Gender</label>
                    <select v-model="params.gender" class="form-select">
                      <option selected disabled>-- Choose one --</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- Height & Weight -->
            <div class="row w-100">
              <div class="col">
                <div class="mb-3">
                  <label class="form-label text-light">Height</label>
                  <div class="input-group mb-2">
                    <input
                      v-model="params.height"
                      type="number"
                      class="form-control"
                      aria-describedby="emailHelp"
                    />
                    <div class="input-group-prepend">
                      <div class="input-group-text">cm</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label class="form-label text-light">Weight</label>
                  <div class="input-group mb-2">
                    <input
                      v-model="params.weight"
                      type="number"
                      class="form-control"
                      aria-describedby="emailHelp"
                    />
                    <div class="input-group-prepend">
                      <div class="input-group-text">kg</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Activity -->
            <div class="row w-100">
              <div class="col">
                <div class="mb-3">
                  <div class="form-group">
                    <label class="form-label text-light">Weekly Exercise</label>
                    <select v-model="params.activity" class="form-select">
                      <option selected disabled>-- Choose one --</option>
                      <option value="sedentary">
                        Sedentary: Have a little or no exercise at all
                      </option>
                      <option value="light">
                        Light: Exercise 1-3 times in a week
                      </option>
                      <option value="moderate">
                        Moderate: Exercise 4-5 times in a week
                      </option>
                      <option value="active">
                        Active: Actively doing daily exercise
                      </option>
                      <option value="extreme">
                        Extreme: Actively doing intense exercise 6-7 times a
                        week
                      </option>
                    </select>
                    <ul style="font-size: 14px">
                      <li class="text-light">
                        <strong>Exercise:</strong> 15-30 minutes of elevated
                        heart rate activity.
                      </li>
                      <li class="text-light">
                        <strong>Intense exercise:</strong> 45-120 minutes of
                        elevated heart rate activity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- submit button -->
            <div class="row w-100">
              <div class="col">
                <div class="mb3">
                  <button type="submit" class="btn btn-secondary w-100 my-3">
                    Calculate
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
