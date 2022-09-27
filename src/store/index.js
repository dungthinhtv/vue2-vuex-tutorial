import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
// import auth from './modules/auth'
// import todos from './modules/todos'

Vue.use(Vuex)

const storeData = {
  // modules: {
  //   auth,
  //   todos,
  // },

  state: {
    todos: [
      { id: 1, title: 'Viec 1', completed: true },
      { id: 2, title: 'Viec 2', completed: false },
      { id: 3, title: 'Viec 3', completed: false },
    ],
    auth: {
      isAuthenticated: false,
    },
  },
  getters: {
    isAuthenticated: (state) => state.auth.isAuthenticated,
    todos: (state) => state.todos,
    doneTodos: (state, getters) => getters.todos.filter((todo) => todo.completed),
    progress: (state, getters) => {
      return Math.round((getters.doneTodos.length / getters.todos.length) * 100)
    },
  },
  actions: {
    // deleteTodo(context, todoId) {
    //   context.commit('DELETE_TODO', todoId)
    // },
    deleteTodo({ commit }, todoId) {
      commit('DELETE_TODO', todoId)
    },
  },
  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated
    },
    MARK_COMPLETE(state, todoId) {
      state.todos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed
        return todo
      })
    },
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id != todoId)
    },
  },
}

const store = new Vuex.Store(storeData)

export default store
