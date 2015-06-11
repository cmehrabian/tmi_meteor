// Meteor.subscribe("textlines");

Template.code.helpers({
  lineHelper: function(){

    var lines = Textlines.find().fetch();
    lines = _.filter(lines, function(line){
      return line.content.length > 15;
    });
    var line = lines[Math.floor(Math.random() * lines.length)];
    // return lines[Math.floor(Math.random() * lines.length)].content;
    var sesh = Session.set("codeLine", line);
  return Session.get("codeLine");
  //   do {
  //     var count = Textlines.find().count();
  //     var rnd = Math.floor((Math.random() * count ) + 1);
  //     var line =  Textlines.findOne({_id:rnd})
  //     Session.set("codeLine", line);
  //
  //   } while(line.content.length < 15);
  //
  //   var codeLine = Session.get("codeLine");
  // return codeLine;
  }
});
