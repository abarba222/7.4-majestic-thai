export default Backbone.View.extend({
  template: JST.hero,

initialize: function() {
  this.render();
},

render: function() {

},

renderChildren: function() {
  _.invoke(this.children || [], 'remove');

      //Iterate over filtered collection object and create child CategoryViews.  Index argument is category title.

      this.children =  _.each(this.collection, function(child, index) {
        var view = new heroItemView({
          order: this.order,
          collection: this.collection[index],
          category: index
        });
        this.$el.append(view.el);
        return view;
      }.bind(this));

      return this;
    }

}




});
