<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedNews" :key="item.id" class="post">
        <!-- point -->
        <div class="points">
          {{item.points}}
        </div>
        <!-- 기타 -->
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{item.title}}
            </a>
          </p>
          <small class="link-text">
            by
            <router-link :to="`/user/${item.user}`" class="link-text">
              {{item.user}}
            </router-link>  
          </small>
        </div>
        <!-- <a v-bind:href="item.url">
        {{item.title}}
        </a>
        <small>
          {{item.time_ago}}
          by
          <router-link :to="`/user/${item.user}`">
            {{item.user}}
          </router-link>
        </small> -->
      </li>
    </ul>
    <!-- <p v-for="item in fetchedNews" :key="item.id" >
      <a v-bind:href="item.url">
        {{item.title}}
      </a>
      <small>
        {{item.time_ago}}
        by
        <router-link :to="`/user/${item.user}`">
          {{item.user}}
        </router-link>
      </small>

    </p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  created(){
    // vuex 에서 NewsList 가져오기
    this.$store.dispatch('FETCH_NEWS')
    .then(() => console.log('success'))
    .catch(() => console.log('fail'));
  },
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
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