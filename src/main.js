import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import store from './store'
Vue.use(uView)

Vue.prototype.$store = store

Vue.prototype.$globalTheme = {
	color: '#20BF8E',
	backgroundColor: '#20BF8E0D'
}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
