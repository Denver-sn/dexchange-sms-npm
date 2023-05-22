const axios = require("axios");

class DSMS {
  static BASE_API_URL = "https://api.dexchange-sms.com/api/";
  static ROUTES = {
    SMS: "send/sms/",
    OPT: "send/otp/",
    VERIFY: "verify/otp",
  };
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async sendSMS(params) {
    if (!params.number || !params.signature || !params.content)
      throw new Error("Missing parameters");
    if (!Array.isArray(params.number))
      throw new Error("Number must be an array");

    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
    };
    try {
      const response = await axios.post(
        `${this.API_URL}${this.ROUTES.SMS}`,
        params,
        { headers: headers }
      );
      return response;
    } catch (error) {
      throw error.response.data.message;
    }
  }

  async sendAuthSMS(params) {
    if (!params.number || !params.service)
      throw new Error("Missing parameters");
    if (
      !typeof params.number === "string" ||
      !typeof params.number === "number"
    )
      throw new Error("Number must be a string or an integer");
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
    };
    try {
      const response = await axios.post(
        `${this.API_URL}${this.ROUTES.OPT}`,
        params,
        { headers: headers }
      );
      return response;
    } catch (error) {
      throw error.response.data.message;
    }
  }

  async verifyAuthSMS(params) {
    if (!params.number || !params.service || !params.otp)
      throw new Error("Missing parameters");
    if (
      !typeof params.number === "string" ||
      !typeof params.number === "number"
    )
      throw new Error("Number must be a string or an integer");
    if (!typeof params.otp === "string" || !typeof params.otp === "number")
      throw new Error("OTP must be a string or an integer");
    if (
      !typeof params.service === "string" ||
      !typeof params.service === "number"
    )
      throw new Error("Service must be a string or an integer");

    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
    };

    try {
      const response = await axios.post(
        `${this.API_URL}${this.ROUTES.VERIFY}`,
        params,
        { headers: headers }
      );
      return response;
    } catch (error) {
      throw error.response.data.message;
    }
  }
}

DSMS.version = require("../package.json").version;

module.exports = DSMS;
