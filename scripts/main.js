import {HeroCollection} from './models/hero';
import HeroView from './views/heroView';
//import heroListView from './views/heroListView';
import {ItemCollection} from './models/heroItems';
import HeroMenuView from './views/heroMenuView';

(function(){
  'use strict';

  $(document).ready(function(){

    $("#app").html(JST)

    var AllHeroes = new HeroCollection();

    AllHeroes.fetch().then (function() {
      console.log(AllHeroes);
      var heroMenuView = new HeroMenuView({collection: AllHeroes});
      console.log(heroMenuView);
    });

    //
      var heroView = new HeroView();
    //   
    //   console.log(heroView);
    // }, console.error.bind(console));

    // var heroListView = new HeroListView();

    /*AllHeroes.fetch({url: "./heroes.json", success: function(){

    }});

    AllHeroes.fetch({url: "./heroes.json"}).complete(function() {
      console.log(AllHeroes);
    });*/


  });
})();
