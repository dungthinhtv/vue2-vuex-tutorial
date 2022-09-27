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
      { id: 1, title: 'Viec 1', completed: false },
      { id: 2, title: 'Viec 2', completed: false },
      { id: 3, title: 'Viec 3', completed: false },
    ],
    auth: {
      isAuthenticated: false,
    },
  },
  mutations:{
    TOGGLE_AUTH:{
      this.state.auth.isAuthenticated = !state.auth.isAuthenticated
    }

  }

}

const store = new Vuex.Store(storeData)

export default store
