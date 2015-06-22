import heroItemView from './heroItemsView';

export default Backbone.View.extend({
  template: JST.heroes,
  className: "hero-list-title",

initialize: function(options) {
  console.log(options);
  this.order = options.order;
  this.viewModel = options.viewModel;
  this.category = options.category;
  this.render();
  this.listenTo(this.viewModel, 'change:isHidden', this.render());
},

render: function() {
  this.$el.html(this.template({
    category:this.category,
    isHidden: this.viewModel.get('isHiden')
    }));
    this.renderChildren();
},

renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map(function(child) {
      var view = new heroItemView({
        model: child
      });
      this.$('.hero-item-collection').append(view.el);
      return view;
    }.bind(this));

    return this;
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  },

  toggleDropdown: function() {
    this.viewModel.set('isHidden', !this.viewModel.get('isHidden'));
  }

});
