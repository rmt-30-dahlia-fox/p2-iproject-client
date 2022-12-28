<script>
import { mapStores, mapState } from 'pinia'
import { useMainStore } from '../stores/main'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


    export default {
        computed: {
            ...mapStores(useMainStore),
            ...mapState(useMainStore, ['isLoading', 'fullPage']),
        },
        created() {
            this.mainStore.successPayment(this.$route.query.id, this.$route.query.verification)
        }
    }

</script>
<template>
    <div class="vl-parent">
        <loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
    </div>
</template>