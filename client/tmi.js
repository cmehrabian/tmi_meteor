// Meteor.subscribe("textlines");

Template.code.helpers({
  lineHelper: function(){
    do {
      var count = Textlines.find().count();
      var rnd = Math.floor((Math.random() * count ) + 1);
      var line =  Textlines.findOne({_id:rnd})

    } while(line.content.length < 15);
  return line
  }
});
