<template>
  <div>
      <div v-for="news in this.$store.state.news" :key="news.id" >{{news.title}}</div>
  </div>
</template>

<script>
export default {
  created(){
    // vuex 에서 NewsList 가져오기
    this.$store.dispatch('FETCH_NEWS')
    .then(() => console.log('success'))
    .catch(() => console.log('fail'));

  }
}
</script>

<style>

</style>