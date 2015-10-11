// Meteor.SMS.twilio = {ACCOUNT_SID: 'AC9c64c9284a7853e0c34355ee32580253', AUTH_TOKEN: '260d43d41b5f329fa7077a21113f4e0d'};


// // 
// var userPhone = '+254721930564';
// // Request for sms phone verification -- please note before receiving SMS you should Follow the SMS Integration tutorial below
// Meteor.requestPhoneVerification(userPhone, function(){});
// //Debug:  Verify the user phone isn't confirmed it.
// console.log('Phone verification status is :', Meteor.isPhoneVerified());

// // After receiving SMS let user enter his code and verify account by sending it to the server
// var verificationCode = 'CodeRecivedBySMS';

// Meteor.verifyPhone(userPhone, verificationCode, function(){});
// //Debug:  Verify the user phone is confirmed.
// console.log('Phone verification status is :', Meteor.isPhoneVerified());
// Configure to use twilio.
