<script>
import { useAdminStore } from '../stores/admin';
import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(useAdminStore, ['units', 'orders'])
  }
}
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-2xl mb-4 text-center">Dashboard</h1>
    <div class="flex justify-center">
      <div class="stats shadow">

        <div class="stat place-items-center">
          <div class="stat-title">Total Units</div>
          <div class="stat-value">{{ units.length }}</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Pending Orders</div>
          <div class="stat-value text-secondary">{{ orders.filter(el => el.status === 'Pending').length}}</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Ongoing Orders</div>
          <div class="stat-value">{{ orders.filter(el => el.status === 'Ongoing').length }}</div>
        </div>

      </div>
    </div>
  </div>
</template>
