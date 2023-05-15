## DSMS - Node.js module for Dexchange SMS API

DSMS is a Node.js module that provides a simple way to interact with the Dexchange SMS API. With DSMS, you can send SMS messages and authenticate users via SMS.

## Installation

```bash
npm install dexchange-sms
```

## Usage

```javascript
const DSMS = require('dsms');
const dsms = new DSMS('your_api_key');

// Send an SMS message
dsms.sendSMS({
  number: ['221XXXXXXXXX'], // Phone number(s) in international format
  signature: 'DEXCHANGE', // Signature of the SMS
  content: 'Hello world!' // Content of the SMS
})
.then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

// Send an authentication SMS message
dsms.sendAuthSMS({
  number: '221XXXXXXXXX', // Phone number in international format
  service: 'my_service', // Name of your service
  lang: 'en' // Language of the SMS
})
.then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

// Verify an authentication SMS message
dsms.verifyAuthSMS({
  number: '221XXXXXXXXX', // Phone number in international format
  service: 'my_service', // Name of your service
  otp: '123456' // OTP code sent to the user
})
.then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)