var Menu = Backbone.Model.extend({

});


var MenuCollection = Backbone.Collection.extend({
  model: List,
  url: 'heroes.json'
});

export default {MenuCollection};
