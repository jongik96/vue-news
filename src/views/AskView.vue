<template>
  <div>
    <p v-for="item in this.$store.state.ask" :key="item.id" >
      <router-link :to="`/item/${item.id}`">
        {{item.title}}
      </router-link>
      <small>{{item.time_ago}} {{item.domain}}</small>
    </p>
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

<style>

</style>