export default {
    namespaced: true,
    state: {

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
    }
}