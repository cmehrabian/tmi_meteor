Linedfn = new Meteor.Collection("linedfn");

if (Meteor.isServer) {
  Linedfn.allow({
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

  Linedfn.deny({
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
