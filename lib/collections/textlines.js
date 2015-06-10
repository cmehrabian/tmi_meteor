Textlines = new Meteor.Collection("textlines");

Textlines.findAll = function(){
  return Textlines.find();
};

Textlines.findRecent = function(){
  return Textlines.find({});
};

if (Meteor.isServer){

  Textlines.allow({
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

  Textlines.deny({
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
  // if(Meteor.isServer) {
  //
  //   Textlines.allow({
  //     insert: function(userId, doc){
  //       // return userId == doc.userId;
  //       return false;
  //     },
  //     update: function(userId, doc, fieldNames, modifier){
  //       return false;
  //     },
  //     remove: function(userId, doc){
  //       return false;
  //     }
  //   });
  //
  //   Textlines.deny({
  //     insert: function(userId, doc){
  //       return false;
  //     },
  //     update: function(userId, doc, fieldNames, modifier){
  //       return false;
  //     },
  //     remove: function(userId, doc){
  //       return false;
  //     }
  //   });
  // }
