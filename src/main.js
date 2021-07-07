import Vue from 'vue'
import App from './App.vue'

import router from "./router/index.js"

import {  Select, Col, Container, Header, Main, Footer } from 'element-ui';
Vue.component(Select.name, Select);
Vue.component(Col.name, Col);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);

import { Button } from 'vant';
Vue.use(Button);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  mounted() {
    console.log(123456)
    setRem();
  }
}).$mount('#app')



// rem适配
function setRem() {
  // var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
  var whdef = 100 / 750;// 表示750的设计图,使用100PX的默认值
  var bodyWidth = document.body.clientWidth;// 当前窗口的宽度
  var rem = bodyWidth * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
}
window.addEventListener('load', setRem);
window.addEventListener('resize', setRem);
