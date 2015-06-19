import {HeroCollection} from './models/hero';
import HeroView from './views/heroView';
import heroListView from './views/heroListView';

(function(){
  'use strict';

  $(document).ready(function(){

    var AllHeroes = new HeroCollection();

    AllHeroes.fetch().then (function() {
      var heroView = new HeroView({collection: AllHeroes});
      $('#app').html(heroView.el);
      console.log(heroView);
    }, console.error.bind(console));

    var heroListView = new HeroListView();

    /*AllHeroes.fetch({url: "./heroes.json", success: function(){

    }});

    AllHeroes.fetch({url: "./heroes.json"}).complete(function() {
      console.log(AllHeroes);
    });*/


  });
})();
