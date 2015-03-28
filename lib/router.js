Router.configure({
  layoutTemplate: 'layout'
});

// the home page layout
Router.map(function() {
  this.route('/', {
    //path: '/',
    name: 'tHome',
    layoutTemplate: 'layout'
    }),
  this.route('/about', {
    //path: '/',
    name: 'tAbout',
    layoutTemplate: 'layout'
    })
});