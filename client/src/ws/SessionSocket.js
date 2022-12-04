"use strict";

/**
 * @typedef {object} SessionSocketOptions
 * @property {number} userId
 * @property {string} domain
 * @property {string} port
 * @property {boolean} secure
 */

class SessionSocket {
  /**
   * Start a new Socket Session
   * @param {SessionSocketOptions} options
   * @param {(ev: MessageEvent<any>) => void} messageHandler
   */
  constructor(options, messageHandler) {
    const {userId, domain, port, secure} = options;
    this.userId = Number(userId);

    if (isNaN(this.userId)) throw new TypeError("Invalid userId: " + userId);

    this.domain = domain;

    if (typeof this.domain !== "string" || !this.domain?.length) throw new TypeError("Invalid domain: " + domain);

    if (port) {
      this.port = Number(port);

      if (isNaN(port)) throw new TypeError("Invalid port: " + port);
    }

    const protocol = secure === true ? "wss" : "ws";
    this.socket = new WebSocket(protocol + "://" + this.domain + (this.port ? (":"+this.port) : "") + "/");

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

  close(code, reason) {
    this.socket.close(code, JSON.stringify({
      user_id: this.userId,
      reason,
    }));
    this.userId = null;
    return 0;
  }

  send(msg) {
    if (typeof msg !== "string") throw TypeError("Expected string, got '" + msg + "'");
    return this.socket.send(msg);
  }
}

export default SessionSocket;
