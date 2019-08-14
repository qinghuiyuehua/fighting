<template>
    <div class="member_center">
      <!--  头部  -->
      <div class="first_line">
        <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
        <span class="title_name">会员中心</span>
      </div>
      <!--   main  -->
      <div class="main">
        <p class="p1">为账户<span class="p1_span">{{names}}</span>购买的会员</p>
        <!--   会员特权  -->
        <div class="membership_privileges">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight"
          >
          <router-link :to="{path:'/memberdescribe'}" class="aa">
              <li class="membership_privileges_first_line">
                <span class="span_1">会员特权</span>
                <van-icon name="arrow" class="arrow-right_1 pull-right"/>
                <span class="span_2 pull-right">会员说明</span>
              </li>
            </router-link>
         </transition>
          <li class="two_line">
            <img src="../img/1.png">
            <div class="vip_detail_right pull-left">
              <h4>减免配送费</h4>
              <p class="h4_p">每月减免30单，每日可减免3单，每单最高减4元</p>
              <p class="h4_p">蜂鸟专送专享</p>
            </div>

          </li>
          <li class="three_line">
            <img src="../img/2.png">
            <div class="vip_detail_right pull-left" >
              <h4>减免配送费</h4>
              <p class="h4_p">每月减免30单，每日可减免3单，每单最高减4元</p>
              <p class="h4_p">蜂鸟专送专享</p>
            </div>
          </li>
        </div>
        <!--   开通会员  -->
        <ul class="open_member">
          <li class="open_member_head">开通会员</li>
          <li class="open_member_two">
            <span class="open_text">1个月</span>
            <span class="open_price">￥20</span>
            <router-link :to="{path:'/onlinepayment'}">
              <button class="open_buy_btn pull-right">购买</button>
            </router-link>
          </li>
        </ul>
        <!--   兑换会员  -->
        <ul class="exchange_member">
        <router-link :to="{path:'/usecardnumber'}">
          <li>
            <span class="exchange_member_left">兑换会员</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
            <span class="exchange_member_right pull-right">使用卡号加密</span>
          </li>
        </router-link>

        </ul>
        <!--   购买记录  -->
        <ul class="exchange_member">
          <router-link :to="{path:'/writeaninvoice'}">
            <li>
              <span class="exchange_member_left">购买记录</span>
              <van-icon name="arrow" class="arrow-right pull-right"/>
              <span class="exchange_member_right pull-right">开发票</span>
            </li>
          </router-link>

        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "MemberCenter",
      data(){
        return{
          names:"",
        }
      },
      methods:{
        goBack(){
          window.history.go(-1);
        },
      },
      created(){
        this.names = this.$store.state.a.message;
        let abc = this.$store.state;
        // console.log(abc);
      }
    }
</script>

<style scoped>
  .member_center{
    background-color: #f5f5f5;
    height: 100%;
    width: 100%;
  }
  /*  头部  */
  .first_line{
    line-height: 4rem;
    text-align: center;
    background: #3190e8;
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
  /*   main   */
  .p1{
    margin: 1.5rem 0 1rem 1rem;
  }
  .p1_span{
    font-weight: 800;
  }
  /*   会员特权  */
  .membership_privileges{
    background: white;
    width: 100%;
  }
  li{
    padding: 0 1rem 0 0;
    margin-left: 1rem;
  }
  .membership_privileges_first_line{
    line-height: 3rem;
    padding: 0.5rem 1rem 0.5rem 0;
  }
  .span_1{
    font-size: 1.8rem;
  }
  .span_2{
    line-height: 3rem;
  }
  .arrow-right_1{
    line-height: 3rem;
    margin-left: 0.5rem;
  }
  .two_line{
    line-height: 6rem;
    border-top: 0.04rem solid gainsboro;
    border-bottom: 0.04rem solid gainsboro;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  img{
    width: 3rem;
    vertical-align: top;
    margin-left: -25rem;
    margin-top: 0.5rem;
  }
  .vip_detail_right{
    line-height: 0.5rem;
    margin-left: 4rem;
  }
  .h4_p{
    font-size: 0.5rem;
  }
  .three_line{
    line-height: 6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  /*   开通会员  */
  .open_member{
    margin-top: 1rem;
    background: white;
  }
  .open_member_head{
    font-size: 1.8rem;
    line-height: 3rem;
  }
  /*   1 个月  ￥20     购买按钮*/
  .open_member_two{
    line-height: 6rem;
    border-top: 0.04rem solid gainsboro;
  }
  .open_text{
    font-size: 1.8rem;
  }
  .open_price{
    font-weight: 700;
    color: #f60;
    font-size: 1.8rem;
  }
  .open_buy_btn{
    border: 0.05rem solid #f60;
    color: #f60;
    width: 6rem;
    background: white;
    border-radius: 0.5rem;
    padding: 0rem 0.3rem 0rem 0.3rem;
    line-height: 2.5rem;
    margin-top: 1.5rem;
  }
  /*   兑换会员  */
  .exchange_member{
    margin-top: 1rem;
    background: white;
  }
  .exchange_member_left{
    font-size: 1.8rem;
    line-height: 4rem;
  }
  .exchange_member_right{
    line-height: 4rem;
  }
  .arrow-right{
    margin-left: 0.5rem;
    line-height:4rem;
  }
</style>
