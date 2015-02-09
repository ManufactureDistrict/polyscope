Meteor.startup(function() {
  Meteor.methods({
    CreateUser: function(username, email, password) {
      return Accounts.createUser({
        email: email,
        password: password,
        profile: {
          name: username
        }
      });
    }
  });
});
//
//Accounts.onCreateUser(function(options, user) {
//  var d6 = function () { return Math.floor(Random.fraction() * 6) + 1; };
//  user.dexterity = d6() + d6() + d6();
//  // We still want the default hook's 'profile' behavior.
//  if (options.profile)
//    user.profile = options.profile;
//  return user;
//});