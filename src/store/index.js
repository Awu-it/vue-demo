import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        // -------------------登录------------------
        // 存储登录信息
        userName: sessionStorage.getItem("userName") ? sessionStorage.getItem("userName") : '',
        token: sessionStorage.getItem("token") ? sessionStorage.getItem("token") : '',


        // ------------------------  Vuex 任务列表案例 -------------------
        // 所有任务列表
        list: [
            {
                id: 1,
                info: '元气满满~',
                done: false
            }
        ],
        // 文本框的内容
        inputValue: '',
        // 下一个Id
        nextId: 2,
        // 列表底部选中项
        viewKey: 'all'
    },

    mutations: {

        // -------------------登录------------------
        changeLogin(state, userInfo) {
            state.userName = userInfo.userName
            state.token = userInfo.token
            window.sessionStorage.setItem("token", userInfo.token)
            window.sessionStorage.setItem("userName", userInfo.userName)
        },

        // ------------------------  Vuex 任务列表案例 -------------------
        // 为inputValue赋值
        setInputValue(state, val) {
            state.inputValue = val
        },
        // 添加列表项
        addItem(state) {
            const obj = {
                id: state.nextId,
                info: state.inputValue.trim(),
                done: false
            }
            state.list.push(obj)
            state.nextId++
            state.inputValue = ''
        },
        // 删除列表项
        removeItem(state, id) {
            const i = state.list.findIndex(x => x.id === id)
            if (i !== -1) {
                state.list.splice(i, 1)
            }
        },
        // 修改列表项的选中状态
        changeStatus(state, param) {
            const i = state.list.findIndex(x => x.id === param.id)
            if (i !== -1) {
                state.list[i].done = param.status
            }
        },
        // 修改列表底部选中项
        changeViewKey(state, key) {
            state.viewKey = key
        },
        // 清除已完成的任务
        cleanDone(state) {
            state.list = state.list.filter(x => x.done === false)
        },
    },
    getters: {
        
        // ------------------------  Vuex 任务列表案例 -------------------
        //统计未完成的任务条数
        unDoneLength(state) {
            return state.list.filter(x => x.done === false).length
        },
        infolist(state) {
            if (state.viewKey === 'all') {
                return state.list
            }
            if (state.viewKey === 'undone') {
                return state.list.filter(x => !x.done)
            }
            if (state.viewKey === 'done') {
                return state.list.filter(x => x.done)
            }
            return state.list
        }
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

    }
})