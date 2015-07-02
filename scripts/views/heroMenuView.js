import HeroListView from "./heroListView";

export default Backbone.View.extend({

  // template: JST.heroes,
  // tagName: "h2",
  // className: "category",
  className: "menu-items",

  initialize: function() {
    this.render();
    // this.renderChildren();
    this.listenTo(this.collection, 'update', this.render());
  },

  render: function() {
    // this.$el.html(this.template(this.collection.toJSON()));
    // $(".menu-items").append(this.el);
    this.renderChildren();
  },



  renderChildren: function() {

    _.invoke(this.children || [], 'remove');

    this.children = [];

    _.each(this.collection.groupBy('category'), function (group, category) {
      console.log("Hawkeye");
      var heroCollection = new Backbone.Collection(group);
        // heroCollection.add(group);
      var heroListView = new HeroListView({collection: heroCollection, category: category});
      this.$el.append(heroListView.el);
      this.children.push(heroListView);
      console.log(heroListView);
    }.bind(this));
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }


});
