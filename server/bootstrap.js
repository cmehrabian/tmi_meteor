Meteor.startup(function(){

});

ServiceConfiguration.configurations.upsert(
  { service: "meteor-developer" },
  {
    $set: {
      clientId: "wd7fpwCMAsSvNCPvd",
      loginStyle: "popup",
      secret: "jBCEsv5ezQNjMWYjF6Fk6Pj8x7AoGiXA5P"
    }
  }
);
