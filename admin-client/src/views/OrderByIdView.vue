<script>
import { mapState } from 'pinia';
import { useAdminStore } from '../stores/admin';

export default {
  computed: {
    ...mapState(useAdminStore, ['orderById'])
  }
}
</script>
<template>
  <h1 class="text-center font-bold text-3xl mb-4">Order {{ orderById.id }} Details</h1>
  <h2 class="text-center font-bold text-xl">Status: {{ orderById.status }}</h2>
  <div class="divider"></div>
  <div>
    <div class="flex gap-16 w-full">
      <div class="w-1/2">
        <h2 class="text-center font-bold text-xl mb-8">Customer</h2>
        <table class="table w-full">
          <tbody>
            <tr>
              <th>Customer ID:</th>
              <td>{{ orderById.CustomerId }}</td>
            </tr>
            <tr>
              <th>Customer Name:</th>
              <td>{{ orderById.Customer.name }}</td>
            </tr>
            <tr>
              <th>Customer Email:</th>
              <td>{{ orderById.Customer.email }}</td>
            </tr>

            <tr>
              <th>
                Customer Phone Number:
              </th>
              <td>
                {{ orderById.Customer.phoneNumber }}
              </td>
            </tr>
            <tr>
              <th>
                Customer Identity Type:
              </th>
              <td>
                {{ orderById.Customer.identityType }}
              </td>
            </tr>
            <tr>
              <th>Customer Identity Number </th>
              <td>{{ orderById.Customer.identityNumber }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="divider divider-horizontal"></div>
      <div class="w-1/2">
        <h2 class="text-center font-bold text-xl mb-8">Unit</h2>
        <table class="table w-full">
          <tbody>
            <tr>
              <th>Unit ID:</th>
              <td>{{ orderById.UnitId }}</td>
            </tr>
            <tr>
              <th>Model:</th>
              <td>{{ orderById.Unit.model }}</td>
            </tr>
            <tr>
              <th>Unit Type:</th>
              <td>{{ orderById.Unit.type }}</td>
            </tr>
            <tr>
              <th>Unit Price per Day:</th>
              <td>{{ orderById.Unit.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="divider"></div>
    <table class="table w-full">
      <tbody>
        <tr>
          <th>Pickup Location:</th>
          <td>{{ orderById.pickupLocation }}</td>
        </tr>
        <tr>
          <th>Pickup Date:</th>
          <td>{{ orderById.pickupDate }}</td>
        </tr>
        <tr>
          <th>Return Location:</th>
          <td>{{ orderById.returnLocation }}</td>
        </tr>
        <tr>
          <th>Return Date:</th>
          <td>{{ orderById.returnDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="divider"></div>
  <div class="mb-32">
    <p class="font-bold text-xl">Total Price: {{ orderById.totalPrice }}</p>
  </div>
</template>