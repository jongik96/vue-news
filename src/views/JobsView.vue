<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import Bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin';
export default {
  components: { ListItem },
  mixins: [ListMixin]
  // mounted(){
  //   Bus.$emit("end:spinner");
  // }
  // created(){
  //   Bus.$emit('start:spinner');
  //   setTimeout(()=>{
  //     this.$store.dispatch('FETCH_JOBS')
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
}
</script>