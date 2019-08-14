<template>
   <div class="aaaa">
     <div class="head">
       <div class="Information">
         <img :src="'http://elm.cangdu.org/img/'+cityPage31.image_path" class="img1">
         <van-icon name="arrow-left" class="vanOne" @click="goBack1" />
         <div class="header">
           <div class="leftTop" @click="Details">
             <div class="img2">
               <img :src="'http://elm.cangdu.org/img/'+cityPage31.image_path">
             </div>
             <div class="rightTop">
               <h4 class="title">{{cityPage31.name}}</h4>
               <p class="text">商家配送 / 分钟送达 / 配送费￥{{cityPage31.float_delivery_fee}}</p>
               <p class="promotion">公告：{{cityPage31.promotion_info}}</p>
             </div>
             <van-icon name="arrow" class="vanTwo" />
           </div>
           <div class="footer" @click="activity">
             <p class="poo">
               <span class="span1">{{pe2}}</span>
               <span>{{pe3}}（APP专享）</span>
             </p>
             <p class="poo1">{{pe1.length}}个活动</p>
             <van-icon name="arrow" class="vanThree" />
           </div>
         </div>
       </div>
     </div>
<!---->
     <!--活动弹框-->
        <div class="activities_details" v-if="ty5===2">
          <h2 class="activities_shoptitle">{{cityPage31.name}}</h2>
          <section class="activities_list">
            <header class="activities_title_style"><span>优惠信息</span></header>
          </section>
          <ul>
            <li v-for="ty11 in type76">
              <span class="activities_icon wqw">{{ty11.icon_name}}</span><span class="wqw">{{ty11.description}}(APP专享)</span>
            </li>
          </ul>
          <section class="activities_shopinfo">
            <header class="activities_title_style"><span>商家公告</span></header>
          </section>
          <p class="ppp">{{cityPage31.promotion_info}}</p>
          <i class="el-icon-circle-close-outline"></i>
          <div class="cancel" @click="cancel"><van-icon name="cross" /></div>
        </div>
     <!--切换按钮-->
     <div class="changeType">
       <span class="goods">
         <span :class="[colorKey == 1 ? 'spanShow_2' : 'spanShow_1']" @click="changeColor(1)">商品</span>
       </span>
       <span class="describe">
         <span :class="[colorKey == 2 ? 'spanShow_2' : 'spanShow_1']" @click="changeColor(2)">评价</span>
       </span>

     </div>
     <!--商品列表-->
     <div class="pos" v-if="ty1===1">
       <div class="pos1">
         <ul>
         <li v-for="(page12,index) in type56" @click="pageClick(page12.name,index)" :class="[key == index ? 'liN' : 'liP']" >
           <span>{{page12.name}}</span>
         </li>
       </ul>
         </div>
       <div class="pos2" ref="pos2">
         <ul>
           <li v-for="(page13,index) in type56">
             <div class="headerY">
               <div class="headerY1">
                 <span class="headerY1S">{{page13.name}}</span>
                 <span class="headerY1s">{{page13.description}}</span>
               </div>
               <span></span>
             </div>
             <div v-for="(page14,index) in page13.foods" class="footerZ" @click="foodDetailsClick(page14)">
               <div class="footerZ1">
                 <div class="footerZ2">
                   <img :src="'http://elm.cangdu.org/img/'+page14.image_path" alt="">
                 </div>
                 <div class="footerZ3">
                   <h3 class="footerZ31">{{page14.name}}</h3>
                   <span class="ulX" v-if="page14.attributes.length>0">
                     <span class="liX">
                       <p class="pX">新品</p>
                     </span>
                   </span>
                   <p class="footerZ32">{{page14.description}}</p>
                   <p class="footerZ33"><span>月售{{page14.month_sales}}份</span><span>好评率{{page14.satisfy_rate}}%</span></p>
                 </div>
               </div>
               <div class="footerZ4">
                 <div class="footerZ41"><span class="span2">￥</span><span class="span2">{{type59[index]}}</span><span>起</span></div>
                 <div class="footerZ42"v-if="page14.specfoods.length>1">选规格</div>
                 <div v-if="page14.specfoods.length<=1"><i class="el-icon-remove-outline"></i><span>re</span><i class="el-icon-circle-plus"></i></div>
               </div>
             </div>
           </li>
         </ul>
       </div>
     </div>
     <!--评价部分-->
     <div v-if="ty1===2" class="score1">
        <div class="score2">
          <div class="score21">
            <p class="score211">{{parseFloat(score.overall_score).toFixed(1)}}</p>
            <p class="score212">综合评价</p>
            <p class="score213">高于周边商家{{parseFloat(score.compare_rating*100).toFixed(1)}}%</p>
          </div>
          <div class="score22">
            <p class="score221"><span class="scoreSpan">服务态度</span>
              <van-rate
              v-model="score.service_score"
              allow-half
              size="1"
              gutter="0"
              color="#ff9a0d"
              void-icon="star"
              void-color="#eee"
            />
              <span>{{parseFloat(score.service_score).toFixed(1)}}</span>
            </p>
            <p class="score222"><span class="scoreSpan">菜品评价</span>
              <van-rate
                v-model="score.food_score"
                allow-half
                size="1"
                gutter="0"
                color="#ff9a0d"
                void-icon="star"
                void-color="#eee"
              />
              <span>{{parseFloat(score.food_score).toFixed(1)}}</span>
            </p>
            <p class="score223"><span class="scoreSpan">送达时间</span>{{score.deliver_time}}<span class="scoreSpan1">分钟</span></p>
          </div>
        </div>
       <ul class="classification">
         <li v-for="ty2 in classification">{{ty2.name}}</li>
       </ul>
       <ul class="ulQ">
         <li v-for="ty3 in information" class="liQ">
           <img src="//elm.cangdu.org/img/default.jpg" class="imgQ">
           <div class="div1">
             <div class="div11">
               <div class="div111"><p class="div111p1">{{ty3.username}}</p><p class="div111p2">
                 <van-rate
                   v-model="ty3.rating_star"
                   allow-half
                   size="1"
                   gutter="0"
                   color="#ff9a0d"
                   void-icon="star"
                   void-color="#eee"
                 />
                 <span class="div111p2span">{{ty3.time_spent_desc}}</span>
               </p></div>
               <span class="div111p3">{{ty3.rated_at}}</span>
             </div>
             <ul class="foot1"><li v-for="ty4 in ty3.item_ratings"><img :src="'https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg'" class="footImg"></li></ul>
             <ul class="foot2"><li v-for="ty5 in ty3.item_ratings" class="footWord">{{ty5.food_name}}</li></ul>
           </div>
         </li>
       </ul>
     </div>
   </div>
