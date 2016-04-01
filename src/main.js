var Vue= require('vue');
Vue.use(require('vue-resource'));
import App from './App.vue'



//Vue.http.options.root ='https://www.opendata.go.ke/resource';

new Vue({
  el: 'body',
  data: {
  	labels: ['assembly','roads','public'],
     values: [20,45,28]
  },
  components: { App}
})
