const DSMS = require('dsms');
const dsms = new DSMS('YOUR_API_KEY');



// Send an SMS message
dsms.sendSMS({
    number: ['2217XXXXXXXX', '22177XXXXXXX'], // Phone number(s) in international format
    signature: 'DEXCHANGE', // Signature of the SMS
    content: 'Hello world!' // Content of the SMS
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.error(error);
});

// // Send an authentication SMS message
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
})
.catch((error) => {
    console.error(error);
});
