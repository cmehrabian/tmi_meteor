Template.layout.helpers({

});

Template.layout.events({
  'click [data-logout]': function(e, tmpl){
    Meteor.logout();
  },
  'click [data-login]': function(e, tmpl){
    Meteor.loginWithMeteorDeveloperAccount();
  }
})
