Template.main.helpers({

});

Template.main.events({
  "click #submit": function(){

    var textObj = Textlines.findOne();
    console.log(textObj);
    var text = $("textarea").val();

    Meteor.call("addLine", text, textObj._id);

  }
});
