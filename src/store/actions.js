import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from "../api/index.js";

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       console.log(response.data);
  //       context.commit("SET_NEWS", response.data);
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit("SET_NEWS", response.data);
    return response;
  },

  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then((response) => {
  //       console.log(response.data);
  //       commit("SET_JOBS", response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit("SET_JOBS", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // api/index.js 에서 에러처리 미리 함
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList()
    commit("SET_ASK", response.data);
    return response;
  },

  FETCH_USER({ commit }, userId) {
    return fetchUserInfo(userId)
      .then((res) => {
        commit("SET_USER", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchCommentItem(itemId)
      .then((res) => {
        commit("SET_ITEM", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName)
    commit("SET_LIST", response.data);
    return response;
  },
};
