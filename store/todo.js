const actions = {
  async index(context, payload) {
    try {
      const res = await this.$axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: payload
      });

      return res.data;
    } catch(err) {

      return err;
    }
  },
  async show(context, payload) {
    console.log('show');

    try {
      const res = await this.$axios.get(`https://jsonplaceholder.typicode.com/todos/${payload.id}`);

      return res.data;
    } catch(err) {

      return err;
    }
  }
}

export default { actions };