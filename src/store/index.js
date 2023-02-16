import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
	namespaced:true,
	state:{
		menuData:[]
	},
	getters:{
		menuData(state,rootState){
			if(state.filterMenu){
				const {permissions,roles} = rootState.accout;
				return filterMenu(JSON.parse(JSON.stringfy(state.menuData)),permissions,roles)
			}
			return state.menuData;
		},
		firstMenu(state){
			const {menuData} = state;
			if(menuData.length>0&&!menuData[0].fullPath){
				formatFullPath(menuData);
			}
			return menuData.map(item=>{
				const menuItem = {...item};
				delete menuItem.children;
				return menuItem
			})
		},
		subMenu(state){
			const {menuData,activateFirst} = state;
			if(menuData.length>0&&!menuData[0].fullPath){
				formatFullPath(menuData);
			}
			const current = menuData.find(menu=>menu.fullPath== activatedFirst);
			return current && current.chilren||[]
		}
	},
	mutations:{
		setMenuData(state,menuData){
			state.menuData = menuData;
		}
	}
}