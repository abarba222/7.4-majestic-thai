export default Backbone.View.extend({
  template: JST['index'],

  initialize: function() {
    this.render();
  },

  render: function( ){
    $('#app').html(this.el);
    this.$el.html(this.template);//(this.model.toJSON()));
  }
});
