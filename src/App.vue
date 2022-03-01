<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import Bus from './utils/bus.js'
export default {
    components: { ToolBar, Spinner },
    data(){
      return{
        loadingStatus: false,
      }
    },
    methods:{
      startSpinner(){
        this.loadingStatus = true;
      },
      endSpinner(){
        this.loadingStatus = false;
      }
    },
    created(){
      console.log(process.env.VUE_APP_TITLE)
      Bus.$on('start:spinner', this.startSpinner);
      Bus.$on('end:spinner', this.endSpinner)
    },
    beforeDestroy() {
      Bus.$off('start:spinner', this.startSpinner);
      Bus.$off('end:spinner', this.endSpinner);
    },
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}

a {
  color: gray;
  text-decoration: none;
}

a:hover {
  color:orangered;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

/* router transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity:0;
}
</style>
