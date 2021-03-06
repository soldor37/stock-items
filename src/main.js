import Vue from 'vue'
import App from './App.vue'
import mdiVue from 'mdi-vue'
import * as mdijs from '@mdi/js'

Vue.use(mdiVue, {
  icons: mdijs
}) 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
