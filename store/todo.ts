const state = () => ({
  baseUrl: 'https://jsonplaceholder.typicode.com'
})

const actions = {
  async index({ state }: any) {
    try {
      const res = await (<any>this).$axios.get(`${state.baseUrl}/todos`);

      return res.data;
    } catch(err) {
      return err;
    }
  },
  async show({ state }: any, payload: { id: string }) {
    try {
      const res = await (this as any).$axios.get(`${state.baseUrl}/todos/${payload.id}`);

      return res.data;
    } catch(err) {
      return err;
    }
  }
}

export default { state, actions };