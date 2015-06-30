Template.mainfile.helpers({
  formatedCode: function() {
    var allLines = Textlines.find().fetch();

    //go over allLines and pick up the 'content'

    allLines = _.pluck(allLines, 'content');
    // var index = _.indexBy(allLLlines, 'user');
    // _.pluck(userIndex, 'age');

    var re_allLines = '';

    for(i=0; i < allLines.length; i++){
      re_allLines = re_allLines + "\n" + allLines[i];
    }

    console.log(allLines);

    return re_allLines;
  }
});

Template.main.helpers({
  tmiCode: function(){
    return Session.get('tmiCode');
  }
});

Template.main.events({
  "click #submit": function(){
    var box = sAlert.info('Great Job! Keep Going?', {timeout: '2000'});

    var textObj = Textlines.findOne();
    console.log(textObj);
    var text = $("textarea").val();

    Meteor.call("addLine", text, textObj._id);
    // Add line to that specific line of document
    Meteor.call("addComment", text, textObj._id);

    var lines = Textlines.find().fetch();
    lines = _.filter(lines, function(line){
      return line.content.length > 15;
    });
    var line = lines[Math.floor(Math.random() * lines.length)];


    Session.set('codeLine', line);
    $('textarea').val('');
  },
  "click #show-tmi": function(){
    Session.set("tmiCode", true);
    console.log("tmi true");
  },
  'click #close-tmi': function(){
      Session.set('tmiCode',null);
    }
});

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
  }
});

Meteor.startup(function(){
  sAlert.config({
     effect: 'scale',
     position: 'top-right',
     timeout: 1000,
     html: false,
     onRouteClose: true,
     stack: true,
     offset: 10
   });
});
