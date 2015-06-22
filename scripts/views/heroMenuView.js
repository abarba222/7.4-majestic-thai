import HeroListView from "./heroListView";

export default Backbone.View.extend({

  tagName: "category-title",
  className: "category",

  initialize: function() {
    this.render();
    this.renderChildren();
    this.listenTo(this.collection, 'update', this.render());
  },

  render: function() {
    // this.$el.html(this.template(this.collection.toJSON()));

    $(".menu-items").append(this.el);
  },



  renderChildren: function() {

    _.invoke(this.children || [], 'remove');

    _.each(this.collection.groupBy('category'), function (name, category) {
      console.log("Hawkeye");
      var heroCollection = new Backbone.Collection();
        heroCollection.add(name);
      var heroListView = new HeroListView({collection: heroCollection, category: category});
      console.log(heroListView);
    });
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }


});
