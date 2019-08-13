<template>
    <div class="searchaddress">
      <van-nav-bar id="one"
                   title="搜索地址"
                   left-text=""
                   right-text=""
                   left-arrow
                   @click-left="onClickLeft"
      />
      <section>
        <span>
          <input type="text" v-model="value" placeholder="请输入小区/写字楼/学校等">
        </span>
        <span>
          <van-button type="info" @click="add">确认</van-button>
        </span>
      </section>
      <p>为了满足商家的送餐要求,建议您从列表中选择地址</p>
      <div id="line"></div>
      <div id="word" v-if="show1">
        <div>找不到地址?</div>
        <div>请尝试输入小区,写字楼或学校名</div>
        <div>详细地址(如门牌号)可稍后详细输入哦.</div>
      </div>

      <ul>
        <li v-for="(k,i) in keys">
            <div @click="selects(k,i)">{{k.name}},<br>{{k.address}}</div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "SearchAddress",
        data(){
          return{
            show1:false,
            id:localStorage.getItem("cityid"),
            value:"",
            keys:[],
          }
        },
        methods:{
          onClickLeft() {
            this.$router.go(-1);
          },
          add(){
            this.$http({
              method: 'get',
              url: "https://elm.cangdu.org/v1/pois?city_id="+this.id+"&keyword="+this.value+"&type=search",
            }).then(res => {
              console.log(res);
              this.keys = res.data;
              console.log(this.keys);
            });
          },
          selects(k,i){
            console.log(i);
            console.log(k.name);
            localStorage.setItem("searchaddress",k.name);
            this.value = localStorage.getItem("searchaddress");
            this.$router.go(-1);
          },
        }
    }
</script>

<style scoped>
  .searchaddress{
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

  input{
    width: 80%;
    background: #f5f5f5;
    height: 3rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  span{
    text-align: center;
  }
  section{
    background: white;
    text-align: center;
  }

  p{
    background: #fff6e4;
    font-size: 1.5rem;
    color: #ff883f;
    text-align: center;
    padding: .2rem 0;
  }
  #line{
    width: 100%;
    height: 0.1rem;
    background: gray;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  #word{
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: #969696;
    margin-top: 15rem;
  }
   ul{
     width: 100%;
     background: #f5f5f5;
  }
  li div{
    border-bottom: 1px solid #ccc;
    padding: 0.6rem;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    font-size: 1.5rem;
    color: #969696;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
  }
</style>
