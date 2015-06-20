var Item = Backbone.Model.extend({

});


var ItemCollection = Backbone.Collection.extend({
  model: Item,
  url: 'heroes.json'
});

export default {ItemCollection};