</template>

<script>
  import Vue from "vue";
    export default {
        name: "BusinessInformation",
      data(){
        return{
          cc4:"",
          cityPage31:{},
          pe1:{},
          pe2:{},
          pe3:{},
          activeKey: 0,
          type56:[],
          type59:[],
          key:'0',
          colorKey:'',
          // pageId:[],
          // pageM:[],
          score:{},
          ty1:1,
          classification:[],
          information:[],
          ty5:'1',
          type76:[]
        }
      },
      methods:{
        //  点击跳转食品详情页面
        foodDetailsClick(v){
          this.$router.push({path:"/FoodDetails",query:{arrObj99:v}});
        },
        cancel(){
          this.ty5=1;
        },
        goBack1(){
          window.history.go(-1);
        },
        //点击筛选
        pageClick(v,k){
          this.key = k;
          // console.log(k,'点击识别点击的第几个');
          let h = document.querySelectorAll('.pos2 li');
          // console.log(h[k].offsetTop,this.$refs.pos2.scrollTop,h[k]);
          this.$refs.pos2.scrollTop=h[k].offsetTop;
        },
        //点击商品和评价页面互相跳转
        changeColor(id){
          this.colorKey = id;
          if (id===2){
            //跳转页面
            this.ty1=2;
            //获取评价分数
            let url8 = "https://elm.cangdu.org/ugc/v2/restaurants/"+this.cc4+"/ratings/scores";
            Vue.axios.get(url8).then((result)=>{
              console.log(result.data,"评价分数");
              this.score=result.data;
            }).catch((error)=>{
              console.log(error);
            });
            //获取评价分类
            let url9 = "https://elm.cangdu.org/ugc/v2/restaurants/"+this.cc4+"/ratings/tags";
            Vue.axios.get(url9).then((result)=>{
              console.log(result.data,"评价分类");
              this.classification=result.data;
            }).catch((error)=>{
              console.log(error);
            });
            //获取评价信息
            let url10 = "https://elm.cangdu.org/ugc/v2/restaurants/"+this.cc4+"/ratings";
            Vue.axios.get(url10).then((result)=>{
              console.log(result.data,"评价信息");
              this.information=result.data;
            }).catch((error)=>{
              console.log(error);
            });
          }else {
            this.ty1=1;
          }
        },
        //点击跳转商家详情页面
        Details(){
          this.$router.push({path:"/BusinessDetails"});
          //通过JSON向商家详情页面传递数据
          let q = JSON.stringify(this.cityPage31);
          localStorage.removeItem('arrObj9');
          localStorage.setItem('arrObj9',q);
        },
        activity(){
          this.ty5=2;
        }
      },
      mounted(){
        this.changeColor(1);
        this.cc4=this.$route.query.id;
        console.log(this.cc4);
        let url4 = "https://elm.cangdu.org/shopping/restaurant/"+this.cc4;
        Vue.axios.get(url4).then((result)=>{
          console.log(result.data);
          this.cityPage31=result.data;
          this.pe1=result.data.activities;
          this.pe2=result.data.activities[0].icon_name;
          this.pe3=result.data.activities[0].description;
          this.type76=result.data.activities;
        }).catch((error)=>{
          console.log(error);
        });
        //获取食品列表
        let url5="https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+this.cc4;
        Vue.axios.get(url5).then((result)=>{
          console.log(result.data,"食品列表");
          this.type56=result.data;
          // this.key=result.data[0].name;
          this.type56.forEach(v => {
            v.foods.forEach(v => {
              this.type59.push(v.specfoods[0].price);
            });
          });

          // console.log(this.type58,'ty58',this.type59);
        }).catch((error)=>{
          console.log(error);
        });
      },
    }
