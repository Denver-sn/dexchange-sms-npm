const axios = require('axios');

class DSMS {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async sendSMS(data) {
        const API_URL = 'https://api.dexchange-sms.com/api/send/sms';

        if(!data.number || !data.signature || !data.content) throw new Error('Missing parameters');
        if(!Array.isArray(data.number)) throw new Error('Number must be an array');

        const params = {
            "number": data.number,
            "signature": data.signature,
            "content": data.content
        };
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
        const response = await axios.post(API_URL, params, { headers: headers })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error.response.data.message;
        });
        return response;
    }

    async sendAuthSMS(data) {
        if(!data.number || !data.service) throw new Error('Missing parameters');
        if(!typeof data.number === 'string' || !typeof data.number === 'number' ) throw new Error('Number must be a string or an integer');
        const API_URL = 'https://api.dexchange-sms.com/api/send/otp';
        const params = {
            "number": data.number,
            "service": data.service,
            "lang": data.lang
        };
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
        const response = await axios.post(API_URL, params, { headers: headers })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error.response.data.message;
        });
        return response;
    }

    async verifyAuthSMS(data) {
        if(!data.number || !data.service || !data.otp) throw new Error('Missing parameters');
        if(!typeof data.number === 'string' || !typeof data.number === 'number' ) throw new Error('Number must be a string or an integer');
        if(!typeof data.otp === 'string' || !typeof data.otp === 'number' ) throw new Error('OTP must be a string or an integer');
        if(!typeof data.service === 'string' || !typeof data.service === 'number' ) throw new Error('Service must be a string or an integer');

        const API_URL = 'https://api.dexchange-sms.com/api/verify/otp';
        const params = {
            "number": data.number,
            "service": data.service,
            "otp": data.otp
        };
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };

        const response = await axios.post(API_URL, params, { headers: headers })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error.response.data.message;
        });
        return response;
    }
}



DSMS.version = require('../package.json').version;


module.exports = DSMS;
