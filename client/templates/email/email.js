Meteor.call('sendEmail',{
    to: 'whoItsTo@theDomain.com',
    from: 'no-reply@where-ever.com',
    subject: 'I really like sending emails with Mailgun!',
    text: 'Mailgun is totally awesome for sending emails!',
    html: 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
  });

// Configure the Twilio client
var client = new Twilio({
  from: Meteor.settings.TWILIO.FROM,
  sid: Meteor.settings.TWILIO.SID,
  token: Meteor.settings.TWILIO.TOKEN
});

// Send a message
client.sendSMS({
  to: '+254721930564',
  body: 'Hello world!'
});