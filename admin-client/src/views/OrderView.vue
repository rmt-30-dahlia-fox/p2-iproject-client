<script>
import { mapState, mapActions } from 'pinia'
import { useAdminStore } from '../stores/admin';
import UnitTableRow from '../components/UnitTableRow.vue';
export default {
  components: { UnitTableRow },
  computed: {
    ...mapState(useAdminStore, ['orders'])
  },
  methods: {
    ...mapActions(useAdminStore, ['fetchOrderById'])
  }
}
</script>

<template>
  <div class="overflow-x-auto max-w-screen-xl shadow-lg mx-auto">
    <table class="table w-full">
      <thead>
        <tr class="text-center">
          <th>#</th>
          <th>Customer Name</th>
          <th>Model Name</th>
          <th>Pickup Date</th>
          <th>Return Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="order, index in orders" :key="order.id">
          <td>
            <div class="font-bold">{{ index + 1 }}</div>
          </td>
          <td>
            <div class="font-bold">{{ order.Customer.name }}</div>
          </td>
          <td> {{ order.Customer.name }} </td>
          <td>{{ order.pickupDate.split('T')[0] }}</td>
          <td>{{ order.returnDate.split('T')[0] }}</td>
          <td>{{ order.status }}</td>
          <td class="">
            <div class="flex justify-center gap-4">
              <a href="" class="link link-primary" @click.prevent="fetchOrderById(order.id)">details</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
