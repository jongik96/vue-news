<template>
  <div>
      <div v-for="ask in fetchedAsk" :key="ask.id" >{{ask.title}}</div>
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