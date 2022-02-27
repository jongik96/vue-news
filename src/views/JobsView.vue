<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedJobs" :key="item.id" class="post">
        <!-- point -->
        <div class="points">
          {{item.points || 0}}
        </div>
        <!-- 기타 -->
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{item.title}}
            </a>
          </p>
          <small class="link-text">
            {{item.time_ago}} by
            <a :href="item.url">{{item.domain}}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  created(){
    this.$store.dispatch('FETCH_JOBS')
    .then(() => console.log('success'))
    .catch(() => console.log('fail'));
  },
  computed: {
    ...mapState({
      fetchedJobs: state => state.jobs
    })
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