import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        console.log(response.data);
        context.commit("SET_NEWS", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then((response) => {
        console.log(response.data);
        commit("SET_JOBS", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then((response) => {
        console.log(response.data);
        commit("SET_ASK", response.data);
        //state.news = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, userId) {
    fetchUserInfo(userId)
      .then(res => {
        commit('SET_USER', res.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchCommentItem(itemId)
      .then(res => {
        commit('SET_ITEM', res.data);
      }).catch(error => {
        console.log(error);
    })
  },
  FETCH_LIST({ commit },pageName) {
    fetchList(pageName)
      .then(({ data }) => {
        commit('SET_LIST',data)
      })
      .catch(error => {
        console.log(error);
    })
  }
};
