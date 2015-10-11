Meteor.startup(function() {

  Meteor.Mailgun.config({
    username: 'postmaster@sandbox12497a7185ba40d194dc46e2f5c931ac.mailgun.org',
    password: '9b36649d35f17abe4a5181b8dbcf32a2'
  });
});
Meteor.methods({
    'sendEmail': function(mailFields) {
      this.unblock();

      Meteor.Mailgun.send({
        to: mailFields.to,
        from: 'Evans Name ' + ' <' + mailFields.from + '>',
        subject: mailFields.subject,
        text: mailFields.text,
        html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: 'Evans Name', fromEmail: mailFields.from, message: mailFields.text})
      });
    }
  });
// Configure the Twilio client
Accounts.sms.configure({
  twilio: {
    from: '+12027598652',
    sid: 'AC9c64c9284a7853e0c34355ee32580253',
    token: '260d43d41b5f329fa7077a21113f4e0d'
  }
});