<script>
import { mapStores, mapState } from 'pinia'
import { useMainStore } from '../stores/main'
    export default {
        computed: {
            ...mapStores(useMainStore),
        },
        created() {
            this.mainStore.successPayment(this.$route.query.id, this.$route.query.verification)
        }
    }

</script>
<template>


</template>