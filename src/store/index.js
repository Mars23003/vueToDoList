import { createStore } from 'vuex'

export default createStore({
  state: {
    todo: [
      {
        id: 1,
        item: '閱讀',
        done: false,
      },
      {
        id: 2,
        item: '健身',
        done: false,
      },
      {
        id: 3,
        item: '登山',
        done: false,
      },
    ]
  },
  mutations: {
    newItem(state, todoItem) {
      state.todo.push({
        item: todoItem,
        done: false,
      })
    }
  },
  actions: {
    addNew({ commit }, todoItem) {
      commit('newItem', todoItem)
    }
  },
  modules: {
  }
})
