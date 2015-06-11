Template.main.helpers({

});
Template.main.events({
  "click #submit": function(){
    var box = sAlert.info('Great Job! Keep Going?', {timeout: '2000'});

    var textObj = Textlines.findOne();
    console.log(textObj);
    var text = $("textarea").val();

    Meteor.call("addLine", text, textObj._id);

    var lines = Textlines.find().fetch();
    lines = _.filter(lines, function(line){
      return line.content.length > 15;
    });
    var line = lines[Math.floor(Math.random() * lines.length)];


    Session.set('codeLine', line);
    $('textarea').val('');
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
