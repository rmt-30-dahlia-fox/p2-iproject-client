"use strict";

import { defineStore } from 'pinia'
import SessionSocket from '../ws/SessionSocket';

export const useGlobalStore = defineStore('global', {
  state() {
    return {};
  },
  actions: {
    async login() {

      const messageHandler = async (event) => {
	console.log(event);
      };

      const socket = new SessionSocket({
	domain: "localhost",
	userId: this.user.id,
	port: 8080,
      });
    },
  },
  getters: {},
});
