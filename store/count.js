const state = () => ({
  index: 0
})

const mutations = {
  increase(state, payload) {
    state.index++;
  },
  decrease(state, payload) {
    state.index--;
  },
}

const actions = {}

export default { state, mutations, actions };