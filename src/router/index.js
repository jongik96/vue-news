import Vue from 'vue';
import VueRouter from "vue-router"
import AskView from '../views/AskView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import Bus from '../utils/bus.js';
import { store } from '../store/index.js'
// import createListView from "../views/CreateListView.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      // path : url 주소
      path: "/news",
      name: "news",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
      // component: createListView("NewsView"),
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");

        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            Bus.$emit("end:spinner");
            next();
          })
          .catch((err) => {
            console.log(err);
          });
        
        // console.log('to', to);
        // console.log('from', from);
        // console.log(next);
        // if (to.auth) {
        //   next();  
        // } else {
        //   router.replace('/login');
        // }
        
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      // component: createListView("AskView"),
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");

        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            // Bus.$emit("end:spinner");
            next();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");

        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // console.log("fetched");
            // Bus.$emit("end:spinner");
            next();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      // component: createListView("JobsView"),
    },
    {
      path: "/user",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
  ],
});

