Meteor.publish("textlines", function(){
  return Textlines.find();
});

Meteor.publish("linedfn", function(){
  return Linedfn.find();
});
