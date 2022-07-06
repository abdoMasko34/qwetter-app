import axios from 'axios';

export default {
  namespaced: 'true',
  state() {
    return {
      // userId: 'c3',
      qweets: [
        {
          id: 'c1',
          content: 'lorem ipsum dolor sit amet, consect lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore',
          date: '1323345345456',
        },
        {
          id: 'c2',
          content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: '1665654464232',
        },
      ],
    };
  },
  mutations: {
    addTweet(state, qweet) {
      state.qweets.unshift(qweet);
    },
    loadQweets(state, payload) {
      state.qweets = payload;
    },
  },
  actions: {
    async addTweet(context, payload) {
      const userId = 'c3';

      await axios.post('https://qwitter-app-e8a2b-default-rtdb.firebaseio.com/qweets.json', {
        content: payload.content,
        date: payload.date,
      });

      context.commit('addTweet', {
        ...payload,
        id: userId,
      });
    },
    async loadQweets(context) {
      const response = await axios.get('https://qwitter-app-e8a2b-default-rtdb.firebaseio.com/qweets.json')
        .then((res) => res)
        .catch((err) => console.log(err));
      // response.then((res) => res).catch((err) => console.log(err));
      const responseData = await response.data;
      const qweets = [];
      for (const key in responseData) {
        const qweet = {
          id: key,
          content: responseData[key].content,
          date: responseData[key].date,
        };
        qweets.push(qweet);
      }
      context.commit('loadQweets', qweets);
    },
    async deleteQweet(_, qweetId) {
      await axios.delete(`https://qwitter-app-e8a2b-default-rtdb.firebaseio.com/qweets/${qweetId}.json`);
    },
  },
  getters: {
    qweets(state) {
      return state.qweets;
    },
  },
};
