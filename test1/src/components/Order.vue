<template>
    <div class="order">
      <!--  头部  -->
      <div class="first_line">
        <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
        <span class="title_name">订单列表</span>
      </div>
      <div class="main">
        <div class="restaurant">
          <img src="../img/1.png" class="img pull-left">
          <ul class="right_li">
            <li>
              <span class="li_1_span1">效果演示</span>
              <span class="li_1_span2 pull-right">等待支付</span>
              <!--<span class="li_1_span2 pull-right">支付超时</span>-->
            <p class="li_1_p">{{year}}-{{month}}-{{date}}&#160{{hour}}:{{minute}}</p>
            </li>
            <li class="li_2">
              <span class="li_2_span1">12345676789</span>
              <span class="li_2_span2 pull-right">￥<span>12345</span>元</span>
            </li>
            <li class="li_3 pull-right">去支付还剩下10分60秒</li>
            <!--<li class="li_3 pull-right">再来一单</li>-->
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from "vue"
    export default {
      name: "Order",
      data(){
        return{
          dateWhole: new Date(),
          year: "",
          month: "",
          date: "",
          hour: "",
          minute: "",
          second: "",
        }
      },
      methods:{
        goBack(){
          window.history.go(-1);
        },

      },
      created(){
        // setInterval(function(){
          this.dateWhole = new Date();
        // },500);
        this.year = this.dateWhole.getFullYear();
        this.month = this.dateWhole.getMonth();
        this.date = this.dateWhole.getDate();
        this.hour = this.dateWhole.getHours();
        this.minute = this.dateWhole.getMinutes();

        Vue.axios.get("https://elm.cangdu.org/bos/v2/users/1/orders?limit=10&offset=0").then((result)=>{
          // console.log(result.data);
          result.data.forEach(v=>{
            //  店铺名字
            // console.log(v.restaurant_name);
            //   菜名
            // console.log(v.basket.group[0][0].name);
            //   图片地址
            // console.log('http://elm.cangdu.org/img/'+ v.restaurant_image_url);

          })
        }).catch((error)=>{
          console.log(error);
        })
      }
    }
</script>

<style scoped>
  .order{
    background: #f5f5f5;
    width: 100%;
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
    font-size: 2.3rem;
  }
  .title_name{
    color: white;
    font-size: 2rem;
    font-weight: 600;
  }

  .main{
    /*padding-top: 1rem;*/
  }
  .restaurant{
    padding: 1rem 1rem 4rem 1rem;
    background: white;
    margin-bottom: 1rem;
  }
  .img{
    width: 3rem;
    margin-right: 1rem;
  }
  .right_li{
    line-height: 2rem;
  }
  .li_2{
    border-top: 0.05rem solid #f1f1f1;
    border-bottom: 0.05rem solid #f1f1f1;
    padding:0.5rem 0;
    margin-top: -0.5rem;
    margin-left: 4rem;
  }
  /*   店铺名字   */
  .li_1_span1{
    font-size: 1.5rem;
  }
  .li_1_span2{
    font-size: 1.5rem;
  }
  .li_1_p{
    font-family: Microsoft YaHei;
  }
  .li_2_span1{
    font-size: 1.5rem;
  }
  .li_2_span2{
    color: #ff5f3e;
    font-weight: 600;
  }
  .li_3{
    margin-top: 0.9rem;
    border: 0.05rem solid #f90;
    border-radius: 0.3rem;
    color: #f90;
    padding: 0 0.5rem 0 0.5rem;
  }
</style>
