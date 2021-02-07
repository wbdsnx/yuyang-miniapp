import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		hasLogin: false,
		
		theme: {
			color: '#20BF8E',
			bgColor: '#20BF8E0D'
		}
	},
	mutations: {},
	actions: {}
})
export default store