</script>

<style scoped>
  .van-rate{
    size: 1.1rem;
  }
  .aaaa{
    background: #f5f5f5;
  }
  .head{
    position: fixed;
    z-index: 15;
    /*margin-top: -5rem;*/
    width: 100%;
  }
  .Information{
    overflow: hidden;
    position: relative;
    z-index: 12;

  }
  .img1{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    -webkit-filter: blur(10px);
    filter: blur(10px);
  }
  .header{
    position: relative;
    background-color: rgba(119,103,137,.43);
    padding: .4rem 0 .4rem .4rem;
    width: 100%;
    overflow: hidden;
    z-index: 10;
  }
  .leftTop{
    display: flex;
  }
 .img2{
    margin-right: .8rem;
  }
  .img2 img{
    width: 5.5rem;
    height: 5.5rem;
    display: block;
    border-radius: .4rem;
    margin-top: .7rem;
  }
  .rightTop{
    flex: 1;
  }
  .title{
    font-size: 1.8rem;
    color: #fff;
    font-weight: 700;
    width: 100%;
    margin-bottom: .6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .text{
    font-size: .8rem;
    color: #fff;
    margin-bottom: .6rem;
  }
  .promotion{
    font-size: .8rem;
    color: #fff;
    width: 11.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .footer{
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: .5rem;
    padding-right: 1rem;
    position: relative;
  }
  .footer p{
    z-index: 10;
    font-size: .5rem;
    color: #fff;
  }
  .poo1{
    position: absolute;
    right: 2rem;
  }
  .poo{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .poo span{
    color: #fff;
  }
  .span1{
    background-color: #f07373;
    /*border-color: #f07373;*/
    padding: 0 .08rem;
    border: .025rem solid #fff;
    border-radius: .1rem;
    font-size: .4rem;
    display: inline-block;
  }
  .vanThree{
       z-index: 11;
       font-size: 1.3rem;
       color: #fff;
     }
  .vanOne{
    position: absolute;
    left: 0.1rem;
    top: 0.8rem;
    z-index: 100;
    font-size: 2.5rem;
    color: #fff;
  }
  .vanTwo{
    position: absolute;
    right: 1rem;
    top: 4.5rem;
    z-index: 11;
    font-size: 1.6rem;
    color: #fff;
  }
  .changeType{
    display: -ms-flexbox;
    display: flex;
    background-color: #fff;
    padding: .3rem 0 .6rem;
    border-bottom: 1px solid #ebebeb;
    position: fixed;
    z-index: 15;
    line-height: 2.5rem;
    text-align: center;
    width: 100%;
    margin-top: 10rem;
  }
  .goods, .describe{
    width: 50%;
  }
  .spanShow_1{
    font-size: 1.5rem;
    color: #666;
  }
  .spanShow_2{
    font-size: 1.5rem;
    border-bottom: 0.25rem solid #3190e8;
    padding-bottom: 0.3rem;
    color: #3190e8;
  }
  .headerY{
    width: 100%;
    padding: .8rem;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }
  .headerY1{
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    line-height: 3rem;
  }
  .headerY1S{
    font-size: 1.5rem;
    color: #666;
    font-weight: 700;
  }
  .headerY1s{
    font-size: 1rem;
    color: #999;
    width: 30%;
    overflow: hidden;
  }
  .footerZ{
    background-color: #fff;
    padding: .6rem .4rem;
    border-bottom: 1px solid #f8f8f8;
    position: relative;
    overflow: hidden;
  }
  .footerZ1{
    display: flex;
  }
  .footerZ2{
    margin-right: .4rem;
  }
  .footerZ2 img{
    width: 4rem;
    height: 4rem;
    display: block;
  }
  .footerZ3{
    margin-right: .4rem;
  }
  .footerZ31{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: .2rem;
    margin-top: 0;
    font-size: 2rem;
  }
  .footerZ32{
    font-size: 1.1rem;
    color: #999;
    line-height: .6rem;
  }
  .footerZ33{
    line-height: .8rem;
  }
  .footerZ4{
    margin-left: 2.4rem;
    font-size: 0;
    margin-top: .3rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .footerZ41 .span2{
    font-size: 1.1rem;
    color: #f60;
    margin-right: .05rem;
  }
  .footerZ42{
    display: block;
    font-size: .55rem;
    color: #fff;
    padding: .1rem .2rem;
    background-color: #3190e8;
    border-radius: .5rem;
    border: 1px solid #3190e8;
  }
  .pos{
    position: absolute;
    top: 14rem;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .pos1{
    position: fixed;
    z-index: 10;
    height: 100%;
    width: 20%;
    overflow-y: scroll;
    /*padding-top: 14rem;*/

  }
  .pos2{
    position: absolute;
    width: 80%;
    height: 100%;
    top: 0;
    right: 0;
    overflow-y: scroll;
  }
  .ulX{
    display: -ms-flexbox;
    display: flex;
  }
  .liX{
    margin-bottom: 0;
    color: rgb(94, 196, 82);
    border-color: rgb(94, 196, 82);
    position: absolute;
    top: 0;
    left: 0;
    background-color: #4cd964;
    width: 3rem;
    height: 3rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: end;
    align-items: flex-end;
    transform: rotate(-45deg) translate(-.1rem,-2rem);
    border: none;
    border-radius: 0;
  }
  .pX{
    font-size: .5rem;
    color: #fff;
    text-align: center;
    -ms-flex: 1;
    flex: 1;
    transform: scale(.8) translate(0,1.2rem);
  }
  .el-icon-remove-outline{
    font-size: 2rem;
    color: #3190e8;
  }
  .el-icon-circle-plus{
    font-size: 2rem;
    color: #3190e8;
  }
  .liN{
         color: #323233;
         font-weight: 500;
         border-left: 0.5rem solid #3190e8;
         background-color: white;
    display: block;
    box-sizing: border-box;
    padding: 2rem 1rem 2rem .7rem;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.4;
    word-break: break-all;
    -webkit-user-select: none;
    user-select: none;
       }
  .liP{
    display: block;
    box-sizing: border-box;
    padding: 2rem 1rem 2rem .7rem;
    overflow: hidden;
    color: #7d7e80;
    font-size: 14px;
    line-height: 1.4;
    word-break: break-all;
    border-left: 0.5rem solid #f8f8f8;
    background-color: #f8f8f8;
    -webkit-user-select: none;
    user-select: none;
  }
  .liP span{
    border-bottom: 0;
  }
  .score1{
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 14rem;
    overflow: hidden;
  }
  .score2{
    display: flex;
    background-color: #fff;
    padding: .8rem .5rem;
    margin-bottom: .5rem;
  }
  .score21{
    -ms-flex: 3;
    flex: 3;
    text-align: center;
  }
  .score22{
    -ms-flex: 4;
    flex: 4;
  }
  .score211{
    font-size: 3rem;
    color: #f60;
  }
  .score212{
    font-size: 1.3rem;
    color: #666;
    margin-bottom: .2rem;
  }
  .score213{
    font-size: 1.1rem;
    color: #999;
  }
  .score22 p{
    margin-top: 1rem;
    font-size: 1.3rem;
    line-height: 1rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .scoreSpan{
    color: #666;
    margin-right: .5rem;
  }
  .scoreSpan1{
    font-size: 1.1rem;
    color: #999;
  }
  .classification{
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    background-color: #fff;
    padding: .5rem;
  }
  .classification li{
    font-size: 1.8rem;
    color: #6d7885;
    padding: .5rem;
    background-color: #ebf5ff;
    border-radius: .3rem;
    border: 1px;
    margin: .8rem 1.2rem 0;
  }
  .ulQ{
    background-color: #fff;
    padding: 0 .5rem;
    overflow: hidden;
  }
  .liQ{
    border-top: 1px solid #f1f1f1;
    display: -ms-flexbox;
    display: flex;
    padding: .6rem 0;
  }
  .imgQ{
    width: 1.5rem;
    height: 1.5rem;
    border: .025rem;
    border-radius: 50%;
    margin-right: .8rem;
  }
  .div1{
    flex: 1;
  }
  .div11{
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: .3rem;
  }
  .div111{
    font-size: 1.1rem;
    color: #666;
  }
  .div111p1{
    color: #666;
    margin-bottom: .2rem;
    font-size: 1.1rem;
  }
  .div111p2{
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }
  .div111p2span{
    font-size: 1.1rem;
    color: #666;
    margin-left: .15rem;
  }
  .div111p3{
    font-size: 1.1rem;
    color: #999;
  }
  .foot1{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: .4rem;
  }
  .footImg{
    width: 6rem;
    height: 6rem;
    margin-right: .8rem;
    display: block;
  }
  .foot2{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .footWord{
    font-size: 1.1rem;
    color: #999;
    width: 10rem;
    padding: .2rem;
    border: .025rem solid #ebebeb;
    border-radius: .15rem;
    margin-right: .3rem;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .activities_details{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #262626;
    z-index: 200;
    padding: 1.25rem;
  }
  .activities_details .activities_shoptitle {
    text-align: center;
    font-size: 1.6rem;
    color: #fff;
  }
  .activities_details .activities_list{
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #fff;
  }
  .activities_details .activities_title_style{
    text-align: center;
    margin-bottom: 1rem;
  }
  .activities_details .activities_title_style span {
    font-size: .5rem;
    color: #fff;
    border: .025rem solid #555;
    padding: .2rem .4rem;
    border-radius: .5rem;
  }
  .activities_details .activities_list li{
    margin-bottom: .2rem;
  }
   .activities_icon {
    padding: 0 .02rem;
    display: inline-block;
    border: .025rem solid #fff;
    border-radius: .1rem;

  }
  .wqw {
    color: #fff;
    line-height: .6rem;
  }
  .activities_details .activities_title_style {
    text-align: center;
    margin-bottom: 1rem;
  }
  .activities_details .activities_title_style span {
    font-size: .5rem;
    color: #fff;
    border: .025rem solid #555;
    padding: .2rem .4rem;
    border-radius: .5rem;
  }
  .ppp{
    line-height: .7rem;
    font-size: .5rem;
    color: #fff;
  }
  .cancel{
    font-size: 3rem;
    text-align: center;
    border-radius: 50%;
    border:  1px solid white;
    width: 4rem;
    height: 4rem;
    color: white;
    bottom: 2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .van-icon{
    line-height: 1rem;
    size: 1rem;
  }
</style>
