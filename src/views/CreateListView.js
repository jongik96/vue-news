import ListView from './ListView.vue';
import Bus from '../utils/bus.js';
export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션
        name,
        created() {
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
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}