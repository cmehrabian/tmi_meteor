Textlines = new Meteor.Collection("textlines");
Linedfn = new Meteor.Collection("linedfn");

Textlines.findAll = function(){
  return Textlines.find();
};

Textlines.findRecent = function(){
  return Textlines.find({});
};
