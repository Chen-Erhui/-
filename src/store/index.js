import Vue from 'vue'
import Vuex from'vuex'
import http from 'axios'
Vue.use(Vuex)

const state={
	list:{},
}

const actions={
	/*获取列表并且传给数据库*/
	getlist({commit}){
		let url="http://localhost:8081/list"
		http.get(url).then(function(data){
			commit('GETLIST',data.data)
		})
	},
	
	toxq({commit},item){
		let url='http://m.kaolafm.com/webapi/audios/list?id='+ item.id +'&pagesize=15&pagenum=1&sorttype=1'
		//let url1='http://10.3.157.234:8081/list'
		var obj;
		http.get(url)
		  .then((data)=>{
		  	commit('TOXQ', data.data)
		  	obj=data.data
		  	let url2='http://10.3.157.234:8081/list'
		  	http.get(url2)
		  	  .then(function(data){
		  	  	data.data={}
		  	  	http.post(url2,obj)
		  	  	commit('TOXQ', data.data)
		  	  })
		  })
	},
	play({commit},item){
		let url='http://10.3.157.234:8081/active_play'
		commit('PLAY', obj)
		var obj=item;
		http.get(url)
		  .then(function(data){
		  	data.data={}
		  	http.post(url,obj)
		  	commit('PLAY', obj)
		  })
	}
}

const mutations={
	TOXQ(state,item){
		state.list=item
//		console.log(state.list)
	},
	GETLIST(state,item){
		state.list=item
	},
	PLAY(state,item){
		state.active_play=item
	}
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})