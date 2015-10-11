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
AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "Phone Number",
    required: true,
    // func: function (number) {
    //     if (Meteor.isServer){
    //       if (isValidPhone(number))
    //           return false; // meaning no error!
    //       return true; // Validation error!
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
