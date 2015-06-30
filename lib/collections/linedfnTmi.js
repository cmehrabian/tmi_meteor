LineDfntmi = new Meteor.Collection("lineDfntmi");


if (Meteor.isServer){

  LineDfntmi.allow({
    insert: function(){
      return true;
    },
    update: function(){
      return true;
    },
    remove: function(){
      return true;
    }
  });

  LineDfntmi.deny({
    insert: function(){
      return false;
    },
    update: function(){
      return false;
    },
    remove: function(){
      return false;
    }
  });
}
