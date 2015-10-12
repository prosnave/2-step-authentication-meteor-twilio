AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('verifyEmail', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configure({
    sendVerificationEmail: true,
    negativeValidation: true,
    focusFirstInput: true,
    enforceEmailVerification: true,
});

// if (Meteor.isServer){
//     Meteor.methods({
//         'validatePhone': function (number) {
//             var urlRegEx = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
//             return  Match.test(number, urlRegEx);
//         },
//     });
// }

AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "Phone e.g 0721123456",
    required: true,
    // func: function (number) {
    //     if (Meteor.isServer){
    //     //   if (validatePhone(number)){
    //         Meteor.sendVerificationCode('+254'+number);
    //           // return false; // meaning no error!
    //     //   }
    //     //   return true; // Validation error!
    //     }
    // },
    errStr: 'Invalid Phone number!',
});

if (Meteor.isServer){
    Meteor.methods({
        "isValidPhone": function(number){
            return !!Meteor.users.findOne({username: username});
        },
    });
}
