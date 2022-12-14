"use strict";

import { defineStore } from 'pinia'
import axios from "axios";
import Swal from "sweetalert2";
import SessionSocket from '../ws/SessionSocket';

const serverSocket = "localhost:3000" || "localhost:8080";
const serverURL = "localhost:3000";
const baseURL = "http://" + serverURL;
const ax = axios.create({
  baseURL,
});

let preloaderCounter = 0;

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
      userMessages: {},
      socket: null,
      globalMessages: [],
      baseURL,
      users: [],
      posts: [],
      inputText: "",
    };
  },
  actions: {
    loading() {
      preloaderCounter++;
      if (preloaderCounter === 0) return;
      document.getElementById("preloader").classList.add("active");
    },
    stopLoading() {
      preloaderCounter--;
      if (preloaderCounter === 0)
	document.getElementById("preloader").classList.remove("active");
    },
    handleError(err) {
      console.error(err);
      // swal
      if (typeof err.response?.data.message === "string") {
	Swal.fire({
	  icon: 'error',
	  title:  err.response.data.message === "Unauthorized" ? "Please login first" : err.response.data.message,
	  showConfirmButton: false,
	  timer: 5000,
	  timerProgressBar: true,
	});
	return;
      }

      if (typeof err.response?.data.message?.[0] === "string") {
	Swal.fire({
	  icon: 'error',
	  title: err.response?.data.message?.[0],
	  showConfirmButton: false,
	  timer: 5000,
	  timerProgressBar: true,
	});
	return;
      }

      if (!err.response && typeof err.message === "string") {
	Swal.fire({
	  icon: 'error',
	  title: err.message,
	  showConfirmButton: false,
	  timer: 5000,
	  timerProgressBar: true,
	});
	return;
      }

      if (err.response?.status === 401) {
	return this.logout();
      }

      if (err.response?.data.message === "This menu is already in your favorite list") {
	return "/favorites";
      }

      if (err.response?.data.message === "Food not found") {
	return "/";
      }
      console.error("[WARN] UNHANDLED ERROR");
    }, // handleError
    setCredentials(data) {
	localStorage.setItem("access_token", data.access_token);
	localStorage.setItem("user", JSON.stringify(data.user));
	this.user = data.user;
    },
    async signup() {
      try {
	const res = await ax.post("/register", this.signupForm);

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
      if (this.socket) {
	this.socket.destroy();
	this.socket = null;
      }
      return "/login";
    },
    async sendGlobalChatMessage(form) {
      try {
	const res = await this.socket.sendGlobalChatMessage(form);

	// this.globalMessages.push(res.data);
      } catch (err) {
	return this.handleError(err);
      }
    },
    async sendDirectMessage(form, recipientId) {
      try {
	const res = await this.socket.sendDirectMessage(form, recipientId);

	// recipientId = Number(recipientId)

	// if (!this.userMessages[recipientId]) {
	//   this.userMessages[recipientId] = [];
	// }

	// this.userMessages[recipientId].push(res.data);
      } catch (err) {
	return this.handleError(err);
      }
    },
    async updateProfile(form) {
      try {
	const res = await ax.put("/profile", form, {
	  headers: {
	    access_token: localStorage.getItem("access_token"),
	  },
	});

	this.user = res.data;
	localStorage.setItem("user", JSON.stringify(res.data));
	return "/";
      } catch (err) {
	return this.handleError(err);
      }
    },
    broadcastHandler(data) {
      console.log(data);
      try {
	const msg = JSON.parse(data);

	if (msg.type === undefined) {
	  if (msg.op === "like") {
	    const post = this.posts.find(po => po.id === msg.id);
	    if (post) post.likeCount++;
	    return;
	  }
	  else if (msg.op === "delete") {
	    this.posts = this.posts.filter(po => po.id !== Number(msg.id));
	    return;
	  }
	  this.posts.unshift(msg);
	}
	else if (msg.type === "global") {
	  this.globalMessages.push(msg);
	}
      } catch (err) {
	console.error(err);
      }
    },
    singleHandler(data) {
      // console.log(msg);
      try {
	const msg = JSON.parse(data);

	if (msg.type === "dm") {
	  let { RecipientId: recipient_id } = msg;

	  recipient_id = Number(recipient_id);

	  if (isNaN(recipient_id)) throw new TypeError("Expected number, got " + typeof recipient_id);

	  if (!this.userMessages[recipient_id]) this.userMessages[recipient_id] = [];

	  this.userMessages[recipient_id].push(msg);
	}
      } catch (err) {
	console.error(err);
      }
    },
    startSocket() {
      this.socket = new SessionSocket({
	userId: this.user.id,
	httpUri: serverURL,
	// wsUri: serverSocket,
	secureHttp: false,
	// secureWs: false,
      }, this.broadcastHandler, this.singleHandler);

      // testing purpose
      // window.socket = this.socket;
    },
    async fetchGlobalMessages() {
      try {
	const res = await ax.get("/messages/global", {
	  headers: {
	    access_token: localStorage.getItem("access_token"),
	  },
	});

	this.globalMessages = res.data;
      } catch (err) {
	return this.handleError(err);
      }
    },
    async fetchUsers() {
      try {
	const res = await ax.get("/users", {
	  headers: {
	    access_token: localStorage.getItem("access_token"),
	  },
	});

	this.users = res.data;
      } catch (err) {
	return this.handleError(err);
      }
    },
    async fetchPosts() {
      try {
	const res = await ax.get("/posts", {
	  headers: {
	    access_token: localStorage.getItem("access_token"),
	  },
	});

	console.log(res.data);
	this.posts = res.data;
      } catch (err) {
	return this.handleError(err);
      }
    },
    async fetchUserMessages(id) {
      try {
	const res = await ax.get("/messages/"+id, {
	  headers: {
	    access_token: localStorage.getItem("access_token"),
	  },
	});

	const recipientId = Number(id)

	if (!this.userMessages[recipientId]) {
	  this.userMessages[recipientId] = [];
	}

	this.userMessages[recipientId] = res.data;
      } catch (err) {
	return this.handleError(err);
      }
    },
    async fetchUsers() {
      try {
	const res = await ax.get("/users", {
	  headers: {
	    access_token: localStorage.getItem("access_token"),
	  },
	});

	this.users = res.data;
      } catch (err) {
	return this.handleError(err);
      }
    },
    async fetchPosts() {
      try {
	const res = await ax.get("/posts", {
	  headers: {
	    access_token: localStorage.getItem("access_token"),
	  },
	});

	console.log(res.data);
	this.posts = res.data;
      } catch (err) {
	return this.handleError(err);
      }
    },
    async newPost(formData) {
      try {
	const res = await ax.post("/posts", formData, {
	  headers: {
	    "Content-Type": "multipart/form-data",
	    access_token: localStorage.getItem("access_token"),
	  }
	});

	console.log(res.data);
	// this.posts.push(res.data);
      } catch (err) {
	return this.handleError(err);
      }
    },
    async likePost(id) {
      try {
	const res = await ax.post("/posts/"+id+"/like", null, {
	  headers: {
	    access_token: localStorage.getItem("access_token"),
	  }
	});

	this.posts.find(post => post.id === Number(id)).likeCount++;
      } catch (err) {
	return this.handleError(err);
      }
    },
    async deletePost(id) {
      try {
	const res = await ax.delete("/posts/"+id, {
	  headers: {
	    access_token: localStorage.getItem("access_token"),
	  }
	});
      } catch (err) {
	return this.handleError(err);
      }
    },
  },
  getters: {},
});
