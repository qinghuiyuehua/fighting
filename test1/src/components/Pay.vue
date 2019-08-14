<template>
  <div class="confirmOrderContainer">
    <section>
      <!--表头-->
      <van-nav-bar
        title="确认订单"
        right-text="个人"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <!--收货地址-->
      <div class="address_container" @click="goaddress">
        <div class="address_empty_left">
          <van-icon name="location-o" />
          <div class="address_detail_container">
            <header>
              <!--用户名-->
              <span style="font-size: 2rem;font-weight: 600">{{newaddress[0].name}}先生</span>
              <!--手机号-->
              <span>{{newaddress[0].phone1}}</span>
              <!--地址-->
              <p>
                <span style="background: lightgreen;color: white">公司</span>
                <span>{{newaddress[0].address2}}</span>
              </p>
            </header>
          </div>
        </div>
        <van-icon name="arrow" />
      </div>
      <!--送达时间-->
      <section class="delivery_model container_style">
        <p class="deliver_text">送达时间</p>
        <section class="deliver_time">
          <p>尽快送达|预计20:50</p>
          <p>蜂鸟专达</p>
        </section>
      </section>
      <!--支付方式-->
      <section class="pay_way container_style">
        <header class="header_style">
          <span>支付方式</span>
          <div class="more_type">
            <span>在线支付</span>
            <van-icon name="arrow" />
          </div>
        </header>
        <section class="hongbo">
          <span>红包</span>
          <span>暂时只在饿了么 APP 中支持</span>
        </section>
      </section>
      <!--订单内容-->
      <section class="food_list">
        <header>
          <img src="../img/autumn.gif" alt="">
          <span>未完待续</span>
        </header>
        <ul class="food_list_ul">
          <li class="food_item_style">
            <p class="food_name ellipsis">我们去大草原的湖边</p>
            <div class="num_price">
              <span>X1</span>
              <span>30</span>
            </div>
          </li>
        </ul>
        <div class="food_item_style">
          <p class="food_name ellipsis">餐盒</p>
          <div class="num_price">
            <span>0</span>
            <span>0</span>
          </div>
        </div>
        <div class="food_item_style">
          <p class="food_name ellipsis">配送费</p>
          <div class="num_price">
            <span>0</span>
            <span>0</span>
          </div>
        </div>
        <div class="food_item_style total_price">
          <p class="food_name ellipsis">订单￥666</p>
          <div class="num_price">
            <span>待支付￥666</span>
          </div>
        </div>
      </section>
      <!--备注，发票-->
      <section>
        <!--订单-->
        <!--<div class="header_style">-->
          <!--<span>订单备注</span>-->
          <!--<div class="more_type">-->
            <!--<span class="ellipsis">口味、偏好等</span>-->
            <!--<van-icon name="arrow" />-->
          <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash;发票&ndash;&gt;-->
        <!--<div class="hongbo support_is_available">-->
          <!--<span>发票抬头</span>-->
          <!--<div class="more_type">-->
            <!--<span class="ellipsis">{{}}</span>-->
            <!--<van-icon name="arrow" />-->
          <!--</div>-->
        <!--</div>-->
      </section>
      <!--尾部-->
      <section class="confrim_order">
        <p>待支付￥{{}}</p>
        <p>确认下单</p>
      </section>
    </section>
    <div class="a"></div>
  </div>
</template>


<script>
  export default {
    name: "Settlement",
    data(){
      return{
        newaddress:"",
      }
    },
    methods:{
      onClickLeft() {
        this.$router.go(-1);
      },
      onClickRight() {
        this.$router.push({path:"/mine"})
      },
      goaddress(){
        this.$router.push({path:"/caraddress"})
      }
    },
    created(){
      this.newaddress = this.$store.state.a.newaddress1;
      console.log(this.newaddress)

      this.$http({
        method: 'get',
        url: "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+ this.id,
      }).then(res => {
        console.log(res.data);
        this.good = res.data;
        // for(var i in res.data){
        //   var fArr = [];
        //   for (var j in res.data[j].foods) {
        //     var sArr = [];
        //     fArr.push(sArr)
        //   }
        //   this.arr.push(fArr)
        // }
        // console.log(this.arr)
        // this.$store.commit("getCarGoodNum",res.data);
      });
    },
  }
</script>


