"use strict";

class SessionSocket {
  /**
   * Start a new SessionSocket
   * @param {number} userId
   * @param {keyof SessionSocket.SessionSocketTypes} type
   * @param {boolean} secure
   * @param {number} recipientId
   */
  constructor(userId, type, secure, recipientId) {
    this.userId = Number(userId);

    if (isNaN(this.userId)) {
      throw new TypeError("Invalid userId: " + userId);
    }

    this.type = type;
    
    const numRecipient = Number(recipientId);
    this.recipientId = isNaN(numRecipient) ? null : numRecipient;
    
    // recipientId is required for chat between user
    if (!this.recipientId && this.type === "chat") {
      throw new Error("Recipient is required for chat session");
    }
    
    this.route = SessionSocket.SessionSocketTypes[this.type];

    if (!this.route) {
      throw new TypeError("Invalid type: " + type);
    }

    const prot = secure === true ? "wss" : "ws";
    this.socket = new WebSocket(prot + "://localhost:8080/");

    this.socket.addEventListener('open', (event) => {
      this.socket.send(JSON.stringify({
	op: "identify",
	data: {
	  user_id: this.userId,
	}
      }));
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

  static SessionSocketTypes = {
    globalChat: "globalChat",
    chat: "chat",
  }
}

export default SessionSocket;
