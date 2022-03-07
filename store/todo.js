const state = () => ({
  baseUrl: 'https://jsonplaceholder.typicode.com'
})

const actions = {
  async index({ state }, payload) {
    try {
      const res = await this.$axios.get(`${state.baseUrl}/todos`, {
        params: payload
      });

      return res.data;
    } catch(err) {

      return err;
    }
  },
  async show({ state }, payload) {
    try {
      const res = await this.$axios.get(`${state.baseUrl}/todos/${payload.id}`);

      return res.data;
    } catch(err) {

      return err;
    }
  }
}

export default { state, actions };