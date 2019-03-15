import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.config.delimiters = ['${', '}']

new Vue({
  render: h => h(App),
}).$mount('#app');
