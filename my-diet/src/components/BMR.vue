<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";

export default {
  data() {
    return {
      params: { height: "", weight: "", gender: "", age: "" },
      info: false,
      result: false,
    };
  },
  computed: {
    ...mapState(useMainStore, ["bmrResult"]),
    ...mapWritableState(useMainStore, ["pageTitle"]),
  },
  methods: {
    ...mapActions(useMainStore, ["Calc_BMR"]),
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
      this.Calc_BMR(this.params);
      this.info = false;
      this.result = true;
    },
  },
  created() {
    if (this.$route.params.feature == "bmr") {
      this.pageTitle = "Basal Metabolic Rate";
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
            The Basal Metabolic Rate (BMR) Calculator estimates your basal
            metabolic rate—the amount of energy expended while at rest in a
            neutrally temperate environment, and in a post-absorptive state
            (meaning that the digestive system is inactive, which requires about
            12 hours of fasting).
          </p>
          <p>
            The basal metabolic rate (BMR) is the amount of energy needed while
            resting in a temperate environment when the digestive system is
            inactive. It is the equivalent of figuring out how much gas an idle
            car consumes while parked. In such a state, energy will be used only
            to maintain vital organs, which include the heart, lungs, kidneys,
            nervous system, intestines, liver, lungs, sex organs, muscles, and
            skin. For most people, upwards of ~70% of total energy (calories)
            burned each day is due to upkeep. Physical activity makes up ~20% of
            expenditure and ~10% is used for the digestion of food, also known
            as thermogenesis.
          </p>
          <p>
            The BMR is measured under very restrictive circumstances while
            awake. An accurate BMR measurement requires that a person's
            sympathetic nervous system is inactive, which means the person must
            be completely rested. Basal metabolism is usually the largest
            component of a person's total caloric needs. The daily caloric need
            is the BMR value multiplied by a factor with a value between 1.2 and
            1.9, depending on activity level.
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
              <td>Your BMR is</td>
              <td>:</td>
              <td class="ps-3">
                <strong class="fs-3">{{ bmrResult[0].bmrResult }}</strong>
                Calories/day
              </td>
            </tr>
          </table>
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
            <!-- <div class="row w-100">
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
            </div> -->
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
