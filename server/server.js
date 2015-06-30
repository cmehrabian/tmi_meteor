Meteor.methods({
  getText:function(){
    return lines;
  },
  '/lines/getLine': function(lines) {

  }
});

Meteor.startup(function () {
  Meteor.methods({
    addLine:function(line, lineNum){
      var lineObject = {
        line:line,
        lineNum:lineNum,
        timestamp:(new Date()).getTime()
      }
      Linedfn.insert(lineObject);
    },
    addComment: function(line, lineNum){
      // var allLines = LineDfntmi.find().fetch();
      var lineinQ = Textlines.findOne({_id: lineNum});
      lineinQ  = lineinQ.content + " //" + line;
      Textlines.update({_id:lineinQ._id}, {$set:{
        content: lineinQ
      }});
      //add comment to end of line
    }
});

  Assets.getText("main.txt", function(error, result){
    if(error){
      console.log("error", error);
    }
    if(result){
      lines = result.split( '\n' );
      for(i=1; i < lines.length; i++){
        Textlines.update({_id:i}, {"content": lines[i], "file":"exerciseList.js"}, {upsert : true});
        LineDfntmi.update({_id:i}, {"content": lines[i], "file":"exerciseList.js"}, {upsert : true});
      }
    }
  });
});
