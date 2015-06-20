export default Backbone.View.extend({
  template: JST.heroes,

  tagName: "li",
  className: "heroes",

initialize: function(options) {
  console.log(options);
  this.category = options.category;
  this.render();
  this.listenTo(this.collection, 'update', this.render());
},

render: function() {
  this.$el.html(this.template({category:this.category}));
  $(".hero-items").append(this.el);
}

});
