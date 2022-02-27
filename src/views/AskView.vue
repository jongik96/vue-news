<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <!-- point -->
        <div class="points">
          {{item.points}}
        </div>
        <!-- 기타 -->
        <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">
              {{item.title}}
            </router-link>
          </p>
          <small class="link-text">
            {{item.time_ago}} by
            <router-link :to="`/user/${item.user}`" class="link-text">
              {{item.user}}
            </router-link>  
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex';
export default {
  created(){
    this.$store.dispatch('FETCH_ASK')
    .then(() => console.log('success'))
    .catch(() => console.log('fail'));
  },
  computed: {
    // #1
    ...mapGetters({
      fetchedAsk : 'fetchedAsk'
    })

    // #1-2
    // ...mapGetters([
    //   'fetchedAsk'
    // ]),
    
    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })

    // #3
    // ask(){
    //   return this.$store.state.ask;
    // }
  }
}
</script>

<style scoped>
.news-list{
  margin: 0;
  padding: 0;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items:center;
  justify-content: center;
  color: orange
}
.news-title{
  margin: 0;
}

.link-text{
  color:orangered
}
</style>