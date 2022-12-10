"use strict";

import axios from "axios";

/**
 * @typedef {object} SessionSocketOptions
 * @property {number} userId
 * @property {string} httpUri - Without protocol, without trailing slash
 * @property {string} wsUri - Without protocol without trailing slash
 * @property {boolean} secureWs
 * @property {boolean} secureHttp
 */

class SessionSocket {
  /**
   * Start a new Socket Session
   * @param {SessionSocketOptions} options
   * @param {(string) => void} broadcastHandler
   * @param {(string) => void} singleHandler
   */
  constructor(options, broadcastHandler, singleHandler) {
    const {userId, httpUri, wsUri, secureWs, secureHttp} = options;
    this.userId = Number(userId);

    if (isNaN(this.userId)) throw new TypeError("Invalid userId: " + userId);

    this.httpUri = httpUri;
    this.wsUri = wsUri;

    this.secureWs = !!secureWs;
    this.secureHttp = !!secureHttp;

    this.socket = io(this.connectHttp);
    this.socket.on("broadcast", broadcastHandler);
    this.socket.on("single", singleHandler);

    this.socket.on("connect", () => {
      this.socket.emit("identify", JSON.stringify({
        op: "identify",
        data: {
          user_id: this.userId,
        }
      }));

      console.log("[SessionSocket] Connecedted");
    });

    this.ax = axios.create({
      baseURL: this.connectHttp,
    });

    // this.socket.addEventListener("message", messageHandler);

    // this.socket.addEventListener("error", (...args) => {
    //   console.error(args, "<<<<<<<<< error [socket]");
    // });
  }

  get connectWs() {
    const wsProtocol = this.secureWs === true ? "wss" : "ws";
    return wsProtocol + "://" + this.wsUri;
  }

  get connectHttp() {
    const httpProtocol = this.secureHttp === true ? "https" : "http";
    return httpProtocol + "://" + this.httpUri;
  }

  close(code, reason) {
    this.socket.close(code, JSON.stringify({
      user_id: this.userId,
      reason,
    }));
    this.userId = null;
    return 0;
  }

  send(msg) {
    if (typeof msg !== "object") throw TypeError("Expected object literal, got '" + msg + "'");
    return this.socket.send(JSON.stringify(msg));
  }

  destroy() {
    this.close(1000, "logout");
  }

  async sendGlobalChatMessage(formData) {
    return this.ax.post("/chat/global", formData, {
      headers: {
	"Content-Type": "multipart/form-data",
	access_token: localStorage.getItem("access_token"),
      }
    });
  }

  async sendDirectMessage(formData, recipientId) {
    return this.ax.post("/chat/"+recipientId, formData, {
      headers: {
	"Content-Type": "multipart/form-data",
	access_token: localStorage.getItem("access_token"),
      }
    });
  }
}

export default SessionSocket;
