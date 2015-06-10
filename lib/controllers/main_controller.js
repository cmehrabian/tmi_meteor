dep = new Tracker.Dependency;

mainController = RouteController.extend({
  layoutTemplate: "layout",

  subscriptions: function() {
    this.subscribe('textlines');
  },

  action: function() {
    dep.depend();
    console.log("action");
    this.render('home');
  }
})
