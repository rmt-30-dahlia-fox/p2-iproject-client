<script>
    export default {
        props: ['city']
    }
</script>


<template>

<option :value="city.name">{{city.name}}, {{city.country}} : </option>
</template>