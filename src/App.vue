<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
    components: { ToolBar }
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
