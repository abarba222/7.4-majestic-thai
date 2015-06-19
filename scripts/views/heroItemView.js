export default Backbone.View.extend({

initializ: function() {
  this.render();
},

render: function() {
  this.$el.html(this.template(this.model.toJSON()));
}




});
