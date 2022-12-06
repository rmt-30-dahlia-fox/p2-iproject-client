<script>
export default {
  components: {},
  data() {
    return {
      showTable: false,
    }
  },
  props: ["list"],
}
</script>
<template>
  <tr class="bg-white border-b">
    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
      {{ list.key }}
    </th>
    <td class="py-4 px-6">{{ list.jumlah_kasus }}</td>
    <td class="py-4 px-6">{{ list.jumlah_sembuh }}</td>
    <td class="py-4 px-6">{{ list.jumlah_meninggal }}</td>
    <td class="py-4 px-6">{{ list.jumlah_dirawat }}</td>
    <td class="py-4 px-6">
      <a
        @click.prevent="showTable = !showTable"
        class="font-medium text-blue-600 hover:underline cursor-pointer select-none"  
        >Show Detail</a
      >
    </td>
  </tr>
  <div class="absolute bg-white p-5 w-1/2 shadow-xl border" v-if="showTable">
    <table class="w-full text-left text-gray-500 my-5">
      <thead class="text-gray-700 uppercase bg-sky-100">
        <tr>
          <th scope="col" class="py-3 px-6">Male</th>
          <th scope="col" class="py-3 px-6">Female</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b">
          <td class="py-4 px-6" v-for="listKelamin in list.jenis_kelamin">
            {{ listKelamin.doc_count }}
          </td>
        </tr>
      </tbody>
    </table>
    <table class="w-full text-left text-gray-500">
      <thead class="text-gray-700 uppercase bg-sky-100">
        <tr>
          <th scope="col" class="py-3 px-6">0-5</th>
          <th scope="col" class="py-3 px-6">6-18</th>
          <th scope="col" class="py-3 px-6">19-30</th>
          <th scope="col" class="py-3 px-6">31-45</th>
          <th scope="col" class="py-3 px-6">46-59</th>
          <th scope="col" class="py-3 px-6">>59</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b">
          <td class="py-4 px-6" v-for="listUmur in list.kelompok_umur">
            {{ listUmur.doc_count }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
