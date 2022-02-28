<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
// import {  mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue'
// import Bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin';
export default {
  components:{
    ListItem,
  },
  mixins: [ListMixin]
  // created(){
  //   Bus.$emit('start:spinner');
  //   setTimeout(()=>{
  //     this.$store.dispatch('FETCH_ASK')
  //     .then(()=>{
  //       console.log('fetched');
  //       Bus.$emit('end:spinner');
  //     })
  //     .catch(err=>{
  //       console.log(err);
  //     });
  //     Bus.$emit('end:spinner');
  //   }, 3000);
  // }
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
