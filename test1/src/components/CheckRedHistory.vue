<template>
    <div class="red_history">
      <!--  头部  -->
      <div class="first_line">
        <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
        <span class="title_name">历史红包</span>
      </div>

      <!--  每一个红包   -->
      <div class="red_content" v-for="(v,index) in expireRedData">
          <span class="red_left pull-left">
            <p class="v_icon">￥<span class="v_amount">{{v.amount}}</span>元</p>
            <p class="v_description_mapsum_condition">{{v.description_map.sum_condition}}</p>
          </span>
        <span class="red_right pull-left">

              <li class="v_name">{{v.name}}</li>
              <li class="v_description_map_validity_delta">{{v.end_date}}到期</li>
              <li class="names">限货手机号为{{names}}</li>

          <li v-if="v.limit_map" class="v_limit_map_restaurant_flavor_ids pull-left">{{v.limit_map.restaurant_flavor_ids}}</li>
          </span>

      </div>
    </div>
</template>

<script>
  import Vue from "vue"
    export default {
      name: "CheckRedHistory",
      data(){
        return{
          expireRedData:[],
          names:"",
        }
      },
      methods:{
        goBack(){
          window.history.go(-1);
        },
      },
      created(){
        //   获取 限货手机号
        this.names = this.$store.state.a.message;
        let abc = this.$store.state;
        //    获取  过期红包数据
        Vue.axios.get("https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=5&offset=0").then((result)=>{
          console.log(result.data);
          this.expireRedData = result.data;

        }).catch((error)=>{
          console.log(error);
        })
      }
    }
</script>

<style scoped>
  .red_history{
    background:  #f5f5f5;
    height: 100%;
  }
  .first_line{
    line-height: 4rem;
    text-align: center;
    background: #3190e8;
    width: 100%;
  }
  .arrow-left{
    line-height: 4rem;
    color: white;
    font-size: 2rem;
  }
  .title_name{
    color: white;
    font-size: 2rem;
    text-align: center;
  }
  /*   红包内容  */
  .red_content{
    display: flex;
    align-items: center;
    width: 96%;
    background: white;
    margin-left: 2%;
    margin-bottom: 1rem;
    margin-top: 3%;
    border-radius: 0.8rem;
    border-top: 0.25rem dashed gainsboro;
    padding: 1rem 1.2rem 1rem 1.2rem;
    height:8rem;
  }
  .red_left{
    vertical-align: middle;
    border-right: 0.05rem dotted #ccc;
    padding-right: 1rem;
    margin-right: 1.5rem;
  }
  .v_icon{
    color: gainsboro;
  }
  /*   1.0  */
  .v_amount{
    font-size: 3rem;
  }
  /*   满20元可用  */
  .v_description_mapsum_condition{
    margin-top: -1rem;
  }
</style>
