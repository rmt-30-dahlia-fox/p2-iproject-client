import { defineStore } from "pinia"
import axios from 'axios'
export const useCustomerStore = defineStore('customer', {
  state: () => ({
    baseUrl: 'http://localhost:3000/customer/',
    isLogin: true,
    formStep: 1,
    orderForm: {
      pickupLocation: "",
      pickupDate: "",
      pickupTime: "",
      returnLocation: "",
      returnDate: "",
      returnTime: "",
      totalPrice: "",
      CustomerId: "",
      UnitId: "",
    },
    units: []
  }),
  actions: {
    async fetchUnit() {
      try {
        const { data } = await axios.get(this.baseUrl + '/units')
        this.units = data.units
      } catch (error) {
        console.log(error);
      }
    }
  },
})