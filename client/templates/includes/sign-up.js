Template.signUp.events({
  "submit [data-action=sign-up]": function(e, t) {
    var $form, username, email, password;
    e.preventDefault();
    $form = $(e.target);
    if ($form[0].valid) {
      email = $form.find("#email").val();
      password = $form.find("#password").val();
      username = $form.find("#username").val();
      return Meteor.call('CreateUser', username, email, password, function(err) {
        if (err) {
          return console.log(err.reason);
        } else {
          return Router.go("home");
        }
      });
    }
  }
});

