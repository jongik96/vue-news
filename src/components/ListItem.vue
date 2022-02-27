<template>
    <div>
        <ul class="news-list">
        <li v-for="item in listItems" :key="item.id" class="post">
            <!-- point -->
            <div class="points">
            {{item.points || 0}}
            </div>
            <!-- 기타 -->
            <div>
                <!-- 타이틀 -->
                <p class="news-title">
                    <template v-if="item.domain">
                        <a v-bind:href="item.url">
                            {{item.title}}
                        </a>
                    </template>
                    <template v-else>
                        <router-link v-bind:to="`item/${item.id}`">
                            {{item.title}}
                        </router-link>
                    </template>
                </p>
                <small class="link-text">
                    {{item.time_ago}} by
                    <router-link
                    v-if="item.user"
                     :to="`/user/${item.user}`" class="link-text">
                    {{item.user}}
                    </router-link>  
                    <a :href="item.url" v-else>{{item.domain}}</a>
                </small>
            </div>
        </li>
        </ul>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  created(){
    // vuex 에서 NewsList 가져오기
    // this.$store.dispatch('FETCH_NEWS')
    // .then(() => console.log('success'))
    // .catch(() => console.log('fail'));

    // 분기 처리
    const name = this.$route.name;
    if(name === 'news'){
        this.$store.dispatch('FETCH_NEWS')
    }else if (name === 'ask'){
        this.$store.dispatch('FETCH_ASK')
    }else if (name ==='jobs'){
        this.$store.dispatch('FETCH_JOBS')
    }


  },
  computed: {
    listItems(){
        const name = this.$route.name;
        if(name === 'news'){
            return this.$store.state.news;
        }else if (name === 'ask'){
            return this.$store.state.ask;
        }else if (name ==='jobs'){
            return this.$store.state.jobs;
        }
    }
    // ...mapGetters([
    //   'fetchedNews'
    // ])
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