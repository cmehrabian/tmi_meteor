Template.main.helpers({

});

Template.main.events({
  "click #submit": function(){
    var box = sAlert.info('Great Job! Keep Going?', {timeout: '2000'});
    var textObj = Textlines.findOne();
    console.log(textObj);
    var text = $("textarea").val();

    Meteor.call("addLine", text, textObj._id);


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
