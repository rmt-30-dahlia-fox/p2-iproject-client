<script>
export default {
  props: ['exercise']
}
</script>

<template>
  <tr>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
      {{ exercise.name }}
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ exercise.type }}</td>
    <td class="whitespace-nowrap px-4 py-2">
      <strong
        class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
      >
        {{ exercise.difficulty }}
      </strong>
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-end">
      <button
        type="button"
        class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-fit transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Choose
      </button>
    </td>
  </tr>
</template>