<style scoped>
  .confirmOrderContainer {
    padding-top: 1.95rem;
    padding-bottom: 3rem;
  }
  .van-nav-bar {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
  }
  .van-icon-arrow-left{
    color: #fff;
    font-size: 2.5rem;
  }
  .van-nav-bar__text{
    color: #fff;
    font-size: 1.8rem;
  }
  .van-nav-bar__title{
    font-size: 2rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
  .address_container {
    margin-top: 2.5rem;
    min-height: 3.5rem;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 .6rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR…iSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) 0 100% repeat-x;
    background-color: #fff;
    background-size: auto .12rem;
  }
  .address_container .address_empty_left, .address_container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }
  .address_container .address_empty_left .address_detail_container {
    margin-left: .2rem;
  }
  .address_container .address_empty_left .address_detail_container header {
    font-size: .65rem;
    color: #333;
  }
  .address_container .address_empty_left .address_detail_container header span:first-of-type {
    font-size: .8rem;
    font-weight: 700;
  }
  .address_container .address_empty_left .address_detail_container .address_detail {
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }
  .address_container .address_empty_left .address_detail_container .address_detail span {
    font-size: .5rem;
    color: #fff;
    border-radius: .15rem;
    background-color: #ff5722;
    height: .6rem;
    line-height: .6rem;
    padding: 0 .2rem;
    margin-right: .3rem;
  }
  .address_container .address_empty_left .address_detail_container .address_detail p {
    font-size: .55rem;
    color: #777;
  }
  .delivery_model {
    border-left: .2rem solid #3190e8;
    min-height: 4rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }
  .delivery_model .deliver_text {
    font-size: .8rem;
    color: #333;
    font-weight: 700;
    padding-left: .3rem;
  }
  .delivery_model .deliver_time {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .delivery_model .deliver_time p:first-of-type {
    font-size: .7rem;
    color: #3190e8;
  }
  .delivery_model .deliver_time p:nth-of-type(2) {
    font-size: .5rem;
    color: #fff;
    background-color: #3190e8;
    width: 2.4rem;
    margin-top: .5rem;
    text-align: center;
    border-radius: .12rem;
    padding: .1rem;
  }
  .container_style {
    background-color: #fff;
    margin-top: .4rem;
    padding: 0 .7rem;
  }
  .pay_way .header_style {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 2rem;
  }
  .pay_way .header_style span:first-of-type {
    font-size: .7rem;
    color: #666;
  }
  .pay_way .header_style .more_type span:first-of-type {
    font-size: .6rem;
    color: #aaa;
    width: 10rem;
    display: inline-block;
    text-align: right;
    vertical-align: middle;
  }
  .pay_way .hongbo {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-top: .025rem solid #f5f5f5;
  }
  .pay_way .hongbo span {
    font-size: .6rem;
    color: #aaa;
    line-height: 2rem;
  }
  .food_list {
    background-color: #fff;
    margin-top: .4rem;
  }
  .food_list header {
    padding: .7rem;
    border-bottom: .025rem solid #f5f5f5;
  }
  .food_list header img {
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
  }
  .food_list header span {
    font-size: .8rem;
    color: #333;
  }
  .food_list .food_list_ul {
    padding-top: .5rem;
  }
  .food_list .food_item_style {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 1.8rem;
    padding: 0 .7rem;
  }
  .food_list .food_item_style .food_name {
    width: 11rem;
  }
  .food_list .food_item_style .num_price {
    -ms-flex: 1;
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }
  .food_list .food_item_style .num_price span:first-of-type {
    color: #f60;
  }
  .food_list .food_item_style p, .food_list .food_item_style span {
    font-size: .65rem;
    color: #666;
  }
  .food_list .food_item_style {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 1.8rem;
    padding: 0 .7rem;
  }
  .food_list .food_item_style .food_name {
    width: 11rem;
  }
  .food_list .total_price {
    border-top: .025rem solid #f5f5f5;
  }
  .container_style {
    background-color: #fff;
    margin-top: .4rem;
    padding: 0 .7rem;
  }
  .pay_way .header_style {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 2rem;
  }
  .pay_way .header_style span:first-of-type {
    font-size: .7rem;
    color: #666;
  }
  .pay_way .header_style .more_type span:first-of-type {
    font-size: .6rem;
    color: #aaa;
    width: 10rem;
    display: inline-block;
    text-align: right;
    vertical-align: middle;
  }
  .confrim_order {
    /*display: -ms-flexbox;*/
    display: flex;
    position: fixed;
    bottom: 0rem;
    width: 100%;
    line-height: 5rem;
  }
  .confrim_order p:first-of-type {
    background-color: #3c3c3c;
    -ms-flex: 5;
    flex: 5;
    padding-left: .7rem;
  }
  .confrim_order p:nth-of-type(2) {
    -ms-flex: 2;
    flex: 2;
    background-color: #56d176;
    text-align: center;
  }
  .confrim_order p {
    line-height: 2rem;
    font-size: .75rem;
    color: #fff;
  }

  section {
    display: block;
  }

  </style>
