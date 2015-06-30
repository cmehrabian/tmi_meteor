Router.configure({
  layoutTemplate:"layout",
  notFoundTemplate:"notFound",
  loadingTemplate:"loading"
});

Router.route('/', {
  name: 'home',
  controller: 'mainController',
  action: 'action',
  where: 'client'
});

Router.route('/mainfile', function (){
  this.render('mainfile');
});
