<template>
  <div>
    <p v-for="item in fetchedJobs" :key="item.id" >
      <a :href="item.url">
        {{item.title}}
      </a>
      <small>{{item.time_ago}} {{item.domain}}</small>
    </p>
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

<style>

</style>