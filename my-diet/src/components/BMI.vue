<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";

export default {
  data() {
    return {
      params: { height: "", weight: "" },
      info: true,
      result: false,
    };
  },
  computed: {
    ...mapState(useMainStore, ["bmiResult"]),
    ...mapWritableState(useMainStore, ["pageTitle"]),
  },
  methods: {
    ...mapActions(useMainStore, ["Calc_BMI"]),
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
      this.Calc_BMI(this.params);
      this.info = false;
      this.result = true;
    },
  },
  created() {
    if (this.$route.params.feature == "bmi") {
      this.pageTitle = "Body Mass Index";
    }
  },
};
</script>

<template>
  <!-- <div class="position-relative pt-5">
    <div class="position-absolute top-50 start-50 translate-middle">
      <h3 class="mt-5">{{ pageTitle }}</h3>
    </div>
  </div> -->
  <div class="bg-dark m-5 p-4 rounded" style="margin-top: 110px !important">
    <div class="position-relative pt-5">
      <div class="position-absolute top-50 start-50 translate-middle">
        <h3 class="my-5 text-light">{{ pageTitle }}</h3>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <button class="btn btn-info" @click="infobutton">info</button>
        <div class="text-light ps-2 pt-2" style="font-size: 14px" v-if="info">
          <p>
            The Body Mass Index (BMI) Calculator can be used to calculate BMI
            value and corresponding weight status while taking age into
            consideration. Use the "Metric Units" tab for the International
            System of Units or the "Other Units" tab to convert units into
            either US or metric units. Note that the calculator also computes
            the Ponderal Index in addition to BMI, both of which are discussed
            below in detail.
          </p>
          <p>
            BMI is a measurement of a person's leanness or corpulence based on
            their height and weight, and is intended to quantify tissue mass. It
            is widely used as a general indicator of whether a person has a
            healthy body weight for their height. Specifically, the value
            obtained from the calculation of BMI is used to categorize whether a
            person is underweight, normal weight, overweight, or obese depending
            on what range the value falls between. These ranges of BMI vary
            based on factors such as region and age, and are sometimes further
            divided into subcategories such as severely underweight or very
            severely obese. Being overweight or underweight can have significant
            health effects, so while BMI is an imperfect measure of healthy body
            weight, it is a useful indicator of whether any additional testing
            or action is required. Refer to the table below to see the different
            categories based on BMI that are used by the calculator.
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
              <td>Your BMI is</td>
              <td>:</td>
              <td class="ps-3">
                <strong class="fs-3">{{ bmiResult[0].bmiResult }}</strong>
                Kg/m<sup>2</sup>
              </td>
              <!-- <td>
                <i class="fs-3"> (Normal)</i>
              </td> -->
            </tr>
          </table>
          <pre></pre>
          <h5 class="text-light text-align-center">
            BMI Result Range for Adult:
          </h5>
          <table class="table table-bordered text-light w-50">
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">BMI Range Kg/m<sup>2</sup></th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-danger">
                <td>Severe Thinness</td>
                <td><strong>Less</strong> than 16</td>
              </tr>
              <tr class="table-warning">
                <td>Moderate Thinness</td>
                <td>16 - 17</td>
              </tr>
              <tr class="table-warning">
                <td>Mild Thinness</td>
                <td>17 - 18.5</td>
              </tr>
              <tr class="table-primary">
                <td>Normal</td>
                <td>18.5 - 25</td>
              </tr>
              <tr class="table-warning">
                <td>Overweight</td>
                <td>25 - 30</td>
              </tr>
              <tr class="table-danger">
                <td>Obese Class I</td>
                <td>30 - 35</td>
              </tr>
              <tr class="table-danger">
                <td>Obese Class II</td>
                <td>35 - 40</td>
              </tr>
              <tr class="table-danger">
                <td>Obese Class III</td>
                <td><strong>More</strong> than 40</td>
              </tr>
            </tbody>
          </table>

          <p class="text-light">
            This is the World Health Organization's (WHO) recommended body
            weight based on BMI values for adults. It is used for both men and
            women, age 20 or older.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="ps-4">
          <form @submit.prevent="calculate()" class="position-relative">
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
