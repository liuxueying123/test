<template>
  <div>
    <ul class="store-list-box">
      <li class="store-list" v-for="obj in list" :key="obj.id">
        <img class="store-img" :src="obj.img" alt="" />
        <div class="store-info">
          <h2>{{ obj.name }}</h2>
          <div>
            <Star :num="parseFloat(obj.score)"></Star>
          </div>
          <div>配送时间:{{ obj.minute }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Star from "@/components/Star"
export default {
  data() {
    return {
      list: [],
      pageNum:0
    };
  },
  components:{
    Star
  },
     methods:{
         getData(){
             axios.get("http://admin.gxxmglzx.com/tender/test/get_store?current="+this.pageNum+"&size=10")
             .then((res)=>{
                 console.log(res);
                 this.list = [...this.list,...res.data.data.list];
                 this.pageNum++
             }).catch((err)=>{
                 console.log(err);
             })
         }
     },
  created() {
    this.getData()
      window.onscoll = () =>{
        let scollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let scollHeight = document.documentElement.scollHeight;
        if(clientHeight + scollTop == scollHeight){
           this.getData()
        }
      }
  },
};
</script>

<style lang="scss" scoped>
.store-list-box {
  padding: 0.2rem;
  .store-list {
    display: flex;
  }
  .store-img {
    width: 1.52rem;
  }
  .store-info {
    flex: 1;
  }
}
</style>