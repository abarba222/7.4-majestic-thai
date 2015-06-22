export default Backbone.View.extend({
  template: JST.hero,
  className: 'hero-item-link',

events: {
  'click .hero-price': 'showItem'
},

initialize: function() {
  this.render();
},

render: function() {
  $(".heroes").append(this.el);
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


});
