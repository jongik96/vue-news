<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
// import {  mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue'
export default {
  components:{
    ListItem,
  },
  // created(){
  //   this.$store.dispatch('FETCH_ASK')
  //   .then(() => console.log('success'))
  //   .catch(() => console.log('fail'));
  // },
  // computed: {
  //   // #1
  //   ...mapGetters({
  //     fetchedAsk : 'fetchedAsk'
  //   })

  //   // #1-2
  //   // ...mapGetters([
  //   //   'fetchedAsk'
  //   // ]),
    
  //   // #2
  //   // ...mapState({
  //   //   fetchedAsk: state => state.ask
  //   // })

  //   // #3
  //   // ask(){
  //   //   return this.$store.state.ask;
  //   // }
  // }
}
</script>

