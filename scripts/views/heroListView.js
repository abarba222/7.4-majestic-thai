import HeroItemView from './heroItemsView';

export default Backbone.View.extend({
  template: JST.heroes,
  // className: "hero-list-title",

initialize: function(options) {
  console.log(options);
  this.order = options.order;
  // this.viewModel = options.viewModel;
  this.viewModel = new Backbone.Model();
  this.category = options.category;
  this.render();

  this.listenTo(this.viewModel, 'change:isHidden', this.render());
},

render: function() {
  this.$el.html(this.template({
    category:this.category,
    isHidden: this.viewModel.get('isHidden'),
    }));
    this.renderChildren();
},

renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map(function(child) {
      var view = new HeroItemView({
        model: child
      });
      this.$('.hero-item-container').append(view.el);
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
