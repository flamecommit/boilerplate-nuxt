const state = () => ({
  index: 0
})

const mutations = {
  increase(state: {index: number}) {
    state.index++;
  },
  decrease(state: {index: number}) {
    state.index--;
  },
}

const actions = {}

export default { state, mutations, actions };