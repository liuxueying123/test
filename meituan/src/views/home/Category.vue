<template>
    <div>
        <ul class="list-box">
            <li class="list" v-for="obj in list" :key="obj.id" >
                <!-- 动态绑定 -->
                <img :src="obj.img" alt=""> 
                <p>{{obj.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                list:[]
            }
        },
        created(){
            axios.get("http://admin.gxxmglzx.com/tender/test/get_type")
            .then((res)=>{//成功
                //axios 返回的数据 res.data
                // console.log(res.data.data)
                if(res.data.errcode == 200){
                    this.list = res.data.data;
                }
            }).catch(()=>{//失败

            })
        }
    }
</script>

<style lang="scss" scoped>
.list-box{
    display: flex;
    flex-wrap: wrap;
}
.list{
    width: 20%;
    text-align: center;
    margin-top: 0.3rem;
}
.list img{
    width: 60%;
}
</style>