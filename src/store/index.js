import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import todos from './modules/todos'
import createPersistedState from 'vuex-persistedstate'  //数据持久化插件

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        todos
    },
    state: () => ({

        // -------------------登录------------------
        // 存储登录信息
        // userName: sessionStorage.getItem("userName") ? sessionStorage.getItem("userName") : '',
        // token: sessionStorage.getItem("token") ? sessionStorage.getItem("token") : '',
        userName: '',
        token:''

    }),

    mutations: {

        // -------------------登录------------------
        changeLogin(state, userInfo) {
            state.userName = userInfo.userName
            state.token = userInfo.token
            window.sessionStorage.setItem("token", userInfo.token)
            // window.sessionStorage.setItem("userName", userInfo.userName)
        },

    },
    actions: {

        // -------------------登录------------------
        async login(context, userForm) {
            const { data: res } = await axios.post("login", userForm)
            if (res.code !== 1) return res.msg
            const userInfo = {
                userName: res.data.userName,
                token: res.data.token
            }
            context.commit('changeLogin', userInfo)
            return res.msg
        }

    },
    plugins:[createPersistedState()]
})