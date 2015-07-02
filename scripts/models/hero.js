var Hero = Backbone.Model.extend({
  idAttribute: 'id',

  defaults: {
    "name":"",
    "description":"",
    "price":"",
    "category":""
  }
});

var HeroCollection = Backbone.Collection.extend({
  model: Hero,
  url: "heroes.json"
});



export default {Hero, HeroCollection};
