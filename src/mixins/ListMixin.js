import Bus from '../utils/bus.js';
export default {
    // 재사용할 컴포넌트 옵션
   created(){
     Bus.$emit("start:spinner");
     setTimeout(() => {
       this.$store
         .dispatch("FETCH_LIST", this.$route.name)
         .then(() => {
           console.log("fetched");
           Bus.$emit("end:spinner");
         })
         .catch((err) => {
           console.log(err);
         });
       Bus.$emit("end:spinner");
     }, 3000);
   }
}