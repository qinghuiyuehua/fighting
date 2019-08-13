<template>
    <div class="home">
      <van-nav-bar id="one"
                   :title="names"
                   left-text=""
                   right-text=""
                   left-arrow
      />

      <!--左上方图标-->
      <span class="a">
        <router-link :to="{path:'/search'}">
           <img src="../img/sousuo.png" alt="" id="sousuo">
        </router-link>
      </span>

      <!--右上方图标-->
      <span class="a">
        <router-link :to="{path:'/mine'}">
          <img src="../img/user.png" alt="" id="user">
        </router-link>
      </span>

      <!--轮播图-->
      <section id="mid">
        <swiper :options="swiperOption" class="swiper-container">
          <!--第一页轮播图-->
          <swiper-slide class="swiper1">
            <router-link :to="{path:'/'}" v-for="(k,i) in imgsrc1" :key ="i" class="a1">
              <img :src="'https://fuss10.elemecdn.com'+ k.image_url" alt="">
              <p>{{k.title}}</p>
            </router-link>
          </swiper-slide>
          <!--第二页轮播图-->
          <swiper-slide class="swiper2">
            <router-link :to="{path:'/'}" v-for="(k,i) in imgsrc2" :key ="i" class="a2">
              <img :src="'https://fuss10.elemecdn.com'+ k.image_url" alt="">
              <p>{{k.title}}</p>
            </router-link>
          </swiper-slide>
          <!--分页器-->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </section>

      <!--商店列表-->
      <section id="bot">
        <!--附近商家的提示语-->
        <div id="word">
            <span>
              <i class="el-icon-coffee"></i>
              <span>附近商家</span>
            </span>
        </div>
        <!--商家列表-->
        <ul>
          <li v-for="(k,i) in shop" :key="i" class="every" @click="enters(k,i)">
              <!--商户品牌图片-->
              <section class="shopimg">
                <img :src="'//elm.cangdu.org/img/'+k.image_path" class="imgs">
              </section>
              <!--右部分介绍-->
              <section class="jieshao">
                <!--第一行-->
                <div class="firstline">
                  <!--品牌-->
                  <div class="brand">
                    <span class="brandone">品牌</span>
                    <!--商家的名字-->
                    <span>{{k.name}}</span>
                  </div>
                  <!--保准票-->
                  <div class="baozhunpiao" v-for="(kk,ii) in k.supports">
                    <span>{{kk.icon_name}}</span>
                  </div>
                </div>
                <!--第二行-->
                <div class="secondline">
                  <!--星际评分-->
                  <span class="star">
                    <el-rate
                      v-model="k.rating"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}">
                    </el-rate>
                  </span>
                  <!--月售单数-->
                  <span class="yueshou">
                    <span>月售{{k.recent_order_num}}单</span>
                  </span>
                  <!--蜂鸟专送图标-->
                  <span class="fengniao">
                    {{k.delivery_mode.text}}
                  </span>
                  <!--准时达图标-->
                  <span class="zhunshi" v-for="(q,w) in k.supports">
                    <span v-if="w==1">{{q.name}}</span>
                  </span>
                </div>
                <!--第三行-->
                <div class="thirdline">
                  <!--起送费和配送费-->
                  <span class="cost">
                    <span>¥{{k.float_minimum_order_amount}} 元起送</span>
                    <span> /配送费约¥ {{k.float_delivery_fee}}</span>
                  </span>
                  <!--公里和小时-->
                  <span class="julixiaoshi">
                    <span>{{k.distance}}/</span>
                    <span style="color: lightskyblue">{{k.order_lead_time}}</span>
                  </span>
                </div>

              </section>


              <span></span>
          </li>
        </ul>
      </section>

    </div>

</template>

