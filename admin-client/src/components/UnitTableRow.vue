<script>
import { mapActions } from 'pinia';
import { useAdminStore } from '../stores/admin';

export default {
  props: ['unit'],
  methods: {
    ...mapActions(useAdminStore, ['deleteUnitById'])
  }
}
</script>
<template>
  <tr class="text-center">
    <td>
      <div class="font-bold">{{ unit.model }}</div>
    </td>
    <td style="max-width: 100px"><img :src="unit.imageUrl" alt=""></td>
    <td>{{ unit.type }}</td>
    <td>{{ unit.price }}</td>
    <td class="">
      <div class="flex justify-center gap-4">
        <button class="btn btn-group btn-circle"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn btn-group btn-circle" @click.prevent="deleteUnitById(unit.id)"><i class="fa-solid fa-trash "></i></button>
      </div>
    </td>
  </tr>
</template>