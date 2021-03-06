// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

import Game from "./Game.vue";
import Question from "./Question.vue";


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { 
      App,
      'game': Game,
      'question': Question
  },
  template: '<App/>',
});
