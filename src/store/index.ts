import { createStore } from 'vuex'

export type IState = {
  count: number
}
const store = createStore({
  state () {
    let state: IState = {
      count: 0
    }
    return state
  },
  mutations: {
    increment (state: IState) {
      state.count++
    }
  }
})

export default store
