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
   * @param {(ev: MessageEvent<any>) => void} messageHandler
   */
  constructor(options, messageHandler) {
    const {userId, httpUri, wsUri, secureWs, secureHttp} = options;
    this.userId = Number(userId);

    if (isNaN(this.userId)) throw new TypeError("Invalid userId: " + userId);

    this.httpUri = httpUri;
    this.wsUri = wsUri;

    this.connectBase = this.domain + (this.port ? (":"+this.port) : "");

    this.secureWs = !!secureWs;
    this.secureHttp = !!secureHttp;

    this.socket = new WebSocket();
    this.ax = axios.create({
      baseUrl: this.connectHttp,
    });

    this.socket.addEventListener('open', (event) => {
      this.socket.send(JSON.stringify({
	op: "identify",
	data: {
	  user_id: this.userId,
	}
      }));
    });

    this.socket.addEventListener("message", messageHandler);

    this.socket.addEventListener("error", (...args) => {
      console.error(args, "<<<<<<<<< error [socket]");
    });
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

  sendGlobalChatMessage(content) {
    this.ax.post(this.connectHttp + "/chat/global", {
      op: 
    }, {
      headers
    })
  }

  sendDirectMessage(content) {

  }

  sendChat() {}
}

export default SessionSocket;
