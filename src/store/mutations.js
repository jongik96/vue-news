export default {
  SET_NEWS(state, news) {
    // 2번째 인자는 actions/fetchNewsList/context 의 두번째 인자
    state.news = news;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_ASK(state, ask) {
    state.ask = ask;
  },
};