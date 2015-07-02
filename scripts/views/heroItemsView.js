export default Backbone.View.extend({
  template: JST.hero,
  className: 'hero-item-link',

events: {
  'click .hero-price': 'showItem'
},

initialize: function(options) {
  this.order = options.order;
  this.render();
},

render: function() {
  this.$el.html(this.template(this.model.toJSON()));
},

showItem: function() {
  var clickedItem = this.model.toJSON;
}

});

Handlebars.registerHelper('price', function(price) {
  return (Number(price) / 100).toFixed(2);
});
