<template>
  <div>
      <div v-for="item in this.$store.state.jobs" :key="item.id">{{item.title}}</div>
  </div>
</template>

<script>

export default {
  created(){
    this.$store.dispatch('FETCH_JOBS')
    .then(() => console.log('success'))
    .catch(() => console.log('fail'));
  }
}
</script>

<style>

</style>