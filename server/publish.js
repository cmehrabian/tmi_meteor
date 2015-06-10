Meteor.publish("textlines", function(){
  return Textlines.find();
});
