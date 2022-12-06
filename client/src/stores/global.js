"use strict";

import { defineStore } from 'pinia'
import axios from "axios";

const ax = axios.create({
  baseURL: "http://localhost:3000",
});

// import SessionSocket from '../ws/SessionSocket';
// 
//       const messageHandler = async (event) => {
// 	console.log(event);
//       };
// 
//       const socket = new SessionSocket({
// 	domain: "localhost",
// 	userId: this.user.id,
// 	port: 8080,
//       });

export const useGlobalStore = defineStore('global', {
  state() {
    return {
      loginForm: {
	email: "",
	password: "",
      },
      signupForm: {
	username: "",
	email: "",
	password: "",
      },
      user: null,
    };
  },
  actions: {
    setCredentials(data) {
	localStorage.setItem("access_token", data.access_token);
	localStorage.setItem("user", JSON.stringify(data.user));
	this.user = data.user;
    },
    async register() {
      try {
	const res = await ax.post("/register", this.loginForm);

	this.setCredentials(res.data);
	return "/";
      } catch (err) {
	return this.handleError(err);
      }
    },
    async login() {
      try {
	const res = await ax.post("/login", this.loginForm);

	this.setCredentials(res.data);
	return "/";
      } catch (err) {
	return this.handleError(err);
      }
    },
    async logout() {
      localStorage.clear();
      this.user = null;
      return "/login";
    },
  },
  getters: {},
});
