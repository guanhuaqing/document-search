import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
import VueRx from 'vue-rx';
import {Subject} from 'rxjs';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueResource);
// Vue.use(VueRx,Rx);
Vue.use(VueRx,{Subject});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
