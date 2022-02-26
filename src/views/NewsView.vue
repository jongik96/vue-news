<template>
  <div>
    <p v-for="item in fetchedNews" :key="item.id" >
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

    </p>
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

<style>

</style>