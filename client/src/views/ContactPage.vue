<script>
import ContactCard from '../components/Contact/ContactCard.vue';
import { mapActions, mapState } from 'pinia';
import { useGlobalStore } from '../stores/global';
export default{
  components: {
    ContactCard
  },
  methods: {
    ...mapActions(useGlobalStore, ['fetchDealers'])
  },
  computed: {
    ...mapState(useGlobalStore, ['dealers'])
  },
  created(){
    this.fetchDealers();
  }
}
</script>

<template>
  <section id="contact-section">
    <section>
      <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold sm:text-4xl">Contact Us</h2>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
          <ContactCard v-for="dealer in dealers" :key="dealer.id" :dealer="dealer"/>
          
        </div>
      </div>
    </section>
  </section>
</template>