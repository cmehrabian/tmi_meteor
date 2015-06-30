Meteor.publish("textlines", function(){
  return Textlines.find();
});

Meteor.publish("linedfn", function(){
  return Linedfn.find();
});

Meteor.publish("lineDfntmi", function(){
  return LineDfntmi.find();
});
