dep = new Tracker.Dependency;

mainController = RouteController.extend({
  layoutTemplate: "layout",

  subscriptions: function() {
    this.subscribe('textlines');
    this.subscribe('linedfn');
    this.subscribe("linedfntmi");
  },

  action: function() {
    dep.depend();
    console.log("action");
    this.render('home');
  }
})
