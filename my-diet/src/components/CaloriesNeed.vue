<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";

export default {
  data() {
    return {
      params: { height: "", weight: "", gender: "", age: "", activity: "" },
    };
  },
  computed: {
    ...mapState(useMainStore, ["pageTitle", "calNeedResult"]),
  },
  methods: {
    ...mapActions(useMainStore, ["Calc_CaloriesNeed"]),
  },
};
</script>

<template>
  <div class="position-relative pt-5">
    <div class="position-absolute top-50 start-50 translate-middle">
      <h3 class="mt-5">{{ pageTitle }}</h3>
    </div>
  </div>
  <div class="bg-dark m-5 p-4">
    <div class="ps-4">
      <form
        @submit.prevent="Calc_CaloriesNeed(params)"
        class="position-relative"
      >
        <!-- Age & Sex -->
        <div
          class="row w-50 mt-5 position-relative top-50 start-50 translate-middle"
        >
          <div class="col">
            <div class="mb-3">
              <label class="form-label text-light">Age</label>
              <div class="input-group mb-2">
                <input
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
                <select class="form-select">
                  <option selected disabled>-- Choose one --</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <!-- Height & Weight -->
        <div
          class="row w-50 position-relative top-50 start-50 translate-middle"
        >
          <div class="col">
            <div class="mb-3">
              <label class="form-label text-light">Height</label>
              <div class="input-group mb-2">
                <input
                  type="number"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
                <div class="input-group-prepend">
                  <div class="input-group-text">Kg</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label class="form-label text-light">Width</label>
              <div class="input-group mb-2">
                <input
                  type="number"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
                <div class="input-group-prepend">
                  <div class="input-group-text">Cm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Activity -->
        <div
          class="row w-50 position-relative top-50 start-50 translate-middle"
        >
          <div class="col">
            <div class="mb-3">
              <div class="form-group">
                <label class="form-label text-light">Weekly Exercise</label>
                <select class="form-select">
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
                    Extreme: Actively doing intense exercise 6-7 times a week
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <button
            type="submit"
            class="btn btn-secondary row w-50 position-relative top-50 start-50 translate-middle"
            style="width: 48.6% !important"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
