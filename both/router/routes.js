// Router.route('/', {
//   name: 'home'
// });

Router.route('/', function () {
  this.render('Home', {
    name: 'home'
    // data: function () { return Items.findOne({_id: this.params._id}); }
  });
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
