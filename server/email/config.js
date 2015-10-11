Meteor.startup(function() {

  Meteor.Mailgun.config({
    username: 'postmaster@sandbox12497a7185ba40d194dc46e2f5c931ac.mailgun.org',
    password: '9b36649d35f17abe4a5181b8dbcf32a2'
  });

  Meteor.methods({
    'sendEmail': function(mailFields) {
      this.unblock();

      Meteor.Mailgun.send({
        to: mailFields.to,
        from: 'Evans Name ' + ' <' + mailFields.email + '>',
        subject: mailFields.subject,
        text: mailFields.text,
        html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: 'Evans Name', fromEmail: mailFields.email, message: mailFields.text})
      });
    }
  });
});
