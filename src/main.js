import Vue from 'vue'
import App from './App.vue'

import router from "./router/index.js"

import { Button, Select, Col, Container, Header, Main, Footer } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Col.name, Col);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
