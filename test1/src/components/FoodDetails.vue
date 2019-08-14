<template>
    <div class="rating_page">
      <van-nav-bar
        :title="cc6.name"
        left-arrow
        @click-left="onClickLeft"
      />
      <section class="header_img">
        <img :src="'//elm.cangdu.org/img/'+cc6.image_path" class="food_img">
        <div class="cover"></div>
      </section>
      <p class="description">{{cc6.description}}</p>
      <section class="detail_container">
        <section class="detail_left">
          <p>{{cc6.name}}</p>
            <div class="rating_sale">
              <span>评分</span>
              <van-rate
                v-model="a"
                allow-half
                size="0.01"
                gutter="0"
                color="#ff9a0d"
                void-icon="star"
                void-color="#eee"
              />
              <span>{{cc6.rating}}</span>
            </div>
          <p><span>月售{{cc6.month_sales}}单</span><span>售价￥{{cc7}}</span><span>起</span></p>
          <p><span>评论数{{cc6.rating_count}}</span><span>好评率{{cc6.satisfy_rate}}%</span></p>
        </section>
      </section>
    </div>
</template>

<script>
    export default {
        name: "FoodDetails",
      data(){
        return{
          cc6:{},
          cc7:"",
          a:2
        }
      },
      mounted(){
        this.cc6 = this.$route.query.arrObj99;
        console.log(this.cc6);
        this.cc7=this.$route.query.arrObj99.specfoods[0].price
      },
      methods:{
        onClickLeft() {
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  .van-nav-bar{
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
  .van-nav-bar__title{
    font-size: 1.6rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
  .rating_page {
    background-color: #fff;
    padding-top: 1.95rem;
  }
  .header_img {
    position: relative;
  }
  .header_img .food_img {
    width: 100%;
    display: block;
  }
  .header_img .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .description {
    font-size: .6rem;
    color: #666;
    margin-top: .5rem;
    line-height: .8rem;
    bottom: .2rem;
    padding: 0 .4rem;
  }
  .detail_container {
    padding: .5rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }
  section {
    display: block;
  }
  .detail_container .detail_left p:first-of-type {
    font-size: .7rem;
    color: #333;
    margin-bottom: .2rem;
  }
  .detail_container .detail_left .rating_sale {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }
  .detail_container .detail_left .rating_sale span:first-of-type {
    font-size: .6rem;
    color: #666;
    margin-right: .2rem;
  }
  .detail_container .detail_left .rating_sale span:nth-of-type(2) {
    font-size: .55rem;
    color: #f60;
    margin-left: .2rem;
  }
  .detail_container .detail_left p:nth-of-type(2) {
    font-size: 0;
    margin-top: .3rem;
  }
  .detail_container .detail_left p:nth-of-type(2) span:first-of-type {
    font-size: .6rem;
    color: #666;
    margin-right: .4rem;
  }
  .detail_container .detail_left p:nth-of-type(2) span:nth-of-type(2), .detail_container .detail_left p:nth-of-type(2) span:nth-of-type(3) {
    font-size: .6rem;
    color: #f60;
    margin-right: .2rem;
  }
  .detail_container .detail_left p:nth-of-type(3) span {
    font-size: .6rem;
    color: #666;
  }
</style>