<script>
    export default {
        name: "Home",
        data(){
          return{
            names:"",
            //swiper轮播图的参数
            swiperOption: {
              pagination: '.swiper-pagination',
              loop: true,
            },
          //轮播图图片的数据
          //轮播图前8张
          imgsrc1:"",
          //轮播图后8张
          imgsrc2:"",
            //经纬度
            jingdu:"",
            weidu:"",
          //商店数据
          shop:"",
            //星级评分
            value:[],
          }
        },
        methods:{
          enters(k,i){
            //测试
            console.log(i);
            //把商户的id存到localStorage里
            localStorage.setItem("shopid",k.id);
            //测试
            let abc = localStorage.getItem("shopid");
            console.log(abc);
            this.$router.push({path:"/shopcontent"})
          },
        },
        created(){
          console.log(this.$store.state.a.citymsg2)
          this.names = this.$store.state.a.citymsg2;
          //地址过长,需要截取显示
          if(this.names.length>8){
            this.names = this.names.slice(0,8) + '...';
          }
        //请求轮播图中的图片
          this.$http({
            method: 'get',
            url: "https://elm.cangdu.org/v2/index_entry",
          }).then(res => {
            console.log(res);
            console.log(res.data);
            this.imgsrc1 = res.data.slice(0,8);
            this.imgsrc2 = res.data.slice(8,16)
          });
        //请求商家列表
          this.jingdu = localStorage.getItem("jingdu");
          this.weidu = localStorage.getItem("weidu");
          console.log(this.jingdu);
          console.log(this.weidu);
          this.$http({
            method: 'get',
            url: "https://elm.cangdu.org/shopping/restaurants?latitude="+this.weidu+"&longitude="+this.jingdu,
          }).then(res => {
            console.log(res);
            console.log(res.data);
            this.shop = res.data;

            //遍历星际评分
            // for(let v of res.data){
            //   console.log(v);
            //   this.value.push(v.rating);
            // }
            // console.log(this.value);
          });
        },
    }
</script>

<style scoped>
  .home{
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
  #one{
    background: #3190e8;
  }
  .van-nav-bar .van-icon {
    color: white;
    font-size: 2rem;
  }

  .van-nav-bar__title {
    color: white;
    font-weight: 700;
    font-size: 2rem;
  }

  .van-nav-bar__text {
    color: white;
    font-size: 2rem;
  }

  .van-icon-arrow-left:before {
    content: "";
  }

  .a{
    position: absolute;
    top: 0;
    z-index: 99;
  }
  #sousuo{
    position: absolute;
    width: 3rem;
    left: 1rem;
    top: 0.5rem;
  }
  #user{
    position: absolute;
    left: 28.5rem;
    top: 0.5rem;
    width: 2rem;
  }
  .a1{
    width: 25%;
  }
  .a2{
    width: 25%;
  }
  .swiper1{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
  }
  .swiper2{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
  }
  .swiper1 img{
    width: 60%;
  }
  .swiper2 img{
    width: 60%;
  }
  .swiper-pagination{
    position: absolute;
    bottom: 0;
  }
  #mid{
    width: 100%;
    background: white;
    padding-bottom: 2rem;
  }
  #bot{
    background: white;
    margin-top: 2rem;
  }
  #word{
    font-size: 1.5rem;
    color: gray;
    padding: 1rem;
  }
  .imgs{
    width: 4.5rem;
  }
  #bot{

  }
  .every{
    display: flex;
    border-bottom: .025rem solid #f1f1f1;
    padding: .7rem .4rem;
    border: 1rem solid white;
    border-left: none;
    border-right: none;
  }
  .shopimg{
    /*position: absolute;*/
  }
  .jieshao{
    /*position: absolute;*/

  }
  .fengniao{
    display: inline-block;
    color: #fff;
    background-color: #3190e8;
    border: .025rem solid #3190e8;
    font-size: .4rem;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
    margin-left: 1rem;
  }
  .zhunshi{
    display: inline-block;
    color: #3190e8;
    border: .025rem solid #3190e8;
    font-size: .4rem;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
    margin-left: .08rem;
  }
  .brand{
    display: inline-block;
  }
  .brandone{
    display: inline-block;
    font-size: 1rem;
    line-height: .6rem;
    color: #333;
    background-color: #ffd930;
    padding: 0.3rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }
  .baozhunpiao{
    display: inline-block;
    float: right;
    font-size: .5rem;
    color: #999;
  }
  .el-rate {
    display: inline-block;
    /*border: 1rem solid red;*/
    height: 0;
    /*line-height: 1;*/
    font-size: .5rem;
  }
  .firstline{
    margin-left: 1rem;
  }
  .secondline{
    width: 100%;
    height: 1.5rem;
    font-size: 1rem;
  }
  .thirdline{
    margin-left: 1rem;
  }
  .julixiaoshi{
    float: right;
  }
</style>
