<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAdminStore } from '../stores/admin';
export default {
  computed: {
    ...mapWritableState(useAdminStore, ['unitForm'])
  },
  methods: {
    ...mapActions(useAdminStore, ['addUnit'])
  }
}
</script>

<template>
  <div class="hero">
    <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <div class="card-body">
        <h1 class="text-center font-bold text-3xl">Add Unit</h1>
        <form action="" @submit.prevent="addUnit">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Model Name</span>
            </label>
            <input type="text" class="input input-bordered" v-model="unitForm.model" />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Model Type</span>
            </label>
            <select class="select select-bordered w-full active" v-model="unitForm.type">
              <option disabled selected value="">Model Type</option>
              <option value="Matic">Matic</option>
              <option value="Non-Matic">Non-Matic</option>
            </select>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Price per Day</span>
            </label>
            <input type="number" class="input input-bordered" v-model="unitForm.price" />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Image Url</span>
            </label>
            <input type="text" class="input input-bordered" v-model="unitForm.imageUrl" />
          </div>

          <div class="form-control mt-6">
            <button class="btn btn-info" type="submit">Add Unit</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

{ model, type, price, imageUrl }