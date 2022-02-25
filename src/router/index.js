import Vue from 'vue';
import VueRouter from "vue-router"
import { AskView } from '../views/AskView.vue'
import { NewsView } from '../views/NewsView.vue'
import { JobsView } from "../views/JobsView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
        {
            // path : url 주소
          path: "/news",
            // component: url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: "/ask",
            component: AskView,
        },
        {
            path: "/jobs",
            component: JobsView,
        },
  ],
});

